import React, { useState } from 'react';
import Main from './Main';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './Components/layouts/Homepage';
import Nav_bar from './Components/layouts/Nav_bar';
import Map from './Components/map/Map';

const App = () => {
	const [details, setDetails] = useState([]);
	return (
		<div>
			<BrowserRouter>
				<Nav_bar />
				<Switch>
					<Route exact path='/'>
						<HomePage />
					</Route>
					<Main details={details} />
				</Switch>
			</BrowserRouter>
			<Map details={details} />
		</div>
	);
};

export default App;
