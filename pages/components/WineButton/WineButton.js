import React from "react"
import S from "./WineButton.module.scss"

const WineButton = (props) => {
  console.log(props)
  return (
    <button
      className={`${S.buttonType} ${
        props.activeButton === props.index ? S.buttonType_active : ""
      }`}
      onClick={() => {
        props.inColor(props.index)
        props.handleSort(props.event)
      }}
    >
      {props.children}
    </button>
  )
}

export default WineButton
