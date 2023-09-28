import React from "react"
import S from "./WineButton.module.scss"

const WineButton = (props) => (
  <button
    className={ `${ S.buttonType } ${
      props.activeButton === props.index ? S.buttonType_active : ""
    }` }
    key={ props.key }
    onClick={ () => {
      props.inColor(props.index)
      props.handleSort(props.event)
    } }
  >
    { props.children }
  </button>
)

export default WineButton
