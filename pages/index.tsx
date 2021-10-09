import { Dispatch, FC, MouseEvent, SetStateAction, useState } from "react"
import Link from "next/link"
import Image from "next/image"

const clickHandler = (isHidden: number, setIsHidden: Dispatch<SetStateAction<number>>, e: MouseEvent) => {
  e.preventDefault()
  if (isHidden == 1) {
    setIsHidden(0)
    document.querySelector('.skills')?.classList.remove('hidden')
  } else {
    setIsHidden(1)
    document.querySelector('.skills')?.classList.add('hidden')
  }
}

const Home: FC = () => {
  const [isHidden, setIsHidden] = useState(1)

  return (
    <div className="min-h-screen w-screen text-left overflow-x-hidden">
      <div className="text-center gradation-animation p-14 shawdow-lg w-screen">
        <p className="text-2xl md:text-4xl fade-in">&gt; Hello World_</p>
        <Link passHref={true} href="https://github.com/sujang958">
          <p className="text-xs md:text-sm fade-in underline">
            Visit Github
          </p>
        </Link>
      </div>
      <div className="px-8 mx-auto md:max-w-2xl">
        <div className="mt-5 md:mt-9 md:text-left">
          <div className="mt-1 break-words">
            <p className="text-2xl">Hi!, I&#39;m Sujang958</p>
            <p className="text-base">I&#39;m a student fullstack(maybe) developer</p>
          </div>
          <div className="mt-8">
            <p className="text-xl">Skills</p>
            <p className="text-base mt-1 md:mt-2">
              <p className="ctox text-xs underline" onClick={e => clickHandler(isHidden, setIsHidden, e)}>Click to {(isHidden == 1 ? 'see' : 'hide')}</p>
              <div className="mt-1.5 md:mt-2 skills hidden">
                <Image 
                  src={"https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"}
                  alt="javascript"
                  width={120}
                  height={25}
                />
                <Image 
                  src={"https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"}
                  alt="javascript"
                  width={120}
                  height={25}
                />
                <Image 
                  src={"https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"}
                  alt="javascript"
                  width={79}
                  height={25}
                />
                <Image 
                  src={"https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"}
                  alt="javascript"
                  width={74}
                  height={25}
                />
                <Image 
                  src={"https://img.shields.io/badge/python-%2314354C.svg?style=for-the-badge&logo=python&logoColor=white"}
                  alt="javascript"
                  width={89}
                  height={25}
                />
                <Image 
                  src={"https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white"}
                  alt="javascript"
                  width={69}
                  height={25}
                />
                <Image 
                  src={"https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white"}
                  alt="javascript"
                  width={91}
                  height={25}
                />
                <Image 
                  src={"https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"}
                  alt="javascript"
                  width={111}
                  height={25}
                />
                <Image 
                  src={"https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"}
                  alt="javascript"
                  width={79}
                  height={25}
                />
                <Image 
                  src={"https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"}
                  alt="javascript"
                  width={130}
                  height={25}
                />
                <Image 
                  src={"https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white"}
                  alt="javascript"
                  width={86}
                  height={25}
                />
                <Image 
                  src={"https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white"}
                  alt="javascript"
                  width={74}
                  height={25}
                />
                <Image 
                  src={"https://img.shields.io/badge/nextjs-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white"}
                  alt="javascript"
                  width={88}
                  height={25}
                />
                <Image 
                  src={"https://img.shields.io/badge/Electron-191970?style=for-the-badge&logo=Electron&logoColor=white"}
                  alt="javascript"
                  width={101}
                  height={25}
                />
              </div>
            </p>
          </div>
          <div className="mt-8 text-left break-words">
            <p className="text-xl">Projects</p>
            <div className="mx-1">
              <div className="mt-1 rounded-md p-2 shadow">
                <p className="underline text-xs">
                    <Link 
                      passHref={true}
                      href="https://github.com/sujang958/sujang.xyz"
                    >
                      sujang.xyz - sujang958
                    </Link>
                  </p>
                <p className="text-xs">The page you&#39;re looking at.</p>
              </div>
              <div className="mt-1 rounded-md p-2 shadow">
                <p className="underline text-xs">
                    <Link 
                      passHref={true}
                      href="https://github.com/sujang958/weather"
                    >
                      weather.sujang.xyz - sujang958
                    </Link>
                  </p>
                <p className="text-xs">Simple weather web.</p>
              </div>
              <div className="mt-1 rounded-md p-2 shadow">
                <p className="underline text-xs">
                    <Link 
                      passHref={true}
                      href="https://github.com/sujang958/oauth-discord"
                    >
                      oauth-discord - sujang958
                    </Link>
                </p>
                <p className="text-xs">Discord Oauth library for nodejs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home