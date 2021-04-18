import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PromiseFn, useAsync } from 'react-async';
import { BackendApi } from '../../utils/backend-api';
import {
	faInstagram,
	faTiktok,
	faTwitch,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { capitalizeFirst } from '../../utils/general-utils';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
// import { default as faker } from 'faker';

const fetchAccounts: PromiseFn<any> = async ({ filters }) => {
	console.log('filters', filters);
	const accountsResponse = await BackendApi.getAccounts();
	const sellixCacheResponse = await BackendApi.getSellixProductCache();
	if (
		!accountsResponse ||
		!accountsResponse.data ||
		!sellixCacheResponse ||
		!sellixCacheResponse.data
	)
		throw new Error();
	return accountsResponse.data
		.map(
			(account) => {
				return account;
			}
			// sellixCacheResponse.data[index]
			// 	? {
			// 			...account,
			// 			sellixProductData: sellixCacheResponse.data.find(
			// 				(dataItem) => dataItem.id == account.sellixProductId
			// 			),
			// 	  }
			// 	: account
		)
		.filter((account) =>
			filters.platforms ? filters.platforms.includes(account.platform) : true
		);
};

const AccountsListItems = ({ filters, children }) => {
	useEffect(() => {
		console.log('accountslistitem', filters);
	}, [filters]);
	const state = useAsync({
		promiseFn: fetchAccounts,
		filters: filters,
	});
	return children(state);
};

const AccountsListApp = () => {
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

	const [filters, setFilters] = useState<{
		platforms: string[];
		// price: (price) => boolean;
		price: { min: number; max: number };
	}>({
		platforms: ['YOUTUBE', 'TWITCH', 'TIKTOK', 'OTHER'],
		price: { min: 0, max: Number.MAX_SAFE_INTEGER },
	});

	useEffect(() => {
		console.log('Filters log props change');
		// forceUpdate();
		setFilters(filters);
	}, [filters]);

	// const { data, error, isPending } = useAsync({
	// 	promiseFn: fetchAccounts,
	// 	filters: localFilters,
	// });

	return (
		<section className="px-6.25% lg:px-15% grid grid-cols-12 gap-6 pb-12">
			<AccountsListItems filters={filters}>
				{({ isPending, data, error }) => {
					if (isPending) return <p className="mt-6">Loading...</p>;

					if (error) return <p className="mt-6">Error loading accounts</p>;
					if (data) {
						console.log('raw async data', data);
						return (
							<>
								<div className="col-span-2 border-r-2 border-primary-border pt-6 hidden lg:block">
									<div className="">
										<h5>Filters</h5>
										<div className="mt-6">
											<p className="uppercase text-base">Platform</p>
											<ul className="mt-2 space-y-1">
												{['YOUTUBE', 'TWITCH', 'TIKTOK', 'OTHER'].map(
													(item, index) => {
														return (
															<li
																className="flex items-center space-x-2"
																key={index}
															>
																<input
																	type="checkbox"
																	id={'filter-platform-' + index}
																	className="bg-secondary-bg border-1 border-primary-border rounded-sm"
																	checked={filters.platforms.includes(
																		item.toUpperCase()
																	)}
																	onClick={() =>
																		setFilters((prevState) => {
																			return {
																				...prevState,
																				platforms: prevState.platforms.includes(
																					item
																				)
																					? prevState.platforms.filter(
																							(platform) => item != platform
																					  )
																					: prevState.platforms.concat(item),
																			};
																		})
																	}
																/>
																<label
																	htmlFor={'filter-platform-' + index}
																	className="select-none"
																>
																	{capitalizeFirst(item)}
																</label>
															</li>
														);
													}
												)}
											</ul>
										</div>
										<div className="mt-6">
											<p className="uppercase text-base">Price</p>
											<ul className="mt-2 space-y-1">
												{[
													// { name: 'Under $25', func: (price) => price < 25 },
													// { name: 'Under $50', func: (price) => price < 50 },
													// { name: 'Under $100', func: (price) => price < 100 },
													// { name: 'Under $250', func: (price) => price < 250 },
													// { name: 'Over $250', func: (price) => price < 250 },
													{ name: '$0 to $25', min: 0, max: 25 },
													{ name: '$25 to $50', min: 25, max: 50 },
													{ name: '$50 to $100', min: 50, max: 100 },
													{ name: '$100 to $250', min: 100, max: 250 },
													{
														name: '$250 and over',
														min: 250,
														max: Number.MAX_SAFE_INTEGER,
													},
												].map((item, index) => {
													return (
														<li
															className="flex items-center space-x-2"
															key={index}
														>
															<input
																type="radio"
																name="price"
																id={'filter-price-' + index}
																className="bg-secondary-bg border-1 border-primary-border"
																checked={
																	filters.price.min == item.min &&
																	filters.price.max == item.max
																}
																onClick={() => {
																	if (
																		filters.price.min == item.min &&
																		filters.price.max == item.max
																	) {
																		setFilters((prevState) => {
																			return {
																				...prevState,
																				// price: item.func,
																				price: {
																					min: 0,
																					max: Number.MAX_SAFE_INTEGER,
																				},
																			};
																		});
																		return;
																	}
																	setFilters((prevState) => {
																		return {
																			...prevState,
																			// price: item.func,
																			price: {
																				min: item.min,
																				max: item.max,
																			},
																		};
																	});
																}}
															/>
															<label
																htmlFor={'filter-price-' + index}
																className="select-none"
															>
																{capitalizeFirst(item.name)}
															</label>
														</li>
													);
												})}
											</ul>
										</div>
									</div>
								</div>
								<div className="pt-6 col-span-12 lg:col-span-10">
									<ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
										{!data.filter(
											(dataItem) =>
												filters.platforms.includes(dataItem.platform) &&
												dataItem.sellixProductData.price >= filters.price.min &&
												dataItem.sellixProductData.price <= filters.price.max
										).length && (
											<p className="text-center col-span-2">
												No accounts to display
											</p>
										)}
										{data
											.filter(
												(dataItem) =>
													filters.platforms.includes(dataItem.platform) &&
													dataItem.sellixProductData.price >=
														filters.price.min &&
													dataItem.sellixProductData.price <= filters.price.max
											)
											.map((account) => {
												const platformIcon =
													account.platform == 'YOUTUBE'
														? faYoutube
														: account.platform == 'INSTAGRAM'
														? faInstagram
														: account.platform == 'TIKTOK'
														? faTiktok
														: account.platform == 'TWITCH'
														? faTwitch
														: faQuestionCircle;
												console.log('ACCOUINT MAP', account);
												return (
													<li className="w-full bg-secondary-bg rounded-md flex flex-col">
														<div className="p-4 bg-tertiary-bg rounded-t-md">
															<div className="flex items-center justify-between">
																<div className="flex items-center space-x-4 overflow-hidden">
																	<div>
																		{account.sellixProductData.image?.url ? (
																			<div
																				className="w-14 h-14 bg-quartiary-bg rounded-full bg-cover"
																				style={{
																					backgroundImage: `url("${account.sellixProductData.image.url}")`,
																				}}
																			/>
																		) : (
																			<div className="w-14 h-14 bg-quartiary-bg rounded-full" />
																		)}
																	</div>
																	<div className="overflow-hidden">
																		<p className="text-primary-text font-medium leading-none pr-4 whitespace-nowrap truncate">
																			{account.sellixProductData.title ||
																				'No title'}
																		</p>
																		<p className="space-x-1 mt-3 leading-none text-base">
																			<FontAwesomeIcon icon={platformIcon} />
																			<span>
																				{capitalizeFirst(
																					account.platform || 'No platform'
																				)}
																			</span>
																			<span className=""> • </span>
																			<span>
																				{account.sellixProductData.stock != -1
																					? account.sellixProductData.stock
																					: '1'}{' '}
																				in stock
																			</span>
																		</p>
																	</div>
																</div>
															</div>
														</div>
														<div className="p-4 overflow-hidden flex-grow flex flex-col justify-between">
															{/* <p className="leading-normal truncate">
									Owner Transfer
									<br /> Non-Monetized Channel
									<br />
									https://www.youtube.com/channel/UCNMdfOSgAS6hTkvFNFPPvqg
								</p> */}
															<p className="leading-normal truncate text-base">
																{account.sellixProductData.description
																	? account.sellixProductData.description
																			.split('\n')
																			.map((x) => {
																				// var urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
																				var urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

																				if (urlRegex.test(x)) {
																					return (
																						<span>
																							{x.split(' ').map((word) => {
																								console.log(
																									'TESTING',
																									word,
																									urlRegex.test(x)
																								);
																								return urlRegex.test(x) ? (
																									<a
																										href={word}
																										className="text-primary-color"
																									>
																										{word}
																									</a>
																								) : (
																									word
																								);
																							})}
																							<br />
																						</span>
																					);
																				} else {
																					return <span>{x}</span>;
																				}
																			})
																	: 'No description'}
															</p>
															<p className="space-x-2 pt-4">
																{account.tags.filter(Boolean).map((tag) => {
																	return (
																		<span className="p-2 bg-primary-color bg-opacity-10 text-primary-color rounded-md text-base">
																			{tag}
																		</span>
																	);
																})}
															</p>
														</div>
														<div className="px-4">
															<hr />
														</div>
														<div className="p-4">
															<div className="flex items-center justify-between">
																{/* <Button
																	size={'small'}
																	onClick={() =>
																		window.open(
																			`https://shoppy.gg/payment/embed?embed=&product=${account.sellixProductId}`,
																			'_blank',
																			'width=500,height=650,'
																		)
																	}
																>
																	Buy now
																</Button> */}
																<button
																	data-sellix-product={account.sellixProductId}
																	className="py-2 px-4 text-base rounded-md w-fit text-primary-text font-bold flex items-center justify-center bg-primary-color"
																>
																	Buy Now
																</button>
																<h6 className="font-medium">
																	${account.sellixProductData.price}
																</h6>
															</div>
														</div>
													</li>
												);
											})}
									</ul>
								</div>
							</>
						);
					}
					return null;
				}}
			</AccountsListItems>
		</section>
	);
};

export { AccountsListApp, AccountsListItems };

// export const getStaticProps = async () => {
// 	return {
// 		props: {},
// 	};
// };
