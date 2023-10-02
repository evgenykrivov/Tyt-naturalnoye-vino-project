import Image from "next/image"
import circlesImage from "../../../public/circle.svg"
import circles_active from "../../../public/circle_active.svg"
import S from "./WineCollectionCircles.module.scss"


const WineCollectionCircles = (props) => {
  const arrayLength = props.collection.length < 5 ? props.collection.length : 5

  return (<div className={S.circles}>
      {Array.from({length: arrayLength}, (_, index) => (
          <div key={index}>
            {props.currentIndex % 5 === index % 5 ?
              <Image src={circles_active} alt="circles active"/> :
              <Image src={circlesImage} alt="circles"/>}
          </div>
        )
      )}
    </div>
  )
}
export default WineCollectionCircles
