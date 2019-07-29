import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import SignInOut from './components/sign-in-out/Sign-in-out';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import './App.css';

function App() {
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

export default App;
