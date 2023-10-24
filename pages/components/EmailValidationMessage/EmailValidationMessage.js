import PropTypes from "prop-types"

const EmailValidationMessage = ({validation}) => {
  if (!validation) return null

  return <p>Некорректный формат</p>
}

EmailValidationMessage.propTypes = {
  validation: PropTypes.bool
}

export default EmailValidationMessage
