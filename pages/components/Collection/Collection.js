import S from "@/pages/components/Collection/Collection.module.scss"
import React, { useState } from "react"
import Image from "next/image"
import prevItemImage from "../../../public/prevItem.png"
import nextItemImage from "../../../public/nextItem.png"
import { wines, wineType } from "@/pages/utils/varibles"
import WineButton from "@/pages/components/WineButton"
import CollectionItem from "@/pages/components/CollectionItem"
import WineCollectionCircles from "@/pages/components/WineCollectionCircles"

const Collection = () => {
  const [ winesCollection, setWinesCollection ] = useState(wines)
  const [ currentIndex, setCurrentIndex ] = useState(0)
  const [ activeButton, setActiveButton ] = useState(null)

  const sort = (event) => {
    setCurrentIndex(0)
    setWinesCollection(wines.filter((element) => {
      return element.classification === event
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

  return (
    <>
      <div id="container" className={ S.containerType }>
        {
          wineType.map((event, index) => {
            const WineButtonText = activeButton === index ? ("/" + event.toUpperCase()) : event.toUpperCase()
            return (
              <WineButton
                event={ event }
                index={ index }
                key={ `wineButton-${ index }` }
                activeButton={ activeButton }
                inColor={ changeColor }
                handleSort={ sort }
              >
                { WineButtonText }
              </WineButton>
            )
          })
        }
      </div>

      <div className={ S.container }>
        <Image className={ S.button } src={ prevItemImage } onClick={ prevItem } alt="button"/>
        <div className={ S.item }>
          <CollectionItem item={ winesCollection[ currentIndex ] }/>
          <WineCollectionCircles collection={ winesCollection } currentIndex={ currentIndex }/>
        </div>
        <Image src={ nextItemImage } className={ S.button } onClick={ nextItem } alt="button"/>
      </div>
    </>
  )
}

export default Collection
