import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
// import { AsyncUserData } from '../../../auth/auth-data';
import { UsersData } from './dashboard-settings-tabs-data';

const DashboardContentStaffTab = ({ userData }) => {
	// const [isLoaded, setIsLoaded] = useState<boolean>(false);
	const router = useRouter();
	useEffect(() => {
		if (!router.isReady) return;

		// codes using router.query
		// setIsLoaded(true);
		console.log(router.query);
	}, [router.isReady]);

	// const [userData, setUserData] = useState<any>();

	if (!userData) {
		return <p>Loading user data...</p>;
	}

	return (
		// <AsyncUserData>
		// 	{(isLoading, userData, dataError) => {
		// 		if (userData) {

		<div className="space-y-4">
			<div className="w-full bg-secondary-bg rounded-lg">
				{/* <div>
					<p className="font-medium text-primary-text">Home Hero Title</p>
					<textarea className="bg-tertiary-bg border-none rounded-md bg-transparent w-full mt-2 placeholder-secondary-text">
					The Place For Professional Social Media Services
					</textarea>
					</div>
					<div className="mt-4">
					<p className="font-medium text-primary-text">Home Hero Description</p>
					<textarea className="bg-tertiary-bg border-none rounded-md bg-transparent w-full mt-2 placeholder-secondary-text" />
				</div> */}
				<ul>
					<UsersData>
						{({ isPending, data, error }) => {
							if (isPending) return 'Loading...';
							if (error)
								return 'Error loading staff accounts: ' + error.toString();
							if (data) {
								return data.map((staffUser) => {
									return (
										<li className="last:border-0 border-b-2 border-primary-border p-4 flex items-center justify-between">
											<div className="flex items-center space-x-4">
												<div
													className="w-9 h-9 bg-tertiary-bg rounded-full bg-cover"
													style={{
														backgroundImage: `url("https://cdn.discordapp.com/avatars/${staffUser.discord.id}/${staffUser.discord.avatar}.png")`,
													}}
												/>
												<p className="font-medium text-primary-text">
													{staffUser.discord.username}#
													{staffUser.discord.discriminator}
												</p>
											</div>
											<div>
												<div className="flex items-center space-x-8">
													{userData._id != staffUser._id && (
														<a
															className="space-x-2 text-primary-color"
															href={`/dashboard/settings/staff/delete?id=${staffUser._id}`}
														>
															<FontAwesomeIcon icon={faTrash} />
															<span>Remove</span>
														</a>
													)}
													{userData._id != staffUser._id && (
														<a
															className="space-x-2 text-secondary-text"
															href={`/dashboard/settings/staff/${staffUser._id}`}
														>
															<FontAwesomeIcon icon={faEdit} />
															<span>Edit</span>
														</a>
													)}

													{userData._id == staffUser._id && (
														<p className="space-x-2 text-secondary-text">
															YOUR ACCOUNT
														</p>
													)}
												</div>
											</div>
										</li>
									);
								});
							}
						}}
					</UsersData>
				</ul>
			</div>
		</div>
		// 		}
		// 	}}
		// </AsyncUserData>
	);
};

export { DashboardContentStaffTab };
