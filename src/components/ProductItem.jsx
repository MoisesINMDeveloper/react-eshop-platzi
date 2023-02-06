import { useContext  } from 'react';
import AppContext from '@context/AppContext';
import removefromCartImage from '@icons/bt_added_to_cart.svg'
import addToCartImage from '@icons/bt_add_to_cart.svg';
import '@styles/ProductItem.scss';

const ProductItem = ({ product }) => {
	const { addToCart,addProduct } = useContext(AppContext);
	const {  removeFromCart } = useContext(AppContext);
	const { state: {cart} } = useContext(AppContext);

	const isProductAdded = () => cart.some( (item) => item.id == product.id) ? true : false;

	const handleCart = (item) => {
		isProductAdded() ? removeFromCart(item.id) : addToCart(item);
	}

	
	// const handleClick = (item) => {
	// 	addToCart(item);
	// }

	const handleProduct = (item) => {
		addProduct(item);
	}

	return (
		<div className="ProductItem">
			<img onClick={() => handleProduct(product)} className='ProductItem__image' src={product.images[0]} alt={product.title} />
			<div className="ProductItem__info">
				<div>
					<p className='ProductItem__price'>$ {product.price}</p>
					<p className='ProductItem__name'>{product.title}</p>
				</div>
				<figure className='ProductItem__add-to-cart' onClick={() => handleCart(product)}>
					{ isProductAdded()
					? (	<img className='ProduProductItem__icon' src={removefromCartImage} alt="" /> ) 
					: ( <img className='ProduProductItem__icon' src={addToCartImage} alt="" /> )
					}
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;