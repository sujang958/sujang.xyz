import { NextPage } from "next"
import { useEffect, useRef, useState } from "react"

const AppleLabPage: NextPage = () => {
  const totalFrames = 148
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null)
  const getImage = (i: any) =>
    `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${i
      .toString()
      .padStart(4, "0")}.jpg`
  useEffect(() => {
    for (const frame of Array.from(Array(totalFrames).keys())) {
      const img = new Image()
      img.src = getImage(frame)
      img.onload = () => console.log(frame, "Ready")
    }
  }, [])
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollTop = document.documentElement.scrollTop
      const maxScrollTop =
        document.documentElement.scrollHeight - window.innerHeight
      const scrollFraction = scrollTop / maxScrollTop
      const frameIndex = Math.min(
        totalFrames - 1,
        Math.ceil(scrollFraction * totalFrames)
      )

      requestAnimationFrame(() => {
        const img = new Image()
        img.src = getImage(frameIndex)
        ctx?.drawImage(img, 0, 0)
      })
    })
  }, [ctx])

  return (
    <div className="flex flex-col min-w-full min-h-screen">
      <canvas
        className="fixed  top-0 left-0 right-0 bottom-0"
        width={1158}
        height={770}
        ref={(canvas) => setCtx(canvas?.getContext("2d") ?? null)}
      ></canvas>
      {Array.from(Array(totalFrames).keys()).map((_, i) => (
        <div className="min-h-screen" key={i}>
          &nbsp;
        </div>
      ))}
    </div>
  )
}

export default AppleLabPage
