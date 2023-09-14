import logo from "../../../public/logo.svg"
import Image from "next/image"
import burger from "../../../public/burget.svg"
import styles from "./Header.module.scss"

const Header = () => (
  <header>
    <div className={styles.container}>
      <Image className={ styles.logoImage } src={ logo } alt="Main logo"/>
      <Image src={burger} alt="Burger menu" className={styles.burgerMenu}/>
    </div>
  </header>
)

export default Header
