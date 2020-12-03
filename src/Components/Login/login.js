import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';


function login() {
/*	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');

	const login = (email, password) => {
		fire.sign;
	};*/

	return (
		<div
			className='login__body'
			style={{ width: '40%', margin: 'auto', marginTop: '15%' }}
		>
			<Form>
				<Form.Group controlId='formBasicEmail'>
					<Form.Label>Email address</Form.Label>
					<Form.Control type='email' placeholder='Enter email' />
					<Form.Text className='text-muted'>
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group controlId='formBasicPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control type='password' placeholder='Password' />
				</Form.Group>
				<Form.Group controlId='formBasicCheckbox'>
					<Form.Check type='checkbox' label='Check me out' />
				</Form.Group>
				<Button variant='primary' type='submit'>
					LOGIN
				</Button>
			</Form>
		</div>
	);
}

export default login;
