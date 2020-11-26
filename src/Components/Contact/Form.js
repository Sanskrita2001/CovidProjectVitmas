import React, { useState } from 'react';
import FormSend from './FormSend';
import FormSuccess from './FormSuccess';
import './Form.css';
import Homepage from '../layouts/Homepage';

const Form = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);

	function submitForm() {
		setIsSubmitted(true);
	}
	return (
		<>
			<div className='form-container'>
				<span className='close-btn' onClick=''>
					×
				</span>
				<div className='form-content-left'>
					<img className='form-img' src='img/covid.jpg' alt='spaceship' />
				</div>
				{!isSubmitted ? <FormSend submitForm={submitForm} /> : <FormSuccess />}
			</div>
		</>
	);
};

export default Form;
