import { NextPage } from "next"

const Page404: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center place-content-center">
      <div className="max-w-5xl">
        <p className="text-6xl font-semibold">Not Found.</p>
        <p
          className="mt-1 text-3xl underline cursor-pointer"
          onClick={() => history.back()}
        >
          Click to Go back
        </p>
      </div>
    </div>
  )
}

export default Page404
