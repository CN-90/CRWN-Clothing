import React from 'react';
import { withRouter } from 'react-router-dom';
import './Menu-item.scss';

const MenuItem = ({ title, linkUrl, imageUrl, size, history, match }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="background-image"
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
