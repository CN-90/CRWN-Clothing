import React, { Component } from 'react';
import FormInput from './../form-input/Form-input';
import CustomButton from './../custom-button/Custom-button';
import { signInWithGoogle, auth } from './../../firebase/firebase.utils';
import './Sign-in.scss';

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}

	handleSubmit = async (event) => {
		event.preventDefault();
		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', password: '' });
		} catch (err) {
			console.log(err);
		}
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	render() {
		return (
			<div className="sign-in">
				<h2 className="title">I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						handleChange={this.handleChange}
						type="email"
						name="email"
						value={this.state.email}
						label="email"
						required
					/>
					<FormInput
						handleChange={this.handleChange}
						type="password"
						name="password"
						label="password"
						value={this.state.password}
						required
					/>

					<div className="buttons">
						<CustomButton type="submit">Sign In</CustomButton>
						<CustomButton isGoogleSignIn onClick={signInWithGoogle}>
							Sign In With Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
