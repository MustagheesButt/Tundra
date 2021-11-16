import { useRouter } from "next/router"

import Layout from "../../components/layout"
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api"

const Post = ({ post }) => {
  const router = useRouter()

  // if (router.isFallback)
  //   return <h1>Loading</h1>

  return (
    <Layout title={`${post.title} &mdash; Tundra`}>
      <h1>{post.title} <small>by {post.author.node.email}</small></h1>
      <article dangerouslySetInnerHTML={{__html: post.excerpt}}></article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const posts = await getAllPostsWithSlug()

  const paths = posts.edges.map(p => ({ params: { slug: p.node.slug } }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const data = await getPostAndMorePosts(params['slug'], false)

  return {
    props: { post: data.post }
  }
}

export default Post