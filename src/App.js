import React, { useState } from 'react';
import Main from './Main';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './Components/layouts/Homepage';
import Nav_bar from './Components/layouts/Nav_bar';
import Beds from './Components/Hospital/Beds';
import Form from './Components/Contact/Form';

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Nav_bar />
				<Switch>
					<Route exact path='/'>
						<HomePage />
					</Route>
					<Route exact path='/hospitals'>
						<Beds />
					</Route>
					<Route exact path='/contact'>
						<Form />
					</Route>
					<Main />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
