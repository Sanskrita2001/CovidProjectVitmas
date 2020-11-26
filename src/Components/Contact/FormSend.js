import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

function FormSend({ submitForm }) {
	const [validated, setValidated] = useState(false);
	const [isSubmitting, setisSubmitting] = useState(false);

	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		} else {
			submitForm();
		}

		setValidated(true);
		setisSubmitting(true);
	};

	return (
		<div className='form-content-right'>
			<Form
				className='form'
				noValidate
				validated={validated}
				onSubmit={handleSubmit}
			>
				<Form.Group controlId='formName'>
					<Form.Label className='form-label'>Name</Form.Label>
					<Form.Control
						required
						type='text'
						placeholder='First name'
						defaultValue='Mark'
					/>
					<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
				</Form.Group>
				<Form.Group controlId='formBasicEmail'>
					<Form.Label>Email address</Form.Label>
					<Form.Control type='email' placeholder='Enter email' required />
					<Form.Text className='text-muted'>
						We'll never share your email with anyone else.
					</Form.Text>
					<Form.Control.Feedback type='invalid'>
						Please enter your email.
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlTextarea1'>
					<Form.Label>Send Feedback</Form.Label>
					<Form.Control as='textarea' rows={3} required />
					<Form.Control.Feedback type='invalid'>
						Please provide a message.
					</Form.Control.Feedback>
				</Form.Group>
				<Button variant='success' type='submit'>
					Submit
				</Button>
			</Form>
		</div>
	);
}

export default FormSend;
