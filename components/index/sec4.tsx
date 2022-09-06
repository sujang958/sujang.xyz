import { NextPage } from "next"
import { motion } from "framer-motion"
import Image from "next/image"

import IMG_PROJECT1_1 from "../public/imgs/project1-1.png"

const Sec4: NextPage = () => {
  return (
    <div className="flex w-full max-w-7xl flex-col self-center py-8 px-8 md:px-24">
      <div className="relative flex w-full flex-col items-center">
        <div className="sticky top-24 flex h-[50vh] w-full flex-col items-center justify-center">
          <Image
            src={IMG_PROJECT1_1}
            alt="Project Image"
            objectFit="contain"
            width={720}
            height={1280}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          viewport={{
            margin: "-40%",
          }}
          whileInView={{
            opacity: 1,
          }}
          className="sticky top-0 z-10 flex min-h-[50vh] w-full max-w-sm flex-col justify-between rounded-xl bg-black py-5 px-6"
        >
          <div>
            <p className="text-3xl font-bold">Smeals</p>
            <div className="py-2"></div>
            <p className="break-words text-xl font-semibold">
              Smeals is an iOS and Android app for Korean students. <br />
              Smeals allows you to know schools&apos; meals. <br />
              Visit{" "}
              <span
                className="cursor-pointer underline"
                onClick={() => open("https://smeals.co")}
              >
                this link
              </span>{" "}
              to download.
            </p>
          </div>
          <div className="py-3">
            <p className="text-lg">- Made with Flutter, Firebase</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Sec4
