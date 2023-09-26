import styles from "@/pages/components/Collection/Collection.module.scss"
import React, { useState } from "react"
import Image from "next/image"
import wineImage from "../../../public/wineImage.png"
import circlesImage from "../../../public/circle.svg"
import circles_active from "../../../public/circle_active.svg"
import prevItemImage from "../../../public/prevItem.png"
import nextItemImage from "../../../public/nextItem.png"
import { wines, wineType } from "@/pages/utils/varibles"

const Collection = () => {
  const [ winesCollection, setWinesCollection ] = useState(wines)
  const [ currentIndex, setCurrentIndex ] = useState(0)
  const [ activeButton, setActiveButton ] = useState(null)

  const sort = (e) => {
    setCurrentIndex(0)
    setWinesCollection(wines.filter((element) => {
      return element.classification === e
    }))
  }

  const changeColor = (index) => {
    setActiveButton(index)
  }

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % winesCollection.length)
  }

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + winesCollection.length) % winesCollection.length)
  }

  const circles = Array.from({ length: winesCollection.length < 5 ? winesCollection.length : 5 }, (_, index) => (
      <div key={ index }>
        { currentIndex % 5 === index % 5 ?
          <Image src={ circles_active } alt="circles active"/> :
          <Image src={ circlesImage } alt="circles"/> }
      </div>
    )
  )

  const currentItem = winesCollection[ currentIndex ]

  return (
    <>
      <div id="container" className={ styles.containerType }>
        { wineType.map((e, index) => (
          <button
            className={ `${ styles.buttonType } ${
              activeButton === index ? styles.buttonType_active : ""
            }` }
            key={ index }
            onClick={ () => {
              changeColor(index)
              sort(e)
            } }
          >
            { activeButton === index ? ("/" + e.toUpperCase()) : e.toUpperCase() }
          </button>
        )) }
      </div>

      <div className={ styles.container }>
        <Image className={ styles.button } src={ prevItemImage } onClick={ prevItem } alt="button"/>
        <div className={ styles.container__galary }>
          { currentItem && (
            <Image className={ styles.wineImage } src={ wineImage } alt={ currentItem.name }/>
          ) }
          <div className={ styles.info }>
            { currentItem && (
              <>
                <p className={ styles.info__about_bold }>{ currentItem.name }</p>
                <p className={ styles.info__about }>Аромат: { currentItem.smell.join(", ") }</p>
                <p
                  className={ styles.info__about }>Вино { currentItem.classification.toLowerCase() } { currentItem.species }, { currentItem.volume }</p>
                <p className={ styles.info__about }>Алкоголь: { currentItem.alcohol }%</p>
                <p className={ styles.info__about }>Сахар: { currentItem.sugar } г/дм</p>
                <p className={ styles.info__about }>Рейтинг: { currentItem.rating }</p>
              </>
            ) }
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
