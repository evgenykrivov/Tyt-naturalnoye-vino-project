import styles from "./WineSorting.module.scss"
import { wineType } from "@/pages/utils/varibles"
import { useState } from "react"

const WineSorting = () => {
  const [ activeButton, setActiveButton ] = useState(null)

  const changeColor = (index) => {
    setActiveButton(index)
  }

  return (
    <>
      <div id="container" className={ styles.containerType }>
        { wineType.map((e, index) => (
          <button
            className={ `${ styles.buttonType } ${
              activeButton === index ? styles.buttonType_active : ""
            }` }
            key={ index }
            onClick={ () => changeColor(index) } // Добавляем обработчик события onClick
          >
            { activeButton === index ? ("/" + e.toUpperCase()) : e.toUpperCase() }
          </button>
        )) }
      </div>
    </>
  )
}

export default WineSorting
