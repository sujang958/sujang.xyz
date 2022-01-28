import { NextPage } from "next"
import { useQuery } from "react-query"
import SyntaxHighlighter from "react-syntax-highlighter"
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/hljs"

const ReactQueryLabIndex: NextPage = () => {
  const { isLoading, isError, data, error } = useQuery("datas", () =>
    fetch("https://jsonplaceholder.typicode.com/todos/1").then((v) => v.json())
  )

  return (
    <div className="flex flex-col max-w-5xl px-12">
      <div className="pt-24">
        <p className="text-5xl">React-Query</p>
      </div>
      <div className="mt-16 px-4 flex flex-col space-y-2.5">
        <div className="p-1 flex flex-col space-y-1.5">
          <p className="text-3xl font-semibold">
            The data fetched from React-Query
          </p>
          <div className="pt-4 flex flex-col px-2 space-y-2.5">
            <div className="flex-1">
              <div className="px-4">
                <SyntaxHighlighter
                  language="typescript"
                  style={a11yDark}
                  wrapLongLines
                >
                  {`// Code
const ReactQueryLabIndex: NextPage = () => {
  const { isLoading, isError, data, error } = useQuery("datas", () =>
    fetch("https://jsonplaceholder.typicode.com/todos/1").then((v) => v.json())
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
            ? \`Something went wrong!\\n\${error}\`
            : JSON.stringify(data)
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
    : JSON.stringify(data)
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
