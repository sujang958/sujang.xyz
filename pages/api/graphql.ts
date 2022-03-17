import { Resolvers } from "@apollo/client"
import { ApolloServerPluginLandingPageDisabled } from "apollo-server-core"
import { ApolloServer, gql } from "apollo-server-micro"
import { Collection, MongoClient } from "mongodb"
import { NextApiRequest, NextApiResponse } from "next"

export type Post = {
  _id: string
  title: string
  article: string
  date: string
}

const typeDefs = gql`
  type Query {
    posts: [Post!]!
    post(_id: String!): Post
  }

  type Post {
    _id: String
    title: String
    article: String
    date: String
  }
`

const client = new MongoClient(process.env.DB_URL || "")

const resolvers: Resolvers = {
  Query: {
    posts: async (_, __, { post }: { post: Collection<Post> }) => {
      const posts = await post.find().toArray()
      const transformed = posts.map((v) => ({ ...v, _id: v._id.toString() }))
      return transformed
    },
    post: async (_, { _id }, { post }: { post: Collection<Post> }) => {
      const posts = await post.find().toArray()
      const filtered = posts.find((post) => post._id.toString() === _id)
      return { ...filtered, _id: filtered?._id.toString() }
    },
  },
}

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  debug: false,
  plugins: [ApolloServerPluginLandingPageDisabled()],
  context: async () => ({
    post: (await client.connect()).db("blog").collection("posts"),
  }),
})

const startServer = apolloServer.start()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader("Access-Control-Allow-Origin", "null")
  await startServer
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res)
}

export const config = {
  api: {
    bodyParser: false,
  },
}
