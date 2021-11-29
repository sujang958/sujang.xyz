import {
  Dispatch,
  FC,
  MouseEvent,
  MouseEventHandler,
  SetStateAction,
  useState,
} from "react"
import Link from "next/link"
import Image from "next/image"

const clickHandler = (
  isHidden: number,
  setIsHidden: Dispatch<SetStateAction<number>>,
  e: MouseEvent
) => {
  e.preventDefault()
  if (isHidden == 1) {
    setIsHidden(0)
    document.querySelector(".skills")?.classList.remove("hidden")
  } else {
    setIsHidden(1)
    document.querySelector(".skills")?.classList.add("hidden")
  }
}

const bongocatHandler: MouseEventHandler<HTMLParagraphElement> = async () => {
  const audio = new Audio("/audio/meow.mp3")
  await audio.play()

  const bongoMeow = document.querySelector(".bongo-meow")
  bongoMeow?.classList.replace("z-0", "z-20")
  setTimeout(() => bongoMeow?.classList.replace("z-20", "z-0"), 680)
}

const Home: FC = () => {
  const [isHidden, setIsHidden] = useState(1)

  return (
    <div className="text-left">
      <div className="realtive text-center">
        <div className="bg-white z-10 w-full absolute bg-auto bg-center bg-no-repeat bg-bongocat p-14 shawdow-lg text-black">
          <p
            className="bongo cursor-pointer text-xs select-none fade-in underline"
            onClick={bongocatHandler}
          >
            Meow
          </p>
        </div>
        <div className="bongo-meow bg-white z-0 w-full absolute bg-auto bg-top-4 bg-no-repeat bg-bongocat-meow p-14 shawdow-lg text-black">
          <p
            className="bongo cursor-pointer text-xs select-none fade-in underline"
            onClick={bongocatHandler}
          >
            Meow!
          </p>
        </div>
      </div>
      <div className="pt-36 px-8 md:px-28">
        <div className="mt-5 md:mt-9">
          <div className="mt-1 break-words">
            <p className="text-2xl">Hi!, I&#39;m Sujang958</p>
            <p className="text-base">I&#39;m a student developer</p>
          </div>
          <div className="mt-8">
            <p className="text-xl">Skills</p>
            <p className="text-base mt-1 md:mt-2">
              <p
                className="cursor-pointer text-xs underline"
                onClick={(e) => clickHandler(isHidden, setIsHidden, e)}
              >
                Click to {isHidden == 1 ? "see" : "hide"}
              </p>
              <div className="mt-1.5 md:mt-2 skills hidden">
                <Image
                  src={
                    "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
                  }
                  alt="javascript"
                  width={120}
                  height={25}
                />
                <Image
                  src={
                    "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
                  }
                  alt="javascript"
                  width={120}
                  height={25}
                />
                <Image
                  src={
                    "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
                  }
                  alt="javascript"
                  width={79}
                  height={25}
                />
                <Image
                  src={
                    "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
                  }
                  alt="javascript"
                  width={74}
                  height={25}
                />
                <Image
                  src={
                    "https://img.shields.io/badge/python-%2314354C.svg?style=for-the-badge&logo=python&logoColor=white"
                  }
                  alt="javascript"
                  width={89}
                  height={25}
                />
                <Image
                  src={
                    "https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white"
                  }
                  alt="javascript"
                  width={69}
                  height={25}
                />
                <Image
                  src={
                    "https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white"
                  }
                  alt="javascript"
                  width={91}
                  height={25}
                />
                <Image
                  src={
                    "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"
                  }
                  alt="javascript"
                  width={111}
                  height={25}
                />
                <Image
                  src={
                    "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                  }
                  alt="javascript"
                  width={79}
                  height={25}
                />
                <Image
                  src={
                    "https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                  }
                  alt="javascript"
                  width={130}
                  height={25}
                />
                <Image
                  src={
                    "https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white"
                  }
                  alt="javascript"
                  width={86}
                  height={25}
                />
                <Image
                  src={
                    "https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white"
                  }
                  alt="javascript"
                  width={74}
                  height={25}
                />
                <Image
                  src={
                    "https://img.shields.io/badge/nextjs-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white"
                  }
                  alt="javascript"
                  width={88}
                  height={25}
                />
                <Image
                  src={
                    "https://img.shields.io/badge/Electron-191970?style=for-the-badge&logo=Electron&logoColor=white"
                  }
                  alt="javascript"
                  width={101}
                  height={25}
                />
              </div>
            </p>
          </div>
        </div>
        <div className="mt-8 md:mt-12">
          <p className="text-xl">Portfolio</p>
          <div className="mt-0.5 p-2 flex flex-col">
            <div className="p-2 flex-1 shadow-lg">
              <Link href="/music" passHref={true}>
                <p className="cursor-pointer underline text-base">
                  Music - made by sujang958
                </p>
              </Link>
              <p className="ml-0.5 mt-1 text-sm">Simple music web app.</p>
            </div>
            <div className="p-2 flex-1 shadow-lg">
              <Link href="https://meals.sujang.xyz" passHref={true}>
                <p className="cursor-pointer underline text-base">
                  Smeals - made by sujang958
                </p>
              </Link>
              <p className="ml-0.5 mt-1 text-sm">Viewer of school meals.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
