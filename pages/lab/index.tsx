import { NextPage } from "next"
import Link from "next/link"

const LabIndex: NextPage = () => {
  return (
    <div className="flex flex-col max-w-5xl">
      <div className="pt-32 px-14">
        <p className="text-6xl font-semibold">Funnnn Lab</p>
        <p className="mt-1 text-4xl">
          (actually it{"'"}s just test of my new skills.)
        </p>
      </div>
      <div className="mt-32 px-20">
        <div className="p-0.5">
          <p className="text-5xl font-bold">List</p>
        </div>
        <div className="flex flex-col space-y-2.5 mt-4">
          <div className="p-1">
            <li className="text-3xl">
              <Link href="/lab/react-query/" passHref>
                <span className="underline cursor-pointer font-semibold">
                  react-query
                </span>
              </Link>
              &nbsp;&nbsp; - &nbsp; tests of&nbsp;
              <a
                href="https://react-query.tanstack.com/"
                className="underline cursor-pointer"
              >
                React-Query
              </a>
              &nbsp; library
            </li>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LabIndex
