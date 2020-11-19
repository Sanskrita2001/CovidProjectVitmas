import React from "react";
import "../card-styles.css"

function OR({ value }) {
	const rate = Math.floor((value.recovered / value.confirmed) * 100);
	return (
		<div className='card text-center shadow mb-5'>
			<div className='card-body '>
				<h4 className='card-title '>{value.district}</h4>
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
						<p>Deaths: {value.deceased}</p>
					</div>
					<div className='col-12 text-success'>
						<p>Recovery Rate: {rate}%</p>
					</div>
				</div>
				{/* <a href='#' className='btn btn-outline-info text-center'>
					More Details
				</a> */}
			</div>
		</div>
	);
}

export default OR
