import S from "./NewsCollectionItem.module.scss"
import Image from "next/image"

const NewsCollectionItem = ({name, designation, news_image}) => {
  const image = `/news/news_${news_image}.png`
  console.log(image)
  return (
    <div className={S.container}>
      <h2 className={S.news_name}>{name}</h2>
      <p className={S.designation}>{designation}</p>
      <div className={S.image}>
        <Image fill={true} className={S.image} src={image} alt="News image" />
      </div>
    </div>
  )
}

export default NewsCollectionItem
