import React, { useState } from "react"
import styles from "./Menu.module.scss"
import Link from "next/link"
import burger from "@/public/burget.svg"
import Image from "next/image"


function BurgerMenu () {
  const [ isOpen, setIsOpen ] = useState(true)
  const [ isWidth, setWidth ] = useState(0)
  const [ isHeight, setHeight ] = useState(0)

  const handleMenu = () => {
    // toggleMenu()
    handleSize()
  }

  // const toggleMenu = () => {
  //   if ( isOpen ) {
  //     document.body.classList.remove("no-scroll") // Удалить класс для разрешения скроллинга
  //   } else {
  //     document.body.classList.add("no-scroll") // Добавить класс для запрета скроллинга
  //   }
  //   setIsOpen(!isOpen)
  // }

  const handleSize = () => {
    setWidth(document.body.offsetWidth)
    setHeight(document.body.offsetHeight)
  }


  return (
    <div className={ styles.burgerMenu }>
      <button className={ styles.burgerButton } onClick={ handleMenu }>
        <Image src={ burger } alt="Burger menu"/>
      </button>
      { isOpen && (
        <div className={ styles.menu } style={ { width: isWidth, height: isHeight } }>
          <Link className={ styles.link } href="/collection">Коллекция</Link>
          <Link className={ styles.link } href="/404">Новости</Link>
          <Link className={ styles.link } href="/404">Мероприятия</Link>
          <Link className={ styles.link } href="/404">О нас</Link>
          <Link className={ styles.link } href="/404">FAQ</Link>

        </div>
      ) }
    </div>
  )
}

export default BurgerMenu
