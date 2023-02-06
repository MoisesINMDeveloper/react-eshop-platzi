import logo from '@logos/logo_yard_sale.svg';
import emailIcon from '@icons/email.svg';
import '@styles/PasswordRecovery.scss';

const RecoveryPassword = () => {
  return (
    <div className="PasswdRecovery">
      <div className="PasswdRecovery__form">
        <img src={logo} alt="logo" className="PasswdRecovery__logo" />
        <h1 className="PasswdRecovery__title">Email has been sent!</h1>
        <p className="PasswdRecovery__subtitle">Please check your inbox for instructions on how to reset the password</p>
        <div className="PasswdRecovery__email-image">
          <img className='icon' src={emailIcon} alt="email" />
        </div>
        <button className="primary-button">Back</button>
        <p className="resend">
          <span className='resend__text'>Didn't receive the email?</span>
          <a className='resend__link' href="/">Resend</a>
        </p>
      </div>
    </div>
  )
}

export default RecoveryPassword