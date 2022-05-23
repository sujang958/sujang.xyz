import Avvvatars from "avvvatars-react"
import { NextPage } from "next"
import { request, gql } from "graphql-request"
import { useEffect, useState, useTransition } from "react"
import { Inbox } from "../typings/inbox"
import MailItem from "../components/mailItem"
import Lottie from "react-lottie"

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
  const [inboxes, setInboxes] = useState<Inbox[]>([])
  const getInboxes = async () => {
    const { inboxes } = await request("/api/graphql", INBOXES_QUERY)
    setInboxes(inboxes)
  }
  const loadAssets = async () => {
    setLoading(true)
    await Promise.all([getInboxes()])
    setTimeout(() => {
      setLoading(false)
    }, 2000)
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
      <div className="flex w-3/4 flex-col items-start rounded-r-xl py-8 pr-2">
        {isLoading ? (
          <div className="self-center justify-self-center -mt-12">
            <Lottie
              options={{
                autoplay: true,
                animationData: require("../public/lotties/MailLoadingAnimation.json"),
                loop: true,
              }}
            />
          </div>
        ) : (
          inboxes.map((inbox, i) => <MailItem {...inbox} key={i} />)
        )}
      </div>
    </>
  )
}

export default IndexPage
