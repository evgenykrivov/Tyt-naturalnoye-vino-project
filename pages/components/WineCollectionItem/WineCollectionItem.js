import wineImage from "@/public/wineImage.png"
import Image from "next/image"
import React from "react"
import S from "./WineCollectionItem.module.scss"

const WineCollectionItem = props => (
  <div className={S.container}>
    <Image className={S.wineImage} src={wineImage} alt={props.item.name} />
    <div className={S.info}>
      {props.item && (
        <>
          <p className={S.aboutBold}>{props.item.name}</p>
          <p className={S.about}>Аромат: {props.item.smell.join(", ")}</p>
          <p className={S.about}>
            Вино {props.item.classification.toLowerCase()} {props.item.species},{" "}
            {props.item.volume}
          </p>
          <p className={S.about}>Алкоголь: {props.item.alcohol}%</p>
          <p className={S.about}>Сахар: {props.item.sugar} г/дм</p>
          <p className={S.about}>Рейтинг: {props.item.rating}</p>
        </>
      )}
    </div>
  </div>
)

export default WineCollectionItem
