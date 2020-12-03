import React, { useState } from 'react';
import Main from './Main';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './Components/layouts/Homepage';
import Nav_bar from './Components/layouts/Nav_bar';
import Beds from './Components/Hospital/Beds';
import Form from './Components/Contact/Form';
import About from './Components/About Us/About';
import Login from './Components/Login/login';

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Nav_bar />
				<Switch>
					<Route exact path='/'>
						<HomePage />
					</Route>
					<Route exact path='/about'>
						<About />
					</Route>
					<Route exact path='/hospitals'>
						<Beds />
					</Route>
					<Route exact path='/contact'>
						<Form />
					</Route>
					<Route exact path='/login'>
						<Login />
					</Route>
					<Main />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
