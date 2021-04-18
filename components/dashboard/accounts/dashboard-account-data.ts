import { PromiseFn, useAsync } from 'react-async';
import { BackendApi } from '../../../utils/backend-api';

const fetchAccount: PromiseFn<any> = async ({ id }) => {
	console.log(';accountproidata 2', id);
	const accountResponse = await BackendApi.getAccount(id);
	if (!accountResponse || !accountResponse.data) throw new Error();
	return accountResponse.data;
};

const AccountProductData = ({ children, id }) => {
	console.log(';accountproidata 1', id);
	const state = useAsync({ promiseFn: fetchAccount, id });
	return children(state);
};

export { AccountProductData };
