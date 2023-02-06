import '@styles/MyAccount.scss';

const MyAccount = () => {
	return (
		<div className="MyAccount">
			<div className="MyAccount__container">
				<h1 className="MyAccount__title">My account</h1>
				<form action="/" className="MyAccount__form">
					<div>
						<label forhtml="name" className="MyAccount__label">Name</label>
						<p className="MyAccount__value">Camila Yokoo</p>
						<label forhtml="email" className="MyAccount__label">Email</label>
						<p className="MyAccount__value">camilayokoo@gmail.com</p>
						<label forhtml="password" className="MyAccount__label">Password</label>
						<p className="MyAccount__value">*********</p>
					</div>
					<input type="submit" value="Edit" className="button edit-button" />
				</form>
			</div>
		</div>
	);
}

export default MyAccount;