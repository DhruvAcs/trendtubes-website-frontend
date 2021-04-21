import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from '../components/button';
import { BackendApi } from '../utils/backend-api';

const AuthDataWrapper = ({
	user,
	permissions,
	children,
}: {
	user: any;
	permissions?: string[];
	children: any;
}) => {
	console.log('AUTH DATA WRAPPER', user);
	if (user && Object.keys(user).length && user._id) {
		if (
			permissions &&
			(!user.permissions ||
				!permissions.every((perm) => user.permissions.includes(perm)))
		) {
			return (
				<main className="">
					<div className="h-screen flex flex-col items-center justify-center">
						<div className="p-6 bg-secondary-bg rounded-md flex flex-col items-center">
							<p>You do not have the proper permissions to view this page.</p>
						</div>
					</div>
				</main>
			);
		}
		return children;
	} else {
		return (
			<main className="">
				<div className="h-screen flex flex-col items-center justify-center">
					<div className="p-6 bg-secondary-bg rounded-md flex flex-col items-center">
						<p>You are not authenticated. Access denied.</p>
						<Button
							className="space-x-2 flex items-center mt-4"
							href="https://api.trendtubes.com/auth"
						>
							<FontAwesomeIcon icon={faDiscord} />
							<span>Login via Discord</span>
						</Button>
					</div>
				</div>
			</main>
		);
	}
};

const authDataCtx = async (ctx: any) => {
	var user = null;
	console.log('COOKIE CTX', ctx.req.headers.cookie);
	var cookie = ctx?.req?.headers?.cookie;
	try {
		const authInfoResponse = await BackendApi
			.getAuthInfo
			// ctx?.req?.headers?.cookie || ''
			()
			.catch(() => {
				return { data: {} };
			});
		if (authInfoResponse && authInfoResponse.data) {
			user = authInfoResponse?.data;
		}
	} catch (e) {}
	return { user, cookie };
};

export { AuthDataWrapper, authDataCtx };
