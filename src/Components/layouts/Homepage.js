import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './Homepage.css';
const Homepage = () => {
	return (
		<div className='home'>
			<div className='home__bg'>
				<h1 className='bg__text' style={{ fontFamily: 'Rubik,sans-serif' }}>
					<span className='d-block'>WANT TO GET</span>
					<span className='d-block'>A TRACK OF</span>
					<span className='d-block' style={{ color: '#5a03fc' }}>
						COVID?
					</span>
				</h1>
				<Button
					className='bg__btn'
					style={{ fontFamily: 'Rubik,sans-serif ', background: '#5a03fc' }}
				>
					DIVE IN...
				</Button>
			</div>
		</div>
	);
};

export default Homepage;
