import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/header/Header';
import SignInOut from './components/sign-in-out/Sign-in-out';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import './App.css';

import { setCurrentUser } from './redux/user/user.actions';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data()
					});
				});
			}
			setCurrentUser(userAuth);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/shop" component={Shop} />
					<Route exact path="/signin" component={SignInOut} />
				</Switch>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
