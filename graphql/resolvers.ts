const Inboxes = [
  {
    from: "Seonghun Cho",
    time: new Date().toISOString(),
    article: [
      "Hello there!, this is my introduce! This website's concept is a mail site.",
    ],
  },
  {
    from: "Seonghun Cho",
    time: new Date().toISOString(),
    article: [
      "Hello there!, this is my introduce! This website's concept is a mail site.",
    ],
  },
]

const resolvers = {
  Query: {
    inboxes: () => Inboxes,
  },
}

export default resolvers
