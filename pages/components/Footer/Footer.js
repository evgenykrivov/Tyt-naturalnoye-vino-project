import styles from "./Footer.module.scss"
import Link from "next/link"
import { useState } from "react" // Импортируем useState

//to do:
// Add popup "not validation email"

const Footer = () => {
  const [ email, setEmail ] = useState("") // Создаем состояние для хранения значения поля email
  const [ emailStatus, setEmailStatus ] = useState(false)
  const [ validation, setValidation ] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    isValidEmail(email) ? setEmailStatus(true) : setValidation(true)
  }

  const isValidEmail = (value) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    return emailPattern.test(value)
  }

  return (
    <footer>
      <h3 className={ styles.heading }>ПОДПИСЫВАЙСЯ НА НАШИ НОВОСТИ</h3>

      { !emailStatus ? (
        <>
          <form className={ styles.follow }>
            <input
              pattern="^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$"
              className={ styles.input }
              placeholder={ "Ваш E-mail" }
              type="email"
              value={ email }
              onChange={ (e) => setEmail(e.target.value) }
            ></input>
            <button type="submit" className={ styles.submit } onClick={ handleClick }>/ТЫК</button>
          </form>
          { validation ? (<p>Некорретный формат :(</p>) : <></> }
        </>) : (<p>Спасибо за подписку!</p>) }

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
