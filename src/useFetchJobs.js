import axios from 'axios';
import { useEffect, useReducer } from 'React';

export default function useFetchJobs() {
	const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true });
}
