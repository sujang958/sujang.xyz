import { NextPage } from "next"
import { useQuery, useInfiniteQuery } from "react-query"
import SyntaxHighlighter from "react-syntax-highlighter"
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/hljs"
import { pd } from "pretty-data"

const ReactQueryLabIndex: NextPage = () => {
  const { isLoading, isError, data, error } = useQuery("datas", () =>
    fetch("https://jsonplaceholder.typicode.com/todos/1").then((v) => v.json())
  )
  const {
    data: infiniteData,
    error: infiniteError,
    fetchNextPage,
    refetch,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(
    "users",
    ({ pageParam = 1 }) =>
      fetch(`https://jsonplaceholder.typicode.com/users/${pageParam}`).then(
        (v) => v.json()
      ),
    {
      getNextPageParam: (lastPage, pages) =>
        pages.length < 10 ? lastPage.id + 1 : undefined, // 10: limit
    }
  )

  return (
    <div className="flex flex-col self-center max-w-5xl px-2">
      <div className="px-2 pt-24">
        <p className="text-5xl font-semibold">React-Query testsssssss</p>
      </div>
      <div className="mt-7 px-6 flex flex-col space-y-3 md:space-y-5">
        <div className="p-1 flex flex-col space-y-1.5">
          <p className="text-3xl font-semibold">
            The data fetched from React-Query
          </p>
          <div className="pt-2 md:pt-4 flex flex-col px-2 space-y-2.5">
            <div className="flex-1">
              <div className="px-4 hidden md:block">
                <SyntaxHighlighter
                  language="typescript"
                  style={a11yDark}
                  wrapLongLines
                >
                  {`// Code
const ReactQueryLabIndex: NextPage = () => {
  const { 
    isLoading, 
    isError, 
    data, 
    error 
  } = useQuery("datas", () =>
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((v) => v.json())
  )
  // ...
  return (
    // ...
    <SyntaxHighlighter
      language="typescript"
      style={a11yDark}
      wrapLongLines
    >
      {\`// Result (it's real!)
        \${
          isLoading
            ? "Loading!"
            : isError
            ? \`Something went wrong!\n\${error}\`
            : pd.json(JSON.stringify(data))
        }\`
      }
    </SyntaxHighlighter>
  )
}`}
                </SyntaxHighlighter>
              </div>
            </div>
            <div className="flex-1">
              <div className="px-4">
                <SyntaxHighlighter
                  language="typescript"
                  style={a11yDark}
                  wrapLongLines
                >
                  {`// Result (it's real!)
${
  isLoading
    ? "Loading!"
    : isError
    ? `Something went wrong!\n${error}`
    : pd.json(JSON.stringify(data))
}`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </div>
        <div className="p-1 flex flex-col space-y-1.5">
          <p className="text-3xl font-semibold">Infinity Query</p>
          <div className="pt-2 md:pt-4 flex flex-col px-2 space-y-2.5">
            <div className="flex-1">
              <div className="px-4 hidden md:block">
                <SyntaxHighlighter
                  language="typescript"
                  style={a11yDark}
                  wrapLongLines
                >
                  {`// Code
const ReactQueryLabIndex: NextPage = () => {
  const {
    data: infiniteData,
    error: infiniteError,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(
    "photos",
    ({ pageParam = 1 }) =>
      fetch(\`https://jsonplaceholder.typicode.com/photos/\${pageParam}\`).then(
        (v) => v.json()
      ),
    {
      getNextPageParam: (lastPage, _) => (lastPage.id += 1),
    }
  )
  // ...
  return (
    // ...
    <SyntaxHighlighter
      language="typescript"
      style={a11yDark}
      wrapLongLines
    >
      {\`// Result (it's real!)
        \${
          isLoading
            ? "Loading!"
            : isError
            ? \`Something went wrong!\n\${error}\`
            : pd.json(JSON.stringify(data))
        }\`
      }
    </SyntaxHighlighter>
  )
}`}
                </SyntaxHighlighter>
              </div>
            </div>
            <div className="flex-1 flex flex-col space-y-2">
              <div className="-mt-3 md:mt-0 px-2 flex flex-row space-x-3.5">
                <div className="cursor-pointer" onClick={() => fetchNextPage()}>
                  <p className="text-xl font-semibold underline">Next</p>
                </div>
                <div className="cursor-pointer" onClick={() => refetch()}>
                  <p className="text-xl font-semibold underline">Refetch</p>
                </div>
                <div className="cursor-pointer">
                  <p className="text-xl font-semibold">{String(hasNextPage)}</p>
                </div>
              </div>
              <div className="px-4">
                <SyntaxHighlighter
                  language="typescript"
                  style={a11yDark}
                  wrapLongLines
                >
                  {`// Result (it's real!)
${
  isFetching
    ? "Fetching!!"
    : infiniteError
    ? `Something went wrong!\n${error}`
    : pd.json(JSON.stringify(infiniteData))
}`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReactQueryLabIndex
