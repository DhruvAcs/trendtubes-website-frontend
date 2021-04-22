import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PromiseFn, useAsync } from 'react-async';
import { BackendApi } from '../../../utils/backend-api';
import {
	faTiktok,
	faTwitch,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { capitalizeFirst } from '../../../utils/general-utils';
import {
	faEdit,
	faInfoCircle,
	faTrash,
} from '@fortawesome/free-solid-svg-icons';
import tailwindConfig from '../../../tailwind.config';
// import { default as faker } from 'faker';

const fetchAccounts: PromiseFn<any> = async () => {
	const accountsResponse = await BackendApi.getAccounts();
	// const shoppyCacheResponse = await BackendApi.getShoppyProductCache();
	if (
		!accountsResponse ||
		!accountsResponse.data
		// !shoppyCacheResponse ||
		// !shoppyCacheResponse.data
	)
		throw new Error();
	// return accountsResponse.data.map((account, index) =>
	// 	shoppyCacheResponse.data[index]
	// 		? {
	// 				...account,
	// 				sellixProductData: shoppyCacheResponse.data.find(
	// 					(dataItem) => dataItem.id == account.shoppyProductId
	// 				),
	// 		  }
	// 		: account
	// );
	return accountsResponse.data;
};

const DashboardAccountsListItems = ({ children }) => {
	const state = useAsync({
		promiseFn: fetchAccounts,
	});
	return children(state);
};

const DashboardAccountsListApp = () => {
	useEffect(() => {
		// mainContentRef.current!.style.marginTop = `${
		// 	headerRef.current!.getBoundingClientRect().height
		// }px)`;
		// console.log('Filters log props change 2');
	}, []);

	// const [, updateState] = React.useState();
	// const forceUpdate = React.useCallback(
	// 	() => updateState(null as React.SetStateAction<any>),
	// 	[]
	// );

	// const { data, error, isPending } = useAsync({
	// 	promiseFn: fetchAccounts,
	// 	filters: localFilters,
	// });

	return (
		<DashboardAccountsListItems>
			{({ isPending, data, error }) => {
				if (isPending) return 'Loading...';
				if (error) return 'Error loading accounts';
				if (data) {
					console.log('data account data', data);
					return (
						<table className="table-fixed w-full">
							<thead>
								<tr className="text-left">
									<th className="w-3/12 p-4 border-b-2 border-primary-border">
										Title
									</th>
									<th className="w-2/12 p-4 pl-0 border-b-2 border-primary-border">
										Platform
									</th>
									<th className="w-1/12 p-4 pl-0 border-b-2 border-primary-border">
										Stock
									</th>
									<th className="w-3/12 p-4 pl-0 border-b-2 border-primary-border">
										Description
									</th>
									<th className="w-3/12 p-4 pl-0 border-b-2 border-primary-border">
										Price
									</th>
								</tr>
							</thead>
							<tbody>
								{data.map((account) => {
									var platformIcon =
										account.platform == 'YOUTUBE'
											? faYoutube
											: account.platform == 'TIKTOK'
											? faTiktok
											: account.platform == 'TWITCH'
											? faTwitch
											: faInfoCircle;
									var platformColor =
										account.platform == 'YOUTUBE'
											? '#FF0000'
											: account.platform == 'TIKTOK'
											? '#FE2C55'
											: account.platform == 'TWITCH'
											? '#9147FF'
											: tailwindConfig.theme.extend.colors['secondary-text'];
									return (
										<tr className="text-primary-text border-b-2 border-primary-border last:border-b-0">
											<td className="py-4 pl-4 pr-4">
												<div className="flex items-center space-x-3 overflow-hidden">
													{/* {account.sellixProductData.image_name &&
													account.sellixProductData.image_storage ? (
														<div
															className="w-9 h-9 bg-tertiary-bg rounded-full bg-cover"
															style={{
																backgroundImage: `url("https://cdn.sellix.io/static/images/${account.sellixProductData.image_storage.toLowerCase()}/${
																	account.sellixProductData.image_name
																}")`,
															}}
														/>
													) : (
														<div className="w-9 h-9 bg-tertiary-bg rounded-full" />
													)} */}
													<div className="w-9 h-9 bg-quartiary-bg rounded-full flex items-center justify-center text-primary-color">
														<FontAwesomeIcon
															icon={platformIcon}
															style={{ fontSize: '20px' }}
														/>
													</div>
													<p className="whitespace-nowrap truncate">
														{account.sellixProductData.title || 'No title'}
													</p>
												</div>
											</td>
											<td
												className="py-4 space-x-2 flex items-center"
												style={{ color: platformColor }}
											>
												<FontAwesomeIcon icon={platformIcon} />
												<p>{capitalizeFirst(account.platform)}</p>
											</td>
											<td className="py-4 pr-4 truncate">
												{(account.sellixProductData.stock || 0) !=
												9223372036854776000
													? account.sellixProductData.stock
													: 'Unlimited'}
											</td>
											<td className="py-4 pr-4 overflow-hidden">
												<div className="truncate">
													{account.sellixProductData.description ||
														'No description'}
												</div>
											</td>
											<td className="py-4 pr-4 relative">
												<div>${account.sellixProductData.price}</div>
												<div className="absolute h-full flex items-center right-4 top-0 bottom-0 space-x-6">
													<a
														className="flex items-center space-x-2 text-primary-color"
														href={`/dashboard/accounts/delete?id=${account._id}`}
													>
														<FontAwesomeIcon icon={faTrash} />
														<p>Delete</p>
													</a>
													<a
														href={`/dashboard/accounts/${account.sellixProductId}`}
														className="flex items-center space-x-2 text-secondary-text"
													>
														<FontAwesomeIcon icon={faEdit} />
														<p>Edit</p>
													</a>
												</div>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					);
				}
				return null;
			}}
		</DashboardAccountsListItems>
	);
};

export { DashboardAccountsListApp, DashboardAccountsListItems };

// export const getStaticProps = async () => {
// 	return {
// 		props: {},
// 	};
// };
