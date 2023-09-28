import S from "./Footer.module.scss"
import Link from "next/link"
import { useState } from "react"
import EmailValidationMessage from "@/pages/components/EmailValidationMessage"
import SubscriptionSuccessMessage from "@/pages/components/SubscriptionSuccessMessage" // Импортируем useState

//to do:
// Add popup "not validation email"

const Footer = () => {
  const [ email, setEmail ] = useState("")
  const [ emailStatus, setEmailStatus ] = useState(false)
  const [ validation, setValidation ] = useState(false)

  const submitEmail = () => {
    setEmailStatus(true)
  }

  const showEmailValidationError = () => {
    setValidation(true)
  }

  const handleClick = (e) => {
    e.preventDefault()
    isValidEmail(email) ? submitEmail() : showEmailValidationError()
  }

  const isValidEmail = (value) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    emailPattern.test(value) ? setValidation(false) : setValidation(true)
    return emailPattern.test(value)
  }


  return (
    <footer>
      <h3 className={ S.heading }>ПОДПИСЫВАЙСЯ НА НАШИ НОВОСТИ</h3>

      { !emailStatus ? <>
        <form className={ S.follow }>
          <input
            pattern="^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$"
            className={ S.input }
            placeholder={ "Ваш E-mail" }
            type="email"
            value={ email }
            onChange={ (e) => {
              if ( validation ) isValidEmail(e.target.value)
              if ( e.target.value === "" ) setValidation(false)
              setEmail(e.target.value)
            } }

          ></input>
          <button type="submit" className={ S.submit } onClick={ handleClick }>/ТЫК</button>
        </form>
        <EmailValidationMessage validation={ validation }/>
      </> : <SubscriptionSuccessMessage/> }

      <div className={ S.container }>
        <ul className={ S.links }>
          <Link className={ `${ S.link } ${ S.link_bold }` } href="/">Покупателям</Link>
          <Link className={ S.link } href="/">Оплата и доставка</Link>
          <Link className={ S.link } href="/">Обратная связь</Link>
          <Link className={ S.link } href="/">Контакты</Link>
        </ul>

        <ul className={ S.links }>
          <Link className={ `${ S.link } ${ S.link_bold }` } href="/">О нас</Link>
          <Link className={ S.link } href="/">Новости</Link>
          <Link className={ S.link } href="/">Мероприятия</Link>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
