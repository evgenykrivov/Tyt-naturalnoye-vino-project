import S from "@/pages/components/WineCollectionScene/WineCollectionScene.module.scss"
import WineCollectionItem from "@/pages/components/WineCollectionItem"
import WineCollectionCircles from "@/pages/components/WineCollectionCircles"
import React from "react"

const WineCollectionScene = ({collection = [], currentIndex = 0}) => (
  <div className={S.item}>
    <WineCollectionItem item={collection[currentIndex]} />
    <WineCollectionCircles
      collection={collection}
      currentIndex={currentIndex}
    />
  </div>
)

export default WineCollectionScene
