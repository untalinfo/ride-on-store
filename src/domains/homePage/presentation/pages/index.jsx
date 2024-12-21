import React from 'react';
import Navbar from '../../../../shared/presentation/components/Navbar';
import CategoryList from '../components/CategoryList';
import ProductCard from '../../../../shared/presentation/components/ProductCard';

const HomePage = () => {
	return (
		<div className="home">
			<Navbar />
			<CategoryList />
			<div className="popular-products">
				<h2>Popular</h2>
				<div className="product-grid">
					<ProductCard name="Ichiban Electric 2032" price="34,000,000" />
					{/* Añade más tarjetas de producto */}
				</div>
			</div>
		</div>
	);
};
export default HomePage;
