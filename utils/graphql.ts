import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  uri: `${
    process.env.NODE_ENV !== "production"
      ? "http://localhost:4015"
      : "https://sujang.xyz"
  }/api/graphql`,
  cache: new InMemoryCache(),
})

export default client
