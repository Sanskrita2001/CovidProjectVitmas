import React from 'react';
import './card-style.css';
import State from './State';

const States = ({ details }) => {
	return (
		<div style={userStyle}>
			{details.map((value, index) => {
				return <State key={index} value={value} />;
			})}
		</div>
	);
};
const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '0rem',
};
export default States;
