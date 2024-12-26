import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from '../../../../shared/presentation/components/Navbar';
import CategoryList from '../components/CategoryList';
import ProductCard from '../../../../shared/presentation/components/ProductCard';
import './HomePage.scss';
import { productDetailPageRoute } from '../../../productDetail/infrastructure/routing/routes';
import { getProducts } from '../../application/slices/products';

const arrayProducts = [
	{
		id: 'f65daf7c-d6d7-4b7d-9524-fac8f8894836',
		title: 'ICHIBAN Electric 2032',
		image: 'https://ride-on-store.s3.us-east-2.amazonaws.com/ichiban.png',
		price: '3400000',
		description:
			"Ichiban isn't simply a mode of transport; it's an escape, a liberating streak of freedom in an excessively interconnected world.",
		stock: 10,
		created_at: '2024-12-24T20:39:49.521Z',
	},
	{
		id: 'bad36df1-c0f6-41a6-b727-159eff3196b0',
		title: 'CXTBR',
		image: 'https://ride-on-store.s3.us-east-2.amazonaws.com/cxbtr.png',
		price: '4800000',
		description: 'High-performance motorcycle for thrill-seekers and speed enthusiasts.',
		stock: 10,
		created_at: '2024-12-24T20:39:49.521Z',
	},
	{
		id: '64af4404-aa26-4214-8329-65db8a4c3481',
		title: 'MBWS',
		image: 'https://ride-on-store.s3.us-east-2.amazonaws.com/mbws.png',
		price: '2200000',
		description: 'Reliable and versatile motorcycle, perfect for both urban and off-road adventures.',
		stock: 10,
		created_at: '2024-12-24T20:39:49.521Z',
	},
	{
		id: '53089811-1514-4510-bd6d-2ab91e7fb42a',
		title: 'Jaguar',
		image: 'https://ride-on-store.s3.us-east-2.amazonaws.com/jaguar.png',
		price: '2800000',
		description: 'A classic motorcycle with modern enhancements for an unmatched riding experience.',
		stock: 10,
		created_at: '2024-12-24T20:39:49.521Z',
	},
];

const HomePage = () => {
	const dispatch = useDispatch();
	// const arrayProducts = useSelector(getProductsSelector);
	const firstProduct = arrayProducts[0];
	const popularProducts = arrayProducts.slice(1); // Excluye el primer elemento

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
					productName={firstProduct.title}
					productPrice={firstProduct.price}
					productImg={firstProduct.image}
					urlRedirection={productDetailPageRoute(firstProduct.id)}
				/>
			</div>

			<div className="popular-products">
				<div className="text-container">
					<p className="popular">Popular</p>
					<p className="see-all">See all</p>
				</div>
				<div className="product-grid">
					{popularProducts.map((product) => (
						<ProductCard key={product.id} isMini={true} productName={product.title} productImg={product.image} />
					))}
				</div>
			</div>
		</div>
	);
};
export default HomePage;
