import axios from 'axios';

const API_PREURL = 'https://api.trendtubes.com';
// const API_PREURL = 'http://localhost:3005';
axios.defaults.withCredentials = true;
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const BackendApi = {
	getSellixProductCache: () => {
		return axios.get(API_PREURL + '/sellix/cache/products');
	},
	getAccounts: () => {
		return axios.get(API_PREURL + '/accounts');
	},
	getAccount: (id) => {
		return axios.get(API_PREURL + '/accounts/' + id);
	},
	createAccount: (body) => {
		return axios.post(API_PREURL + '/accounts', body);
	},
	editAccount: (id, body) => {
		return axios.post(API_PREURL + '/accounts/' + id, body);
	},
	deleteAccount: (id) => {
		return axios.delete(API_PREURL + '/accounts/' + id);
	},
	getServices: () => {
		return axios.get(API_PREURL + '/services');
	},
	getService: (id) => {
		return axios.get(API_PREURL + '/services/' + id);
	},
	createService: (body) => {
		return axios.post(API_PREURL + '/services', body);
	},
	editService: (id, body) => {
		// {
		// 	// headers: {
		// 	// 	// 'Access-Control-Allow-Origin': '*',
		// 	// 	// 'Content-Type': 'application/x-www-form-urlencoded',
		// 	// },
		// 	// headers: {
		// 	// 	Accept: 'application/json',
		// 	// 	'Content-Type': 'application/json',
		// 	// },
		// }

		{
			// headers: {
			// 	'Content-Type': 'application/x-www-form-urlencoded',
			// 	Accept: 'text/json',
			// },
			// headers: {
			// 	'Content-Type': 'application/x-www-form-urlencoded',
			// },
			// crossdomain: true,
		}
		return axios.post(API_PREURL + '/services/' + id, body);
	},
	deleteService: (id) => {
		return axios.delete(API_PREURL + '/services/' + id);
	},
	getCMSPath: (path) => {
		console.log('getcmspath', path);
		return axios.get(API_PREURL + '/cms/', { params: { path: path } });
	},
	editCMSPath: (path, subPathData) => {
		return axios.post(API_PREURL + '/cms/?path=' + path, {
			// params: { path: path },
			subPaths: subPathData,
		});
	},
	getUsers: () => {
		return axios.get(API_PREURL + '/users/');
	},
	getUser: (id) => {
		return axios.get(API_PREURL + '/users/' + id);
	},
	editUser: (id, data) => {
		return axios.post(API_PREURL + '/users/' + id, data);
	},
	deleteUser: (id) => {
		return axios.delete(API_PREURL + '/users/' + id);
	},
	generateAuthCode: () => {
		// return axios.get(API_PREURL + '/auth/generate-code', {
		// 	headers: {
		// 		cookie: cookie,
		// 	},
		// });
		return axios.get(API_PREURL + '/auth/generate-code');
	},
	getAuthInfo: () => {
		// return axios.get(API_PREURL + '/auth/info', {
		// 	headers: {
		// 		cookie: cookie,
		// 	},
		// });
		return axios.get(API_PREURL + '/auth/info');
	},
	authLogout: () => {
		// var cookie = ctx.req.headers.cookie || '';
		// removeCookies(ctx, 'trendtubes.session');
		return axios.get(API_PREURL + '/auth/logout');
	},
	isAuthenticated: () => {
		return true;
	},
	addAuthAccess(discord) {
		return axios.post(API_PREURL + '/auth/access', {
			username: discord.trim().split('#')[0],
			discriminator: discord.trim().split('#')[1],
		});
	},
};

export { BackendApi };
