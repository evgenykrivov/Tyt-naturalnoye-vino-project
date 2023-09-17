import styles from "./Footer.module.scss"
import Link from "next/link"

const Footer = () => {


  return (
    <footer>
      <h3 className={ styles.heading }>ПОДПИСЫВАЙСЯ НА НАШИ НОВОСТИ</h3>
      <form className={ styles.follow }>
        <input className={ styles.input } placeholder={ "Ваш E-mail" } type={ "email" }></input>
        <button className={ styles.submit }>/ТЫК</button>
      </form>
      <div className={ styles.container }>

        <ul className={ styles.links }>
          <Link className={ `${ styles.link } ${ styles.link_bold }` } href="/">Покупателям</Link>
          <Link className={ styles.link } href="/">Оплата и доставка</Link>
          <Link className={ styles.link } href="/">Обратная связь</Link>
          <Link className={ styles.link } href="/">Контакты</Link>
        </ul>

        <ul className={ styles.links }>
          <Link className={ `${ styles.link } ${ styles.link_bold }` } href="/">О нас</Link>
          <Link className={ styles.link } href="/">Новости</Link>
          <Link className={ styles.link } href="/">Мероприятия</Link>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
