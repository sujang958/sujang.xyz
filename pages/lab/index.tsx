import { NextPage } from "next"
import Link from "next/link"

const LabIndex: NextPage = () => {
  return (
    <div className="flex flex-col self-center max-w-5xl w-full">
      <div className="pt-20 md:pt-32 px-8 md:px-14">
        <p className="text-4xl md:text-6xl font-semibold">Fuuuun Lab</p>
        <p className="mt-1 text-xl md:text-4xl">
          (actually it{"'"}s just test of my skills.)
        </p>
      </div>
      <div className="mt-10 md:mt-20 px-10 md:px-20">
        <div className="p-0.5">
          <p className="text-4xl md:text-5xl font-bold">List</p>
        </div>
        <div className="flex flex-col mt-2 md:mt-4">
          <div className="p-1">
            <li className="text-2xl md:text-3xl">
              <Link href="/lab/react-query/" passHref>
                <span className="underline cursor-pointer">react-query</span>
              </Link>
              &nbsp;&nbsp; - &nbsp; tests of&nbsp;
              <a
                href="https://react-query.tanstack.com/"
                className="underline cursor-pointer"
                target="_blank"
                rel="noreferrer"
              >
                React-Query
              </a>
              &nbsp; library
            </li>
          </div>
          <div className="p-1">
            <li className="text-2xl md:text-3xl">
              <Link href="/lab/cat/" passHref>
                <span className="underline cursor-pointer">cat</span>
              </Link>
              &nbsp;&nbsp; - &nbsp; meow
            </li>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LabIndex
