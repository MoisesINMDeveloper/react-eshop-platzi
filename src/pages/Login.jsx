import { useRef } from 'react';
import '@styles/Login.scss'
import logo from '@logos/logo_yard_sale.svg';

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password'),
    }
    console.log(data);
  }
  return (
    <div className="Login">
			<div className="Login__container">
				<img src={logo} alt="logo" className="Login__logo" />
				<form action="/" className="form" ref={form}>
					<label htmlFor="email" className="Login__label">Email address</label>
					<input type="text" name="email" placeholder="platzi@example.cm" className="Login__input input-email" />
					<label htmlFor="password" className="Login__label">Password</label>
					<input type="password" name="password" placeholder="*********" className="Login__input input-password" />
					<button onClick={handleSubmit} className="primary-button Login__button">
            Log in
					</button>
					<a className='form__forgot-pswd' href="/">Forgot my password</a>
				</form>
				<button className="secondary-button signup-button">
					Sign up
				</button>
			</div>
		</div >


  )
}

export default Login