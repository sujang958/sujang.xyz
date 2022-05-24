import { FC } from "react"
import { SidebarItemProps } from "../typings/sidebarItem"
import { motion } from "framer-motion"
import Link from "next/link"
import Router from "next/router"

const SidebarItem: FC<SidebarItemProps> = ({ title, icon, selected, href }) => {
  return (
    <div
      className="relative flex w-full cursor-pointer flex-row items-center space-x-3 rounded-3xl py-3 px-6"
      onClick={() => Router.push(href)}
    >
      {icon}
      <p className="text-xl">{title}</p>
      {selected && (
        <motion.div
          layoutId="sidebarSelection"
          initial={false}
          className="absolute left-0 right-0 bottom-0 top-0 rounded-3xl bg-black/10"
        ></motion.div>
      )}
    </div>
  )
}
export default SidebarItem
