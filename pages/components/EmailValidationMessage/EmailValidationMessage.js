const EmailValidationMessage = ({validation}) => {
  if ( !validation ) return null

  return (<p>Некорртеный формат</p>)
}

export default EmailValidationMessage
