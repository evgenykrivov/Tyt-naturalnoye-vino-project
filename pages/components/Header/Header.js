import logo from "../../../public/logo.svg"
import Image from "next/image"
import S from "./Header.module.scss"
import Menu from "@/pages/components/Menu"
import Link from "next/link"

const Header = () => {
  const removeScroll = () => document.body.classList.remove("no-scroll")

  return (
    <header>
      <div className={S.container}>
        <Link href={"/"}>
          <Image
            className={S.logoImage}
            onClick={removeScroll}
            src={logo}
            alt="Main logo"
          />
        </Link>
      </div>
      <Menu removeScroll={removeScroll} />
    </header>
  )
}

export default Header
