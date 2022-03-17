import "../styles/globals.css"
import type { AppProps } from "next/app"
import { FC } from "react"
import Layout from "../components/layout"
import { ApolloProvider } from "@apollo/client"
import client from "../utils/graphql"

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default App
