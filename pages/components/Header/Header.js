import logo from "../../../public/logo.svg"
import Image from "next/image"
import burger from "../../../public/burget.svg"
import styles from "./Header.module.scss"
import { useState } from "react"
import Menu from "@/pages/components/Menu"
import Link from "next/link"

const Header = () => {
  return (
    <header>
      <div className={ styles.container }>
        <Link href={ "/" }> <Image className={ styles.logoImage } src={ logo } alt="Main logo"/></Link>
      </div>
      <Menu/>
    </header>
  )
}


export default Header
