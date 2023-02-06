import logo from '@logos/logo_yard_sale.svg';
import '@styles/NewPassword.scss';

const NewPassword = () => {
	return (
		<div className="NewPassword">
			<div className="NewPassword__container">
				<img src={logo} alt="logo" className="NewPassword__logo" />
				<h1 className="NewPassword__title">Create a new password</h1>
				<p className="NewPassword__subtitle">Enter a new passwrd for yue account</p>
				<form action="/" className="NewPassword__form">
					<label forhtml="password" className="NewPassword__label">Password</label>
					<input type="password" id="password" placeholder="*********" className="NewPassword__input input-password" />
					<label forhtml="new-password" className="NewPassword__label">Password</label>
					<input type="password" id="new-password" placeholder="*********" className="NewPassword__input input-password" />
					<input type="submit" value="Confirm" className="button confirm-button" />
				</form>
			</div>
		</div>
	);
}

export default NewPassword;