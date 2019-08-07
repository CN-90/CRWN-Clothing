import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import SignInOut from './components/sign-in-out/Sign-in-out';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import './App.css';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			currentUser: null
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data()
						}
					});
				});
			}
			this.setState({
				currentUser: userAuth
			});
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/shop" component={Shop} />
					<Route exact path="/signin" component={SignInOut} />
				</Switch>
			</div>
		);
	}
}

export default App;
