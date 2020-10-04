import React, { useState } from 'react';
import './App.css';
import useFetchJobs from './useFetchJobs';

import { Container, Spinner, Alert } from 'react-bootstrap';
import Job from './Job';
import JobsPagination from './JobsPagination';
import SearchForm from './SearchForm';

function App() {
	const [params, setParams] = useState({});
	const [page, setPage] = useState(1);
	const [inputFocusIn, setInputFocusIn] = useState(false);
	const { loading, error, jobs, hasNextPage } = useFetchJobs(params, page);

	function handleParamChange(e) {
		const param = e.target.name;
		const value = e.target.value;

		setPage(1);
		setParams((prevParams) => {
			return { ...prevParams, [param]: value };
		});
	}

	return (
		<Container className='my-4'>
			<h1 className='mb-4'>Github Jobs Finder</h1>
			<SearchForm params={params} onParamChange={handleParamChange} inputFocusIn={setInputFocusIn} />
			<JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />

			{loading && !inputFocusIn && (
				<div className='overlay'>
					<Spinner animation='border' variant='success' />
				</div>
			)}
			{error && <h1>Error! To Many Request :-( Try Letter</h1>}
			{jobs.length === 0 ? (
				<Alert variant='danger'>Ops! No jobs found. Please Try again!</Alert>
			) : (
				jobs.map((job) => <Job key={job.id} job={job} />)
			)}
			<JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
		</Container>
	);
}

export default App;
