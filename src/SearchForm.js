import React, { useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';

export default function SearchForm({ params, onParamChange, inputFocusIn }) {
	return (
		<Form className='mb-4'>
			<Form.Row className='align-items-end'>
				<Form.Group as={Col}>
					<Form.Label>Description</Form.Label>
					<Form.Control
						onChange={onParamChange}
						type='text'
						name='description'
						placeholder='Enter Job Description'
						value={params.description || ''}
						onFocusCapture={() => inputFocusIn(true)}
					/>
				</Form.Group>
				<Form.Group as={Col}>
					<Form.Label>Location</Form.Label>
					<Form.Control
						type='text'
						onChange={onParamChange}
						name='location'
						value={params.location || ''}
						onFocusCapture={() => inputFocusIn(true)}
					/>
				</Form.Group>
				<Form.Group as={Col} xs='auto' className='ml-2'>
					<Form.Check
						onChange={onParamChange}
						value={params.full_time || ''}
						name='full_time'
						id='full_time'
						label='Only Full TIme'
						type='checkbox'
						className='mb-2'
						placeholder='Enter Location Name'
					/>
				</Form.Group>
			</Form.Row>
		</Form>
	);
}
