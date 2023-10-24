import S from "./WidgetSize.module.scss"
import React, {useEffect, useState} from "react"

const WidgetSize = () => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      const widthBody = document.body.offsetWidth
      setWidth(widthBody)
    }

    const handleLoad = () => {
      window.addEventListener("resize", handleResize)
    }

    const handleUnload = () => {
      window.removeEventListener("resize", handleResize)
    }

    handleResize()
    handleLoad()

    return handleUnload
  }, [])

  return <p className={S.WidgetSize}>: {width} px</p>
}

export default WidgetSize
