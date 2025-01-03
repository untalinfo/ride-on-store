import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../../../shared/presentation/components/Navbar';
import CategoryList from '../components/CategoryList';
import ProductCard from '../../../../shared/presentation/components/ProductCard';
import './HomePage.scss';
import { productDetailPageRoute } from '../../../productDetail/infrastructure/routing/routes';
import { getProducts } from '../../application/slices/products';
import { getProductsSelector } from '../../application/selectors/products';

const HomePage = () => {
	const dispatch = useDispatch();
	const arrayProducts = useSelector(getProductsSelector);
	const firstProduct = arrayProducts?.[0];
	const popularProducts = arrayProducts?.slice(1);

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	return (
		<div className="home-page-container">
			<Navbar />
			<section className="hero-container">
				<h3>Explore</h3>
				<p className="hero-description">The best & favorite motorcycle</p>
			</section>
			<CategoryList />
			<div className="corousel-container">
				<ProductCard
					productName={firstProduct?.title}
					productPrice={firstProduct?.price}
					productImg={firstProduct?.image}
					urlRedirection={productDetailPageRoute(firstProduct?.id)}
				/>
			</div>

			<div className="popular-products">
				<div className="text-container">
					<p className="popular">Popular</p>
					<p className="see-all">See all</p>
				</div>
				<div className="product-grid">
					{popularProducts?.map((product) => (
						<ProductCard key={product.id} isMini={true} productName={product.title} productImg={product.image} />
					))}
				</div>
			</div>
		</div>
	);
};
export default HomePage;
