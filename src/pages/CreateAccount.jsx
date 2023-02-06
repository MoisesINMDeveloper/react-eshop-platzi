import '@styles/CreateAccount.scss';

const CreateAccount = () => {
	return (
		<div className="CreateAccount">
			<div className="CreateAccount__container">
				<h1 className="CreateAccount__title">My account</h1>
				<form action="/" className="CreateAccount__form">
					<div>
						<label forhtml="name" className="CreateAccount__label">Name</label>
						<input type="text" id="name" placeholder="Teff" className="CreateAccount__input input-name" />
						<label forhtml="email" className="CreateAccount__label">Email</label>
						<input type="text" id="email" placeholder="platzi@example.com" className="CreateAccount__input input-email" />
						<label forhtml="password" className="CreateAccount__label">Password</label>
						<input type="password" id="password" placeholder="*********" className="CreateAccount__input input-password" />
					</div>
					<input type="submit" value="Create" className="CreateAccount__button create-button" />
				</form>
			</div>
		</div>
	);
}

export default CreateAccount;