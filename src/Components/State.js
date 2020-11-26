import React from 'react';
import './card-style.css';
import { Link } from 'react-router-dom';

function State({ value }) {
	const rate = Math.floor((value.recovered / value.confirmed) * 100);
	return (
		<div className='card text-center shadow mt-5'>
			<div className='card-body '>
				<h4 className='card-title '>{value.state}</h4>
				<div className='card-main row'>
					<div className='col-12  text-primary'>
						<p>Active Cases: {value.active}</p>
					</div>
					<div className='col-12 text-warning'>
						<p>Confirmed Cases: {value.confirmed}</p>
					</div>
					<div className='col-12  text-success'>
						<p>Recovered Cases: {value.recovered}</p>
					</div>
					<div className='col-12 text-danger'>
						<p>Deaths: {value.deaths}</p>
					</div>
					<div className='col-12 text-success'>
						<p>Recovery Rate: {rate}%</p>
					</div>
				</div>
				<Link
					to={`/states/${value.id}`}
					className='btn btn-outline-info text-center'
				>
					More Details
				</Link>
			</div>
		</div>
	);
}

export default State;
