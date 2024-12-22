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
			<div className="corousel-container">
				<ProductCard productName="Ichiban Electric 2032" productPrice="34000000" urlRedirection />
			</div>

			<div className="popular-products">
				<div className="text-container">
					<p className="popular">Popular</p>
					<p className="see-all">See all</p>
				</div>
				<div className="product-grid">
					<ProductCard isMini={true} productName="CXTR" />
					<ProductCard isMini={true} productName="MBWS" />
					<ProductCard isMini={true} productName="Jaguar" />
					{/* Añade más tarjetas de producto */}
				</div>
			</div>
		</div>
	);
};
export default HomePage;
