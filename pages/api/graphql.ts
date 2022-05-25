import { ApolloServer } from "apollo-server-cloud-functions"
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled,
} from "apollo-server-core"
import typeDefs from "../../graphql/typeDefs"
import resolvers from "../../graphql/resolvers"

const server = new ApolloServer({
  resolvers,
  typeDefs,
  plugins: [
    process.env.NODE_ENV === "production"
      ? ApolloServerPluginLandingPageDisabled()
      : ApolloServerPluginLandingPageGraphQLPlayground(),
  ],
})

const handler = server.createHandler()

export const config = {
  api: {
    bodyParser: false,
  },
}

export default handler
