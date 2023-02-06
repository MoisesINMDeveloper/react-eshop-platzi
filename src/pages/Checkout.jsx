import { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import sumTotal from '@utils/sumTotal';
import '@styles/Checkout.scss';

const Checkout = () => {
	const date = new Date();
	const { state: {cart} } = useContext(AppContext);

	return (
		<div className="Checkout">
			<div className="Checkout__container">
				<h1 className="Checkout__title">My order</h1>
				<div className="Checkout__content">
						{cart.map( ( product, index ) => (
							<OrderItem indexValue={index} product={product} key={index} />
						))}
					<div className="order">
						<p className='order__info'>
							<span className='order__date'>{date.getDate()}.{date.getMonth()}.{date.getFullYear()}</span>
							<span className='order__quantity'>{cart.length} articles</span>
						</p>
						<p className='order__total'>$ {sumTotal(cart)}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Checkout;