import { GQL_URL } from "./constants"

const API_URL = GQL_URL
let localStorage

async function fetchAPI(query, { variables } = {}) {
  const wooSession = localStorage?.getItem('woo-session')
  const headers = { 'Content-Type': 'application/json' }

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      'Authorization'
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
  }

  if (wooSession) headers['woocommerce-session'] = `Session ${wooSession}`

  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const temp = res.headers.get('woocommerce-session')
  if (temp && temp != wooSession) {
    localStorage?.setItem('woo-session', temp)
  }

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getPreviewPost(id, idType = 'DATABASE_ID') {
  const data = await fetchAPI(
    `
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`,
    {
      variables: { id, idType },
    }
  )
  return data.post
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug,
            title
          }
        }
      }
    }
  `)
  return data?.posts
}

export async function getAllProducts() {
  const data = await fetchAPI(`
    {
      products(first: 10000) {
          nodes {
            id
            databaseId
            slug
            name
            shortDescription
            description
            productTags {
              nodes {
                name
              }
            }
            image {
              mediaItemUrl
              sourceUrl
              srcSet
            }
            ... on SimpleProduct {
              id
              price
              salePrice
            }
          }
      }
    }
  `)
  return data?.products
}

export async function getProduct(slug) {
  const data = await fetchAPI(`
    query ProductQuery($slug: ID!) {
      product(id: $slug, idType: SLUG) {
        description
        id
        databaseId
        image {
          mediaItemUrl
          sourceUrl
          srcSet
        }
        name
        reviews {
          nodes {
            content
            date
          }
        }
        status
        productTags {
          nodes {
            name
          }
        }
        productCategories {
          nodes {
            name
          }
        }
        ... on SimpleProduct {
          id
          price
          salePrice
        }
      }
    }
  `, {
    variables: {
      slug
    }
  })

  return data?.product
}

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  )

  return data?.posts
}

export async function getPostAndMorePosts(slug, preview, previewData) {
  const postPreview = preview && previewData?.post
  // The slug may be the id of an unpublished post
  const isId = Number.isInteger(Number(slug))
  const isSamePost = isId
    ? Number(slug) === postPreview.id
    : slug === postPreview.slug
  const isDraft = isSamePost && postPreview?.status === 'draft'
  const isRevision = isSamePost && postPreview?.status === 'publish'
  const data = await fetchAPI(
    `
    fragment AuthorFields on User {
      name
      firstName
      lastName
      avatar {
        url
      }
    }
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          ...AuthorFields
        }
      }
      categories {
        edges {
          node {
            name
          }
        }
      }
      tags {
        edges {
          node {
            name
          }
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
        ${
          // Only some of the fields of a revision are considered as there are some inconsistencies
          isRevision
            ? `
        revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              content
              author {
                node {
                  ...AuthorFields
                }
              }
            }
          }
        }
        `
            : ''
        }
      }
      posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...PostFields
          }
        }
      }
    }
  `,
  {
    variables: {
      id: isDraft ? postPreview.id : slug,
      idType: isDraft ? 'DATABASE_ID' : 'SLUG',
    },
    }
  )

  // Draft posts may not have an slug
  if (isDraft) data.post.slug = postPreview.id
  // Apply a revision (changes in a published post)
  if (isRevision && data.post.revisions) {
    const revision = data.post.revisions.edges[0]?.node

    if (revision) Object.assign(data.post, revision)
    delete data.post.revisions
  }

  // Filter out the main post
  data.posts.edges = data.posts.edges.filter(({ node }) => node.slug !== slug)
  // If there are still 3 posts, remove the last one
  if (data.posts.edges.length > 2) data.posts.edges.pop()

  return data
}

export const addToWPCart = async (productId, clientMutationId) => {
  const data = await fetchAPI(
    `
    mutation AddToCartMutation {
      addToCart(input: {productId: ${productId}}) {
        clientMutationId
      }
    }
    `
  )

  return data
}

export const getWPCart = async () => {
  const data = await fetchAPI(
    `
    query {
      cart {
        contents {
          nodes {
            product {
              node {
                databaseId
                name
                ... on SimpleProduct {
                  id
                  name
                  price
                }
              }
            }
            quantity
            subtotal
          }
        }
      }
    }
    `
  )

  return data?.cart.contents.nodes
}

export async function registerUser() {
  const data = await fetchAPI(
    `
    mutation RegisterUser {
      registerUser(
        input: {
            clientMutationId: "uniqueId",
            username: "${username}",
            password: "${password}",
            email: "${email}"
        }) {
        user {
          jwtAuthToken
          jwtRefreshToken
        }
      }
    }
    `
  )

  return data
}

export async function loginUser(username, password) {
  const data = await fetchAPI(
    `
    mutation LoginUser {
      login( input: {
        clientMutationId: "uniqueId",
        username: "${username}",
        password: "${password}"
      } ) {
        authToken
        user {
          id
          name
          email
        }
      }
    }    
    `
  )

  return data?.login
}