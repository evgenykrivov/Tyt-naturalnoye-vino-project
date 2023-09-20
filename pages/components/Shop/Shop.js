import styles from "./Shop.module.scss"
import Collection from "@/pages/components/Collection"
import WineSorting from "@/pages/components/WineSorting/WineSorting"
import { wines } from "@/pages/utils/varibles"


const Shop = () => {
  return (
    <>
      <div className={ styles.shop }>
        <h1 className={ styles.mainText } style={ { marginBottom: "22px" } }>КОЛЛЕКЦИЯ</h1>
        <WineSorting/>
        <Collection array={ wines }/>
      </div>
    </>
  )
}

export default Shop
