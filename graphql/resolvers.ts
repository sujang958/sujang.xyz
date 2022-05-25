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
    article: ["These are my emails", "sujang@kakao.com, enter7377@naver.com"],
  },
  {
    from: "Seonghun Cho",
    time: new Date().toISOString(),
    article: [
      'My github name is <a class="underline" href="https://github.com/sujang958" target="_blank">sujang958</a>',
      "Issues & PRs are always welcome!",
    ],
  },
]

const Projects = [
  {
    from: "Seonghun Cho",
    time: new Date().toISOString(),
    article: [
      "Smeals - check you school's meals",
      '<a class="underline" href="https://smeals.co" target="_blank">Web</a> &nbsp; <a class="underline" href="https://play.google.com/store/apps/details?id=co.smeals.app" target="_blank">Google Play</a> &nbsp;&nbsp; I\'m working to publish iOS App!',
    ],
  },
]

const resolvers = {
  Query: {
    inboxes: () => Inboxes,
    projects: () => Projects,
  },
}

export default resolvers
