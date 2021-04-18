import { PromiseFn, useAsync } from 'react-async';
import { BackendApi } from '../../../utils/backend-api';

const fetchStaffUser: PromiseFn<any> = async ({ id }) => {
	console.log(';servicedata 2', id);
	const accountResponse = await BackendApi.getUser(id);
	console.log('accresponse', accountResponse);
	if (!accountResponse || !accountResponse.data) throw new Error();
	return accountResponse.data;
};

const StaffUserData = ({ children, id }) => {
	const state = useAsync({ promiseFn: fetchStaffUser, id });
	return children(state);
};

export { StaffUserData };
