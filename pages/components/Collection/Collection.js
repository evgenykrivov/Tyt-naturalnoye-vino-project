import styles from "@/pages/components/Collection/Collection.module.scss"
import React, { useState } from "react"
import Image from "next/image"
import wineImage from "../../../public/wineImage.png"

const Collection = ({ array }) => {
  const [ currentIndex, setCurrentIndex ] = useState(0)

  const nextItem = () => {
    // Увеличиваем индекс на 1, оборачивая его к началу, если он выходит за границы массива
    setCurrentIndex((prevIndex) => (prevIndex + 1) % array.length)
  }

  const prevItem = () => {
    // Уменьшаем индекс на 1, оборачивая его к концу, если он становится меньше 0
    setCurrentIndex((prevIndex) => (prevIndex - 1 + array.length) % array.length)
  }

  const currentItem = array[ currentIndex ]

  return (
    <>
      <div className={ styles.container }>
        <button onClick={ prevItem }>(-</button>
        <div className={ styles.container__galary }>
          <Image className={ styles.wineImage } src={ wineImage } alt={ currentItem.name }/>
          <div className={ styles.info }>
            <p className={ styles.info__about }>{ currentItem.name }</p>
            <p className={ styles.info__about }>Аромат: { currentItem.smell.join(", ") }</p>
            <p className={ styles.info__about }>Вино { currentItem.species }, { currentItem.volume }</p>
            <p className={ styles.info__about }>Алкоголь: { currentItem.alcohol }%</p>
            <p className={ styles.info__about }>Сахар: { currentItem.sugar } г/дм</p>
            <p className={ styles.info__about }>Рейтинг: { currentItem.rating }</p>
          </div>
        </div>
        <button onClick={ nextItem }>-)</button>
      </div>
      <div className={ styles.swith }>
        ВИДЖЕТ
      </div>
    </>
  )
}

export default Collection
