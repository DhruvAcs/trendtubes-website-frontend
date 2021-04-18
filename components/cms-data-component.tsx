import { PromiseFn, useAsync } from 'react-async';
import { BackendApi } from '../utils/backend-api';

const fetchCMS: PromiseFn<any> = async ({ path }) => {
	console.log('fetchCMS', path);
	const cmsResponse = await BackendApi.getCMSPath(path);
	if (!cmsResponse || !cmsResponse.data) throw new Error();
	return cmsResponse.data;
};

const AsyncCMSData = ({ children, path }) => {
	// console.log('CMS fetch path', path);
	const state = useAsync({ promiseFn: fetchCMS, path });
	return children(state);
};

export { AsyncCMSData };
