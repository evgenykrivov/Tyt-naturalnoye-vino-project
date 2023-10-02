import S from "@/pages/components/WineCollectionBrowser/WineCollectionBrowser.module.scss"
import React, {useState} from "react"
import Image from "next/image"
import prevItemImage from "../../../public/prevItem.png"
import nextItemImage from "../../../public/nextItem.png"
import {wines, wineTypes} from "@/pages/utils/varibles"
import WineButton from "@/pages/components/WineButton"
import WineCollectionItem from "pages/components/WineCollectionItem"
import WineCollectionCircles from "@/pages/components/WineCollectionCircles"
import WineCollectionScene from "@/pages/components/WineCollectionScene"

const WineCollectionBrowser = () => {
  const [winesCollection, setWinesCollection] = useState(wines)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeButton, setActiveButton] = useState(null)

  const sort = (event) => {
    setCurrentIndex(0)
    setWinesCollection(wines.filter(wine => wine.classification === event))
  }
  const changeColor = (index) => setActiveButton(index)
  const nextItem = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % winesCollection.length)
  const prevItem = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + winesCollection.length) % winesCollection.length)

  return (
    <>
      <div id="container" className={S.containerType}>
        {
          wineTypes.map((type, index) => {
            const isActive = activeButton === index
            const prefix = isActive ? "/" : ""
            const WineButtonText = prefix + type.toUpperCase()
            return (
              <WineButton
                key={`wineButton-${index}`}
                event={type}
                index={index}
                activeButton={activeButton}
                inColor={changeColor}
                handleSort={sort}
              >
                {WineButtonText}
              </WineButton>
            )
          })
        }
      </div>

      <div className={S.container}>
        <Image className={S.button} src={prevItemImage} onClick={prevItem} alt="button prev"/>
        <WineCollectionScene collection={winesCollection} currentIndex={currentIndex}/>
        <Image src={nextItemImage} className={S.button} onClick={nextItem} alt="button next"/>
      </div>
    </>
  )
}

export default WineCollectionBrowser
