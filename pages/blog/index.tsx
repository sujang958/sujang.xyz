import { gql } from "@apollo/client"
import { NextPage } from "next"
import Container from "../../components/container"
import PostItem from "../../components/PostItem"
import client from "../../utils/graphql"
import { Post } from "../api/graphql"

const GET_POSTS_ID = gql`
  {
    posts {
      _id
    }
  }
`

const BlogIndex: NextPage = ({
  posts,
}: {
  posts: Omit<Post, "title" | "article" | "category" | "date">[]
}) => {
  return (
    <Container>
      <div className="flex min-h-screen w-full max-w-5xl flex-col self-center">
        <div className="flex flex-col justify-center px-6 pt-24">
          <p className="text-5xl font-bold">Blog4me</p>
        </div>
        <div className="flex w-full flex-col items-center justify-evenly space-y-6 py-12">
          {posts.map(({ _id }, i) => (
            <PostItem id={_id} key={i} />
          ))}
        </div>
      </div>
    </Container>
  )
}

export default BlogIndex

export async function getServerSideProps() {
  const {
    data: { posts },
  } = await client.query({
    query: GET_POSTS_ID,
  })
  return { props: { posts } }
}
