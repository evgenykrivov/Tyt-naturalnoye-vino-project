import styles from "./Footer.module.scss"

const Footer = () => {


  return (
    <footer>
      <h3 className={ styles.heading }>ПОДПИСЫВАЙСЯ НА НАШИ НОВОСТИ</h3>
      <form className={ styles.follow }>
        <input className={ styles.input } placeholder={ "Ваш E-mail" } type={ "email" }></input>
        <button className={ styles.submit }>/ТЫК</button>
      </form>

      <nav>
        <ul>
          <li><a href="#">Покупателям</a></li>
          <li><a href="#">Оплата и доставка</a></li>
          <li><a href="#">Обратная связь</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li><a href="#">О нас</a></li>
          <li><a href="#">Новости</a></li>
          <li><a href="#">Мероприятия</a></li>

        </ul>
      </nav>
    </footer>
  )
}

export default Footer
