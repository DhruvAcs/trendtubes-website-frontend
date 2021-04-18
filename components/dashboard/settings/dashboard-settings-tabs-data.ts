import { PromiseFn, useAsync } from 'react-async';
import { BackendApi } from '../../../utils/backend-api';

const fetchUsers: PromiseFn<any> = async () => {
	const usersResponse = await BackendApi.getUsers();
	console.log('usersResponse', usersResponse.data);
	if (!usersResponse || !usersResponse.data) throw new Error();
	return usersResponse.data;
};

const UsersData = ({ children }) => {
	const state = useAsync({ promiseFn: fetchUsers });
	return children(state);
};

export { UsersData };
