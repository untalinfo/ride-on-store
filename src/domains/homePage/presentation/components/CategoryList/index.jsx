import React, { useState } from 'react';
import { CATEGORIES } from '../../../application/constants/categories';
import './CategoryList.scss';

const CategoryList = () => {
	const [categorySelected, setCategorySelected] = useState(1);

	const onCategoryClick = (id) => {
		setCategorySelected(id);
	};
	return (
		<div className="category-list" data-testid="category-list">
			{CATEGORIES.map((category) => (
				<div key={category.id} className="category-item" onClick={() => onCategoryClick(category.id)}>
					<p className={`category-name ${categorySelected === category.id ? 'selected' : ''} `}>{category.name}</p>
				</div>
			))}
		</div>
	);
};

export default CategoryList;
