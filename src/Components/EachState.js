import React from 'react';
import './card-style.css';
const EachState = ({ states }) => {
	return (
		<>
			{states.map((state) => (
				<div className='card text-center shadow'>
					<div className='card-body bg-dark text-light'>
						<h4 className='card-title'>{state}</h4>
						<a href='#' className='btn btn-outline-success text-center'>
							More Details
						</a>
					</div>
				</div>
			))}
		</>
	);
};
export default EachState;
