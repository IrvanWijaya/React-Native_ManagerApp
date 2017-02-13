import React,{Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers'
import Router from './Router';

class App extends Component{
	componentWillMount(){
		const config = {
		    apiKey: 'AIzaSyAONUw-Q3TrU1xwfBZRmz-Aw-DlbbhTBTc',
		    authDomain: 'manager-b359c.firebaseapp.com',
		    databaseURL: 'https://manager-b359c.firebaseio.com',
		    storageBucket: 'manager-b359c.appspot.com',
		    messagingSenderId: "284242049818"
		 };

		 firebase.initializeApp(config);
	}

	render(){
		const store = createStore(reducers,{},applyMiddleware(ReduxThunk));
		return(
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;