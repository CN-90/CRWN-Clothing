import React from 'react';
import './Menu-item.scss';

const MenuItem = ({ title, subtitle, imageUrl, size }) => {
	return (
		<div className={`${size} menu-item`}>
			<div style={{ backgroundImage: `url(${imageUrl})` }} className="background-image" />
			<div className="content">
				<h1 className="title">{title.toUpperCase()}</h1>
				<span className="subtitle">Shop Now</span>
			</div>
		</div>
	);
};

export default MenuItem;
