import React from 'react';
import SignIn from './../sign-in/Sign-in';
import './Sign-in-out.scss';
import Signup from '../sign-up/Sign-up';

import './Sign-in-out.scss';

const SignInOut = () => (
	<div className="sign-in-and-sign-up">
		<SignIn />
		<Signup />
	</div>
);

export default SignInOut;
