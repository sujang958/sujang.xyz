import { FC } from "react"
import { SidebarItemProps } from "../typings/sidebarItem"
import { motion } from "framer-motion"
import Link from "next/link"
import Router from "next/router"

const SidebarItem: FC<SidebarItemProps> = ({ title, icon, selected, href }) => {
  return (
    <div className="relative w-full">
      <div
        className="flex w-full cursor-pointer flex-row items-center justify-center space-x-3 rounded-3xl py-3 sm:justify-start sm:py-3.5 sm:px-6 md:justify-start md:py-3.5 md:px-6"
        onClick={() => Router.push(href)}
      >
        {icon}
        <p className="hidden text-xl sm:block md:block">{title}</p>
      </div>
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
