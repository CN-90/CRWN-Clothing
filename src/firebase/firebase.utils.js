import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyCnatkJ_-gCuW9yZF31ZFXkdnYAF6aEalE',
	authDomain: 'crwn-db-72513.firebaseapp.com',
	databaseURL: 'https://crwn-db-72513.firebaseio.com',
	projectId: 'crwn-db-72513',
	storageBucket: '',
	messagingSenderId: '455598155803',
	appId: '1:455598155803:web:eeaa4a44ed9ccd05'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
