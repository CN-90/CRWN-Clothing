import React from 'react';
import CollectionsOverview from './../../components/collections-overview/Collections-overview';
import { Route } from 'react-router-dom';
import CollectionPage from './../collection/Collection';

const Shop = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route
      exact
      path={`${match.path}/:collectionId`}
      component={CollectionPage}
    />
  </div>
);

export default Shop;
