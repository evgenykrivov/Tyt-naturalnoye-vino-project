import S from "./HighPage.module.scss"
import Image from "next/image"
import HighPageImage from "../../../public/mainImage.png"
import tick from "../../../public/tick.png"

const HighPage = () => (
  <div className={S.HighPage}>
    <h1 className={S.name}>
      ТУТ НАТУРАЛЬНОЕ<span className={S.nameTransfer}>ВИНО</span>
    </h1>
    <Image className={S.image} src={HighPageImage} alt={"HighPage photo"} />
    <div className={S.container}>
      <Image src={tick} alt={"Tick"} />
      <p className={S.about}>СКРОЛЬ</p>
    </div>

    <div className={S.description}>
      <div className={S.heading}>
        <h2 className={S.main}>ЧТО ТАКОЕ</h2>
        <h2 className={S.extension}>
          НАТУРАЛЬНОЕ <span className={S.extensionBlueColor}>ВИНО</span>
        </h2>
      </div>
      <div className={S.additionally}>
        <p>
          Это вино изготовленное из винограда, выращенного на органических
          землях, без добавления искусственных, химических и других посторонних
          веществ. Такое вино ферментируется само по себе при помощи
          естественных дрожей, без добавления каких-либо традиционных добавок в
          процессе
        </p>
        <p>
          В натуральных винах обычно содержится низкий процент алкоголя и
          поэтому их можно пить как за едой, так и отдельно. И красные и белые
          сорта практически всегда перед употреблением лучше некоторое время
          подержать в холодильнике
        </p>
      </div>
    </div>
  </div>
)

export default HighPage
