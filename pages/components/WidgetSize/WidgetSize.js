import S from "./WidgetSize.module.scss"
import React from "react"

const WidgetSize = () => {
  const [ width, setWidth ] = React.useState(0)

  const handleResize = () => {
    setWidth(window.innerWidth)
  }

  const onLoadHandler = () => {
    window.addEventListener("resize", handleResize)
  }

  const onUnloadHandler = () => {
    window.removeEventListener("resize", handleResize)
  }

  React.useEffect(() => {
      handleResize()
      onLoadHandler()
      return onUnloadHandler
    }, [])

  return <p className={ S.WidgetSize }>: { width } px</p>
}

export default WidgetSize
