import { NextPage } from "next"
import Lottie from "react-lottie"
import { useContext, useEffect, useState } from "react"
import { SelectedScreenContext } from "./_app"
import { DispatchSelectedScreen } from "../typings/sidebar"
import { motion } from "framer-motion"
import MailContainer from "../components/mailContainer"
import MailItem from "../components/mailItem"
import { Inbox } from "../typings/inbox"
import request, { gql } from "graphql-request"

const PROJECTS_QUERY = gql`
  {
    projects {
      time
      article
      from
    }
  }
`

const ProjectPage: NextPage = () => {
  const setScreen = useContext(SelectedScreenContext) as DispatchSelectedScreen
  const [isLoading, setLoading] = useState(false)
  const [projects, setProjects] = useState<Inbox[]>([])
  const getInboxes = async () => {
    const { projects } = await request("/api/graphql", PROJECTS_QUERY)
    setProjects(projects)
  }
  const loadAssets = async () => {
    setLoading(true)
    await Promise.all([getInboxes()])
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }

  useEffect(() => {
    setScreen("PROJECT")
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
        projects.map((project, i) => <MailItem {...project} key={i} />)
      )}
    </MailContainer>
  )
}

export default ProjectPage
