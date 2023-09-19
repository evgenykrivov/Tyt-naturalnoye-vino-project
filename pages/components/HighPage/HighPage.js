import styles from "./HighPage.module.scss"
import Image from "next/image"
import HighPageImage from "../../../public/mainImage.png"
import tick from "../../../public/tick.png"

const HighPage = () => (
  <div className={styles.HighPage}>
    <h1 className={ styles.HighPage__text }>ТУТ НАТУРАЛЬНОЕ<span className={ styles.HighPage__transfer }>ВИНО</span></h1>
    <Image className={ styles.HighPage__image } src={ HighPageImage } alt={ "HighPage photo" }/>
    <div className={ styles.container }>
      <Image src={ tick } alt={ "Tick" }/>
      <p className={ styles.container__about }>СКРОЛЬ</p>
    </div>

    <div className={ styles.description }>
      <div className={ styles.heading }>
        <h2 className={ styles.heading__main }>ЧТО ТАКОЕ</h2>
        <h2 className={ styles.heading__extension }>НАТУРАЛЬНОЕ <span
          className={ styles.heading__extension_blueColor }>ВИНО</span></h2>
      </div>
      <div className={styles.about}>
        <p>Это вино изготовленное из винограда,
          выращенного на органических землях, без добавления искусственных, химических и
          других посторонних веществ. Такое вино ферментируется само по
          себе при помощи естественных дрожей, без добавления каких-либо традиционных
          добавок в процессе</p>
        <p>В натуральных винах обычно содержится низкий процент
          алкоголя и поэтому их можно пить как за едой, так и отдельно. И красные и белые
          сорта практически всегда перед употреблением лучше некоторое время подержать в
          холодильнике
        </p>
      </div>
    </div>
  </div>
)

export default HighPage
