import React from 'react';
import CollectionsOverview from './../../components/collections-overview/Collections-overview';
import { Route } from 'react-router-dom';
import CollectionPage from './../collection/Collection';
import WithSpinner from './../../components/with-spinner/With-spinner';
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from './../../redux/shop/shop.actions';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPagewWithSpinner = WithSpinner(CollectionPage);

class Shop extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isCollectionFetching } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPagewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);
