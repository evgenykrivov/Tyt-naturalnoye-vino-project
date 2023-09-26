import styles from "./Shop.module.scss"
import Collection from "@/pages/components/Collection"


const Shop = () => {
  return (
    <>
      <div className={ styles.shop }>
        <h1 className={ styles.mainText } style={ { marginBottom: "22px" } }>КОЛЛЕКЦИЯ</h1>
        <Collection/>
      </div>
    </>
  )
}

export default Shop
