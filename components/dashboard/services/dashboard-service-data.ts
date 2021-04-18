import { PromiseFn, useAsync } from 'react-async';
import { BackendApi } from '../../../utils/backend-api';

const fetchService: PromiseFn<any> = async ({ id }) => {
	console.log(';servicedata 2', id);
	const accountResponse = await BackendApi.getService(id);
	if (!accountResponse || !accountResponse.data) throw new Error();
	return accountResponse.data;
};

const ServiceProductData = ({ children, id }) => {
	const state = useAsync({ promiseFn: fetchService, id });
	return children(state);
};

export { ServiceProductData };
