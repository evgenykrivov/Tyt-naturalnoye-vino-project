import logo from "../../../public/logo.svg"
import Image from "next/image"
import burger from "../../../public/burget.svg"
import styles from "./Header.module.scss"
import { useState } from "react"
import Menu from "@/pages/components/Menu"

const Header = () => (
  <header>
    <div className={ styles.container }>
      <Image className={ styles.logoImage } src={ logo } alt="Main logo"/>
    </div>
    <Menu/>
  </header>
)


export default Header
