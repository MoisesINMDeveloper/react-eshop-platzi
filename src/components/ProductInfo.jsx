import { useContext } from 'react';
import addToCart from  '@icons/bt_add_to_cart.svg';
import closeIcon from  '@icons/icon_close.png';
import AppContext from '@context/AppContext';
import '@styles/ProductInfo.scss';

const ProductInfo = ({ product }) => {
	const { state: {actualProduct} } = useContext(AppContext)
	const { removeProduct } = useContext(AppContext);

	return (
		<section className='ProductInfo'>
			<div className='ProductInfo__container'>
				<div onClick={removeProduct} className='ProductInfo__close'>
					<img className='ProductInfo__icon' src={closeIcon} alt="close product" />
				</div>
				<img className='ProductInfo__image' src={product.images[0]} alt={product.title} />
				<div className="ProductInfo__text">
					<p className='ProductInfo__price'>$ {product.price}</p>
					<p className='ProductInfo__name'>{product.title}</p>
					<p className='ProductInfo__description'>{product.description}</p>
					<button className="ProductInfo__button add-to-cart-button">
						<img src={addToCart} alt="add to cart" />
						Add to cart
					</button>
				</div>
			</div>
		</section>
	);
}

export default ProductInfo;