import news_info from "@/utils/news_info"
import NewsCollectionItem from "../NewsCollectionItem/NewsCollectionItem"

const NewsCollectionBrowser = () => (
  <>
    {news_info.map((item, index) => {
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

export default NewsCollectionBrowser
