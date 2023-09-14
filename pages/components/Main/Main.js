import styles from "./Main.module.scss"
import Image from "next/image"
import mainImage from "../../../public/mainImage.png"
import tick from "../../../public/tick.png"

const Main = () => (
  <main>
    <h1 className={ styles.main__text }>ТУТ НАТУРАЛЬНОЕ<span className={ styles.main__transfer }>ВИНО</span></h1>
    <Image className={ styles.main__image } src={ mainImage } alt={ "Main photo" }/>
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
  </main>
)

export default Main
