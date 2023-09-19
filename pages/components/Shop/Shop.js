import styles from "./Shop.module.scss"
import Collection from "@/pages/components/Collection"
import WineSorting from "@/pages/components/WineSorting/WineSorting"

const Shop = () => (
  <>
    <div className={ styles.shop }>
      <h1 className={ styles.mainText } style={ { marginBottom: "22px" } }>КОЛЛЕКЦИЯ</h1>
      <WineSorting/>
      <Collection/>
    </div>
  </>
)

export default Shop
