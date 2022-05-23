import { ApolloServer } from "apollo-server-cloud-functions"
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core/dist/plugin/landingPage/graphqlPlayground"
import typeDefs from "../../graphql/typeDefs"
import resolvers from "./resolvers"

const server = new ApolloServer({
  resolvers,
  typeDefs,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
})

const handler = server.createHandler()

export const config = {
  api: {
    bodyParser: false,
  },
}

export default handler
