

import NewsCollectionBrowser from "../NewsCollectionBrowser/NewsCollectionBrowser"
import S from "./News.module.scss"

const News = () => {

  return (
    <div className={S.news}>
      <h1 className={S.title}>Новости</h1>
      <NewsCollectionBrowser/>
    </div>
  )
}
export default News
