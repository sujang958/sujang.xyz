import { gql } from "apollo-server-cloud-functions"

const typeDefs = gql`
  type Query {
    inboxes: [Inbox]!
    projects: [Project]!
  }

  type Inbox {
    from: String!
    time: String!
    article: [String]!
  }

  type Project {
    from: String!
    time: String!
    article: [String]!
  }
`

export default typeDefs
