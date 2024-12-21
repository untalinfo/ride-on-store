import React from 'react';

const CategoryList = () => {
	return (
		<div className="category-list">
			<h2>Categories</h2>
			<div className="category-grid">
				<div className="category-card">
					<img src="https://via.placeholder.com/150" alt="Category" />
					<p>Category</p>
				</div>
				{/* Add more category cards */}
			</div>
		</div>
	);
};

export default CategoryList;
