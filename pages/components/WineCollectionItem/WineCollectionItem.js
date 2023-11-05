import wineImage from "@/public/wineImage.png"
import Image from "next/image"
import React from "react"
import S from "./WineCollectionItem.module.scss"

const WineCollectionItem = ({
  item = {
    name: "",
    smell: [],
    classification: "",
    species: "",
    volume: "",
    alcohol: 0,
    sugar: 0,
    rating: 0
  }
}) => {
  return (
    <div className={S.container}>
      <Image className={S.wineImage} src={wineImage} alt={item.name} />

      <div className={S.info}>
        {item.name && (
          <>
            <p className={S.aboutBold}>{item.name}</p>
            <p className={S.about}>Аромат: {item.smell?.join(", ")}</p>
            <p className={S.about}>
              Вино {item.classification?.toLowerCase()} {item.species},{" "}
              {item.volume}
            </p>
            <p className={S.about}>Алкоголь: {item.alcohol}%</p>
            <p className={S.about}>Сахар: {item.sugar} г/дм</p>
            <p className={S.about}>Рейтинг: {item.rating}</p>
          </>
        )}
      </div>
    </div>
  )
}

export default WineCollectionItem
