import { ReactElement } from "react"

export type SidebarItemProps = {
  icon: ReactElement
  title: string
  selected: boolean
  href: string
}
