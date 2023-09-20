import logo from "../../../public/logo.svg"
import Image from "next/image"
import styles from "./Header.module.scss"
import Menu from "@/pages/components/Menu"
import Link from "next/link"

const Header = () => {
  const removeScroll = () => {
    document.body.classList.remove("no-scroll")
  }

  return (
    <header>
      <div className={ styles.container }>
        <Link href={ "/" }> <Image className={ styles.logoImage } onClick={ removeScroll } src={ logo }
                                   alt="Main logo"/></Link>
      </div>
      <Menu removeScroll={ removeScroll }/>
    </header>
  )
}


export default Header
