import news_info from "@/utils/news_info"
import NewsCollectionItem from "../NewsCollectionItem/NewsCollectionItem"

const NewsCollectionBrowser = () => {
  console.log(news_info)
  return (
    <>
      {news_info.map((item, index) => {
        console.log(item.news_name)
        return (
          <NewsCollectionItem
            key={index}
            name={item.news_name}
            designation={item.designation}
            news_image={item.image}
          />
        )
      })}
    </>
  )
}

export default NewsCollectionBrowser
