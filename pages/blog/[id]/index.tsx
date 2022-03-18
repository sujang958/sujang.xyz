/* eslint-disable react/no-children-prop */
import { gql } from "@apollo/client"
import { GetServerSidePropsContext, NextPage } from "next"
import Head from "next/head"
import DefaultErrorPage from "next/error"
import Container from "../../../components/container"
import client from "../../../utils/graphql"
import { Post } from "../../api/graphql"
import moment from "moment"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

const GET_POST = gql`
  query GetPost($id: String!) {
    post(_id: $id) {
      _id
      title
      article
      category
      date
    }
  }
`

const PostPage: NextPage<{ post: Post | null }> = ({ post }) => {
  if (!post) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <DefaultErrorPage statusCode={404} />
      </>
    )
  }

  return (
    <Container>
      <div className="flex min-h-screen w-full max-w-5xl flex-col self-center py-24 px-6">
        <div className="flex flex-col justify-evenly space-y-0.5 py-4">
          <p className="cursor-pointer text-2xl text-blue-500 transition duration-200 hover:text-blue-400">
            &gt; {post.category}
          </p>
          <div className="flex flex-row items-baseline justify-between">
            <p className="text-5xl font-bold">{post.title}</p>
            <p className="text-xl">
              {moment(new Date(Number(post.date))).format(
                "YYYY/MM/DD hh:mm:ss"
              )}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center border-t border-slate-700 px-12 py-4">
          <ReactMarkdown
            linkTarget="_blank"
            remarkPlugins={[remarkGfm]}
            components={{
              a: ({ className, href, children, ...props }) => (
                <a
                  {...props}
                  href={href}
                  className={`${className} cursor-pointer underline`}
                >
                  {children}
                </a>
              ),
              h1: ({ className, children, ...props }) => (
                <p {...props} className={`${className} text-6xl`}>
                  {children}
                </p>
              ),
              h2: ({ className, children, ...props }) => (
                <p {...props} className={`${className} text-5xl`}>
                  {children}
                </p>
              ),
              h3: ({ className, children, ...props }) => (
                <p {...props} className={`${className} text-4xl`}>
                  {children}
                </p>
              ),
              h4: ({ className, children, ...props }) => (
                <p {...props} className={`${className} text-3xl`}>
                  {children}
                </p>
              ),
              h5: ({ className, children, ...props }) => (
                <p {...props} className={`${className} text-2xl`}>
                  {children}
                </p>
              ),
              h6: ({ className, children, ...props }) => (
                <p {...props} className={`${className} text-xl`}>
                  {children}
                </p>
              ),
              p: ({ className, children, ...props }) => (
                <p {...props} className={`${className} text-[1.35rem]`}>
                  {children}
                </p>
              ),
            }}
            className="whitespace-pre-wrap break-words"
            children={post.article}
          />
        </div>
      </div>
    </Container>
  )
}

export default PostPage

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.query
  try {
    const { data } = await client.query({
      query: GET_POST,
      variables: {
        id,
      },
    })
    return { props: { post: data.post ?? null } }
  } catch (e) {
    console.log(e)
    return { props: { post: null } }
  }
}
