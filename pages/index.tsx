import { NextPage } from "next"
import { request, gql } from "graphql-request"
import { useContext, useEffect, useState } from "react"
import { Inbox } from "../typings/inbox"
import MailItem from "../components/mailItem"
import Lottie from "react-lottie"
import { SelectedScreenContext } from "./_app"
import { DispatchSelectedScreen } from "../typings/sidebar"
import MailContainer from "../components/mailContainer"

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
    }, 1500)
  }

  useEffect(() => {
    setScreen("INBOX")
    loadAssets()
  }, [])

  return (
    <MailContainer>
      <p className="hidden underline"></p>
      {isLoading ? (
        <div className="-mt-16 flex h-full w-full flex-col items-center justify-center">
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
    </MailContainer>
  )
}

export default IndexPage
