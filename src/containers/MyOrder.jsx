import { useContext } from 'react';
import { Link } from 'react-router-dom';
import flechita from '@icons/flechita.svg';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import sumTotal from '../utils/sumTotal';
import '@styles/MyOrder.scss';

const MyOrder = () => {
	const { state: {cart} } = useContext(AppContext);
	
	return (
		<aside className="MyOrder">
			<div className="MyOrder__title-container">
				<img className='MyOrder__close' src={flechita} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="MyOrder__content">
				{cart.map( ( product, index ) => (
					<OrderItem indexValue={index} product={product} key={index} />
				))}
			</div>
			<div className="order">
				<p>
					<span className='order__title'>Total</span>
				</p>
				<p className='order__total'>$ {sumTotal(cart)}</p>
			</div>
			<Link to='/checkout' >
				<button className="primary-button">
						Checkout
				</button>
			</Link>
		</aside>
	);
}

export default MyOrder;