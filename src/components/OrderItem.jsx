import { useContext } from 'react';
import AppContext from '@context/AppContext';
import closeIcon from '@icons/icon_close.png';
import '@styles/OrderItem.scss';

const OrderItem = ( props ) => {
	const { product, indexValue } = props;
	const { removeFromCart } = useContext(AppContext)

	const handleRemove = (item) => {
		removeFromCart(item);
	}

	return (
		<div className="OrderItem">
			<figure className='OrderItem__img-container'>
				<img className='OrderItem__icon' src={product.images[0]} alt={product.title} />
			</figure>
			<p className='OrderItem__title'>{product.title}</p>
			<p className='OrderItem__price'>$ {product.price}</p>
			<img className='OrderItem__close' src={closeIcon} alt="close" onClick={() => handleRemove(indexValue)} />
		</div>
	);
}

export default OrderItem;