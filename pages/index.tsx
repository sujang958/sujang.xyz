import { NextPage } from "next"
import { request, gql } from "graphql-request"
import { useContext, useEffect, useState } from "react"
import { Inbox } from "../typings/inbox"
import MailItem from "../components/mailItem"
import Lottie from "react-lottie"
import { SelectedScreenContext } from "./_app"
import { DispatchSelectedScreen } from "../typings/sidebar"

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
  const setScreen = useContext(SelectedScreenContext) as DispatchSelectedScreen
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
    setScreen("INBOX")
    loadAssets()
  }, [])

  return (
    <div className="flex w-3/4 flex-col items-start rounded-r-xl py-8 pr-2">
      {isLoading ? (
        <div className="-mt-12 self-center justify-self-center">
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
  )
}

export default IndexPage
