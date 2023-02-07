import ProductInfo from '@components/ProductInfo';
import '@styles/ProductDetail.scss';

import pdIconClose from "@icons/icon_close.png"

const ProductDetail = () => {
	return (
		<aside className="ProductDetail">
			<div className="ProductDetail-close">
				<img src={pdIconClose} alt="close" />
			</div>
			<ProductInfo />
		</aside>
	);
}

export default ProductDetail;