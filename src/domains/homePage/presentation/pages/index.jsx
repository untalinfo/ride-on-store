import React from 'react';
import Navbar from '../../../../shared/presentation/components/Navbar';
import CategoryList from '../components/CategoryList';
import ProductCard from '../../../../shared/presentation/components/ProductCard';
import './HomePage.scss';

const HomePage = () => {
	return (
		<div className="home-page-container">
			<Navbar />
			<section className="hero-container">
				<h3>Explore</h3>
				<p className="hero-description">The best & favorite motorcycle</p>
			</section>
			<CategoryList />
			<div className="popular-products">
				<div className="text-container">
					<h2>Popular</h2>
					<p className="see-all">See all</p>
				</div>
				<div className="product-grid">
					<ProductCard name="Ichiban Electric 2032" price="34,000,000" />
					<ProductCard name="Ichiban Electric 2032" price="34,000,000" />
					<ProductCard name="Ichiban Electric 2032" price="34,000,000" />
					{/* Añade más tarjetas de producto */}
				</div>
			</div>
		</div>
	);
};
export default HomePage;
