import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { GetServerSideProps, NextPage } from "next"
import { useEffect, useId } from "react"

gsap.registerPlugin(ScrollTrigger)

const MainPage: NextPage = () => {
  const mouseCircleId = useId()

  useEffect(() => {
    const moveCircleOnMouse = (x: number, y: number) => {
      gsap.to(document.getElementById(mouseCircleId), {
        left: x,
        top: y,
        duration: 0.3,
        ease: "sine.out",
      })
    }
    window.addEventListener("mousemove", (e) => {
      moveCircleOnMouse(e.clientX, e.clientY)
    })
    const appearMouseCircle = () => {
      gsap.to(document.getElementById(mouseCircleId), { opacity: 1 })
      window.removeEventListener("mousemove", appearMouseCircle)
    }
    window.addEventListener("mousemove", appearMouseCircle)
  }, [mouseCircleId])

  useEffect(() => {
    const fgTimeline = gsap.timeline()
    const bgTimeline = gsap.timeline()

    fgTimeline.to("#hello-fg", {
      y: "-70%",
      opacity: 1,
      duration: 1 + 1,
      ease: "expo.out",
    })
    bgTimeline.to("#hello-bg", {
      y: "-60%",
      opacity: 1,
      delay: 0.08,
      duration: 0.92 + 1,
      ease: "expo.out",
    })

    fgTimeline.to("#hello-fg", {
      y: "-120%",
      opacity: 0,
      duration: 0.2,
      ease: "expo.out",
    })
    bgTimeline.to("#hello-bg", {
      y: "-80%",
      opacity: 0,
      delay: 0.02,
      duration: 0.28,
      ease: "expo.out",
    })
  }, [])

  return (
    <>
      <div className="relative flex min-h-screen w-full flex-col overflow-clip">
        <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center px-24">
          <div className="flex flex-col items-start justify-center">
            <p className="text-5xl font-black">Hello, I&apos;m</p>
            <p className="text-8xl font-black">SUJANG958</p>
          </div>
          <div className="rounded-b-full bg-white px-24 py-4"></div>
        </div>
        <div className="sticky top-0 flex h-screen flex-col bg-black/20 backdrop-blur-md">
          {/* <p className="absolute -top-10 left-1/2 -translate-x-1/2 transform-gpu animate-pulse text-lg">
            Try scrolling down
          </p> */}
          <div className="grid h-full w-full grid-cols-4 grid-rows-2 gap-10 py-12 px-24 text-black">
            <div className="group relative rounded-xl bg-white p-4">
              <p className="text-xl">Hi,</p>
              <p className="text-3xl font-semibold">I&apos;m Sujang958</p>
              <div className="flex flex-col items-center justify-center py-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  strokeWidth={1.5}
                  className="mt-10 h-36 w-36 animate-spin"
                  viewBox="-11.5 -10.23174 23 20.46348"
                >
                  <title>React Logo</title>
                  <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
                  <g stroke="#61dafb" strokeWidth="1" fill="none">
                    <ellipse rx="11" ry="4.2" />
                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                  </g>
                </svg>
                <p className="pt-4 text-lg text-gray-500">
                  I&apos;m a developer
                </p>
              </div>
              <div className="absolute top-0 left-0 right-0 bottom-0 z-10 rounded-xl bg-white/50 p-4 opacity-0 backdrop-blur transition duration-300 group-hover:opacity-100">
                <div className="flex h-full w-full translate-y-4 transform-gpu flex-col items-center justify-center transition duration-300 group-hover:translate-y-0">
                  <p className="-mb-2 text-2xl">Let me</p>
                  <p className="cursor-pointer text-3xl font-black hover:underline">
                    Introduce &gt;
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative col-span-2 rounded-xl bg-white p-4">
              <p className="text-xl">These are</p>
              <p className="text-3xl font-semibold">My Projects</p>
              <div className="py-8 px-2">
                <table className="w-full table-auto text-left">
                  <thead className="border-b border-gray-400">
                    <tr>
                      <th className="pb-1">Name</th>
                      <th className="pb-1">Tech Stacks</th>
                      <th className="pb-1">Related URL</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>vegot</td>
                      <td>Nodejs</td>
                      <td>https://github.com/sujang958/vegot</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="group relative rounded-xl bg-white p-4">
              <p className="text-xl">Ipsum</p>
              <p className="text-3xl font-semibold">Lorem</p>
              <div className="overflow-hidden py-2">
                <p className="text-lg">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Explicabo exercitationem maxime natus unde ad deserunt fugit
                  accusantium nulla, dignissimos eum aliquid fuga et ut
                  praesentium sequi aperiam eveniet consectetur accusamus
                  mollitia sint quidem tenetur incidunt tempora alias! Labore
                  alias officiis ratione sint delectus expedita natus veritatis,
                </p>
              </div>
            </div>
            <div className="group relative col-span-2 rounded-xl bg-white p-4">
              <p className="text-xl">Ipsum</p>
              <p className="text-3xl font-semibold">Lorem</p>
              <div className="overflow-hidden py-2">
                <p className="text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Adipisci maxime repudiandae earum necessitatibus atque
                  molestiae, laboriosam assumenda facere facilis maiores omnis.
                  Non incidunt doloribus molestias voluptas est obcaecati harum
                  natus aliquam maxime voluptates distinctio mollitia
                  temporibus, earum eos consectetur iste eligendi nobis enim
                  sequi, alias animi! Quia aliquid architecto et eveniet
                  aliquam! Cupiditate, placeat natus? Recusandae cumque eaque
                  numquam corporis, rerum quasi culpa atque aspernatur? Dolor
                  odio porro voluptatibus asperiores nostrum deserunt fuga odit,
                  reprehenderit delectus a labore magnam, dignissimos iusto
                  explicabo eveniet repellat sint est corporis officia, fugiat
                  eos? Maxime, exercitationem eius suscipit, molestiae sed rem
                  reprehenderit dolor quod, neque vero in iusto libero!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="pointer-events-none fixed top-1/2 left-1/2 z-50 -m-3 hidden h-6 w-6 cursor-default rounded-full bg-white opacity-0 mix-blend-difference drop-shadow-xl filter md:block"
        id={mouseCircleId}
      >
        &nbsp;
      </div>
    </>
  )
}

export default MainPage

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  )

  return {
    props: {},
  }
}
