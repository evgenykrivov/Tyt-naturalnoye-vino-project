import styles from "@/pages/components/Collection/Collection.module.scss"
import React, { useState } from "react"
import Image from "next/image"
import wineImage from "../../../public/wineImage.png"
import circlesImage from "../../../public/circle.svg"
import circles_active from "../../../public/circle_active.svg"
import prevItemImage from "../../../public/prevItem.png"
import nextItemImage from "../../../public/nextItem.png"

const Collection = ({ array }) => {
  const [ currentIndex, setCurrentIndex ] = useState(0)

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % array.length)
  }

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + array.length) % array.length)
  }
  const circles = Array.from({ length: 5 }, (_, index) => (
      <div key={ index } className={ styles.containerCircles }>
        { currentIndex % 5 === index % 5 ?
          <Image className={ styles.circlesItem } src={ circles_active } alt="circles active"/> :
          <Image className={ styles.circlesItem } src={ circlesImage } alt="circles"/> }
      </div>
    )
  )

  const currentItem = array[ currentIndex ]

  return (
    <>
      <div className={ styles.container }>
        <Image className={ styles.button } src={ prevItemImage } onClick={ prevItem } alt="button"/>
        <div className={ styles.container__galary }>
          <Image className={ styles.wineImage } src={ wineImage } alt={ currentItem.name }/>
          <div className={ styles.info }>
            <p className={ styles.info__about_bold }>{ currentItem.name }</p>
            <p className={ styles.info__about }>Аромат: { currentItem.smell.join(", ") }</p>
            <p className={ styles.info__about }>Вино { currentItem.species }, { currentItem.volume }</p>
            <p className={ styles.info__about }>Алкоголь: { currentItem.alcohol }%</p>
            <p className={ styles.info__about }>Сахар: { currentItem.sugar } г/дм</p>
            <p className={ styles.info__about }>Рейтинг: { currentItem.rating }</p>
          </div>
        </div>
        <Image src={ nextItemImage } className={ styles.button } onClick={ nextItem } alt="button"/>
      </div>
      <div className={ styles.switch }>
        { circles }
      </div>
    </>
  )
}

export default Collection
