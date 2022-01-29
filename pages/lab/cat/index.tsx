import { NextPage } from "next"
import { useQuery } from "react-query"
import Image from "next/image"

const CatLabIndex: NextPage = () => {
  const { isLoading, isError, data, error, refetch, isRefetching } = useQuery(
    "datas",
    () => fetch("https://aws.random.cat/meow").then((v) => v.json())
  )

  return (
    <div
      className="flex flex-col self-center max-w-5xl w-full px-2"
      onClick={() => refetch()}
    >
      <div className="flex flex-col">
        <div className="pt-2">
          <Image
            src={
              !isLoading || !isRefetching
                ? data
                  ? data.file
                  : "https://purr.objects-us-east-1.dream.io/i/zAZ9p.jpg"
                : "https://purr.objects-us-east-1.dream.io/i/zAZ9p.jpg"
            }
            layout="fill"
            objectFit="contain"
            alt="cattt"
            loading="eager"
            className="z-0"
          />
        </div>
      </div>
    </div>
  )
}

export default CatLabIndex
