import S from "./Shop.module.scss"
import Collection from "@/pages/components/Collection"


const Shop = () => {
  return (
    <>
      <div className={ S.shop }>
        <h1 className={ S.mainText } style={ { marginBottom: "22px" } }>КОЛЛЕКЦИЯ</h1>
        <Collection/>
      </div>
    </>
  )
}

export default Shop
