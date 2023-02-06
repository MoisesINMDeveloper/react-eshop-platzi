import '@styles/Menu.scss';

const Menu = () => {
	return (
		<div className="Menu">
			<ul className='Menu__list'>
				<li className='list-item'>
					<a href="/" className="list-item__element">My orders</a>
				</li>
				<li className='list-item'>
					<a href="/" className="list-item__element">My account</a>
				</li>
				<li className='list-item sign-out'>
					<a className='sign-out__text' href="/">Sign out</a>
				</li>
			</ul>
		</div>
	);
}

export default Menu;