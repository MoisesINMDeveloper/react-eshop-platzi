import { useContext } from 'react';
import AppContext from '@context/AppContext'
import OrderItem from '@components/OrderItem';
import '@styles/MyOrder.scss';

import moArrow from "@icons/flechita.svg"

const MyOrder = ({ toggleOrders, setToggleOrders }) => {
	const { state } = useContext(AppContext)

	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img
					src={moArrow}
					alt="arrow"
					onClick={() => setToggleOrders(!toggleOrders)}
					className="CloseOrders"
				/>
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map(product => (
					<OrderItem product={product} key={`orderItem-${product.id}`} />
				))}
			</div>
			<div>
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;