import gsap from "gsap"
import { NextPage } from "next"
import { useEffect } from "react"

const Sec3: NextPage = () => {
  useEffect(() => {
    ;[1, 2, 3, 4, 5, 5].forEach((v) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: document.getElementById(`sec3-title-trigger-${v}`),
          start: "center bottom",
          end: "center top",
          scrub: true,
        },
      })
      if (v != 5)
        tl.to(document.getElementById(`sec3-title-${v}`), {
          y: 0,
          opacity: 1,
          duration: 1,
        })
      else
        tl.to(document.getElementById("sec3-title"), {
          opacity: 0,
          duration: 1.0,
        })
    })
  }, [])

  return (
    <div className="relative flex h-[500vh] max-w-7xl flex-col self-center px-8 md:px-24">
      <div className="absolute top-[3%]" id="sec3-title-trigger-1">
        &nbsp;
      </div>
      <div className="absolute top-[20%]" id="sec3-title-trigger-2">
        &nbsp;
      </div>
      <div className="absolute top-[40%]" id="sec3-title-trigger-3">
        &nbsp;
      </div>
      <div className="absolute top-[60%]" id="sec3-title-trigger-4">
        &nbsp;
      </div>
      <div className="absolute top-[80%]" id="sec3-title-trigger-5">
        &nbsp;
      </div>
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center">
        <div
          className="flex flex-row flex-wrap items-center justify-center space-x-2 space-y-4 text-7xl font-bold md:space-x-6 md:text-8xl"
          id="sec3-title"
        >
          <span
            id="sec3-title-1"
            className="translate-y-10 transform opacity-0"
          >
            Now
          </span>
          <span
            id="sec3-title-2"
            className="translate-y-10 transform opacity-0"
          >
            Introduce
          </span>
          <span
            id="sec3-title-3"
            className="translate-y-10 transform opacity-0"
          >
            My
          </span>
          <span
            id="sec3-title-4"
            className="translate-y-10 transform opacity-0"
          >
            Projects
          </span>
        </div>
      </div>
    </div>
  )
}

export default Sec3
