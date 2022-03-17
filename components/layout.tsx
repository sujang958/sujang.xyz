import { FC, ReactNode, useEffect } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import Head from "next/head"
import Header from "./header"

const queryClient = new QueryClient()

const Layout: FC<ReactNode> = ({ children }) => {
  useEffect(() => {
    const dark = localStorage.getItem("theme")
    if (dark && dark === "dark") document.body.classList.add("dark")
    else document.body.classList.remove("dark")
  }, [])

  return (
    <div className="relative flex min-h-screen min-w-full flex-col items-center font-ubuntu">
      <Head>
        <title>Sujang958{"'"}s Portfolio</title>
        <meta name="description" content="Sujang958's Portfolio!" />
        <meta name="keywords" content="React, Typescript, Portfolio" />
        <meta name="author" content="SeongHun Cho" />
        <meta property="og:title" content="SeongHun's Portfolio" />
        <meta property="og:image" content="/img/og_image.png" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Header />
        {children}
      </QueryClientProvider>
    </div>
  )
}

export default Layout
