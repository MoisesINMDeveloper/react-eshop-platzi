import { useContext } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '@context/AppContext'
import btAddCart from "@icons/bt_add_to_cart.svg";
import btAddedCart from "@icons/bt_added_to_cart.svg"

const ProductItem = ({ product }) => {
	const { addToCart, removeFromCart, state } = useContext(AppContext);
	const itsProductAdded = () => state.cart.some( (item) => item.id === product.id) ? true : false;
	const handleClick = (item) => {
		itsProductAdded() ? removeFromCart(item) : addToCart(item);
	  };


	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					{ itsProductAdded() ? (
						<img src={btAddedCart} alt="" className="btAddedCart"/>
					) : (
						<img src={btAddCart} alt="" className="btAddCart"/>
					)}
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;