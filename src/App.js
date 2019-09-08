import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCurrentuser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import Header from './components/header/Header';
import SignInOut from './components/sign-in-out/Sign-in-out';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import checkoutPage from './pages/checkout/Checkout';
import './App.css';

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route exact path="/checkout" component={checkoutPage} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInOut />)}
        />
      </Switch>
    </div>
  );
};

// class App extends React.Component {
//   componentDidMount() {
//     const { checkUserSession } = this.props;
//     checkUserSession();
//   }

//   render() {
//     return (
//       <div>
//         <Header />
//         <Switch>
//           <Route exact path="/" component={Homepage} />
//           <Route path="/shop" component={Shop} />
//           <Route exact path="/checkout" component={checkoutPage} />
//           <Route
//             exact
//             path="/signin"
//             render={() =>
//               this.props.currentUser ? <Redirect to="/" /> : <SignInOut />
//             }
//           />
//         </Switch>
//       </div>
//     );
//   }
// }

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentuser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
