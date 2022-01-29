import { FC, ReactNode, useEffect } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import Header from "./header"

const queryClient = new QueryClient()

const Layout: FC<ReactNode> = ({ children }) => {
  useEffect(() => {
    const dark = localStorage.getItem("theme")
    if (dark && dark === "dark") document.body.classList.add("dark")
    else document.body.classList.remove("dark")
  }, [])

  return (
    <div className="relative min-w-full font-outfit flex flex-col items-center">
      <QueryClientProvider client={queryClient}>
        <header className="fixed top-0 max-w-5xl w-full z-50">
          <Header />
        </header>
        <div className="flex flex-col min-h-screen w-full dark:bg-black dark:text-white transition duration-300 overflow-auto z-10">
          {children}
        </div>
      </QueryClientProvider>
    </div>
  )
}

export default Layout
