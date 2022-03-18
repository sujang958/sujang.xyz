import { gql, useQuery } from "@apollo/client"
import Router from "next/router"
import { FC } from "react"
import moment from "moment"

const GET_POST = gql`
  query GetPost($id: String!) {
    post(_id: $id) {
      _id
      title
      article
      date
      category
    }
  }
`

const PostItem: FC<{ id: string }> = ({ id }) => {
  const { data, loading } = useQuery(GET_POST, { variables: { id } })
  return (
    <div
      onClick={() => Router.push(`/blog/${id}`)}
      className="flex w-5/6 transform-gpu cursor-pointer flex-col justify-between rounded-lg border border-slate-600 py-2 px-4 shadow transition duration-300 hover:scale-105 md:w-3/5"
    >
      <div className="flex flex-col py-3">
        <p className="cursor-pointer text-xl text-blue-500 transition duration-200 hover:text-blue-400">
          &gt; {loading ? "Loading" : data?.post.category ?? "Error!"}
        </p>
        <p className="text-3xl font-bold">
          {loading ? "Loading" : data?.post.title ?? "Error!"}
        </p>
      </div>
      <div className="flex w-full flex-col border-t border-slate-600 p-2">
        <p className="max-h-40 overflow-hidden break-words text-xl text-gray-700 dark:text-gray-400">
          {loading ? "Loading" : data?.post.article ?? "Errooor!"}
        </p>
      </div>
      <div className="ml-auto flex flex-row items-center py-1">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          {loading
            ? "Loading"
            : moment(new Date(Number(data?.post.date))).format(
                "YYYY/MM/DD hh:mm:ss"
              ) ?? "Error!"}
        </p>
      </div>
    </div>
  )
}

export default PostItem
