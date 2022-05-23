import Avvvatars from "avvvatars-react"
import { NextPage } from "next"
import { request, gql } from "graphql-request"
import { useEffect, useState, useTransition } from "react"

export type Inboxes = {
  from: string
  time: string
  article: string[]
}

const INBOXES_QUERY = gql`
  {
    inboxes {
      time
      from
      article
    }
  }
`

const IndexPage: NextPage = () => {
  const [isLoading, setLoading] = useState(false)
  const [inboxes, setInboxes] = useState<Inboxes[]>([])
  const getInboxes = async () => {
    const { inboxes } = await request("/api/graphql", INBOXES_QUERY)
    setInboxes(inboxes)
    console.log(inboxes)
  }
  const loadAssets = async () => {
    setLoading(true)
    await Promise.all([getInboxes()])
    setLoading(false)
  }
  useEffect(() => {
    loadAssets()
  }, [])

  return (
    <>
      <div className="flex w-1/4 flex-col items-start py-8">
        <div className="flex w-full cursor-pointer flex-row items-center space-x-3 py-3 pl-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            />
          </svg>
          <p className="text-xl">Inbox</p>
        </div>
      </div>
      <div className="flex w-1/3 flex-col items-start rounded-r-xl py-8 pr-2">
        <div className="flex cursor-pointer flex-col py-3 pl-6">
          <div className="flex w-full flex-row items-center space-x-3 py-1">
            <Avvvatars size={50} value="Seonghun Cho" />
            <div className="flex flex-col">
              <p className="text-xl">Seonghun Cho</p>
              <p className="text-base leading-tight">
                {new Date().toISOString()}
              </p>
            </div>
          </div>
          <div className="flex flex-col py-1.5 px-1.5">
            <p className="text-lg leading-tight text-gray-700">
              hello there!, this is my introduce!. The concept is a mail
              website.
            </p>
          </div>
        </div>
        <div className="flex cursor-pointer flex-col py-3 pl-6">
          <div className="flex w-full flex-row items-center space-x-3 py-1">
            <Avvvatars size={50} value="Seonghun Cho" />
            <div className="flex flex-col">
              <p className="text-xl">Seonghun Cho</p>
              <p className="text-base leading-tight">
                {new Date().toISOString()}
              </p>
            </div>
          </div>
          <div className="flex flex-col py-1.5 px-1.5">
            <p className="text-lg leading-tight text-gray-700">
              This is my contact. If you have some questions, then you can ask
              me.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexPage
