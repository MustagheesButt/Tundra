import Link from 'next/link'

import Layout from "../components/layout"
import { getAllPostsWithSlug } from "../lib/api"

const Blog = ({ posts }) => {
  const postsList = posts.edges.map(p =>
    <Link href={`/blog/${p.node.slug}`} key={p.node.slug}>
      <div>{p.node.title}</div>
    </Link>
  )

  return (
    <Layout title='Blog &mdash; Tundra'>
      {postsList}
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await getAllPostsWithSlug()

  return {
    props: { posts }
  }
}

export default Blog