import React, {useState} from "react"
import S from "./Menu.module.scss"
import Link from "next/link"
import burger from "@/public/burget.svg"
import Image from "next/image"
import {linkName} from "@/utils/varibles"

//to do:
// If width > 756px then hide menu

function Menu({removeScroll}) {
  const [isOpen, setIsOpen] = useState(false)
  const [isWidth, setWidth] = useState(0)
  const [isHeight, setHeight] = useState(0)

  const handleMenu = () => {
    toggleMenu()
    handleSize()
  }

  const toggleMenu = () => {
    const list = document.body.classList
    const NO_SCROLL_CLASS = "no-scroll"

    isOpen ? list.remove(NO_SCROLL_CLASS) : list.add(NO_SCROLL_CLASS)
    setIsOpen(!isOpen)
  }

  const handleSize = () => {
    setWidth(document.body.offsetWidth)
    setHeight(document.body.offsetHeight)
  }

  return (
    <div className={S.burgerMenu}>
      <button className={S.burgerButton} onClick={handleMenu}>
        <Image src={burger} alt="Burger menu" />
      </button>
      {isOpen && (
        <div className={S.menu} style={{width: isWidth, height: isHeight}}>
          {linkName.map(e => (
            <Link
              key={e.name}
              className={S.link}
              onClick={removeScroll}
              href={e.link}>
              {e.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Menu
