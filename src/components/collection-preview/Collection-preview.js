import React from 'react';
import './Collection-preview.scss';
import CollectionItem from './../collection-item/Collection-item';

const CollectionPreview = ({ title, items }) => {
	console.log(items);
	return (
		<div className="collection-preview">
			<h1 className="title">{title.toUpperCase()}</h1>
			<div className="preview">
				{items
					.filter((item, idx) => idx < 4)
					.map(({ id, ...otherProps }) => <CollectionItem key={id} {...otherProps} />)}
			</div>
		</div>
	);
};

export default CollectionPreview;
