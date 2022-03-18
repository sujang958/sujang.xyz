import { FC } from "react"

const Container: FC<{ className?: string }> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`${className} flex min-h-screen min-w-full flex-col bg-white text-black dark:bg-black dark:text-white`}
    >
      {children}
    </div>
  )
}

export default Container
