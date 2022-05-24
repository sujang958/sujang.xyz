import { gql } from "apollo-server-cloud-functions"

const typeDefs = gql`
  type Query {
    inboxes: [Inboxes]!
  }

  type Inboxes {
    from: String!
    time: String!
    article: [String]!
  }
`

export default typeDefs
