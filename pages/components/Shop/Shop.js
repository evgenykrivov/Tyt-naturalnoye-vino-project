import S from "./Shop.module.scss"
import WineCollectionBrowser from "pages/components/WineCollectionBrowser"

const Shop = () => {
  return (
    <>
      <div className={S.shop}>
        <h1 className={S.mainText}>КОЛЛЕКЦИЯ</h1>
        <WineCollectionBrowser />
      </div>
    </>
  )
}

export default Shop
