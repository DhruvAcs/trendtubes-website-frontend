import Head from 'next/head';
import React, { createRef, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../button';
import { PromiseFn, useAsync } from 'react-async';
import { BackendApi } from '../../utils/backend-api';
import {
	faInstagram,
	faTiktok,
	faTwitch,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { capitalizeFirst } from '../../utils/general-utils';
import {
	faInfoCircle,
	faQuestion,
	faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';
import { AxiosResponse } from 'axios';
// import { default as faker } from 'faker';

const fetchServices: PromiseFn<any> = async () => {
	const serviceResponse = await BackendApi.getServices();

	if (!serviceResponse || !serviceResponse.data) throw new Error();
	return serviceResponse.data;
};

const ServicesListItems = ({ children }) => {
	const state = useAsync({
		promiseFn: fetchServices,
	});
	return children(state);
};

const ServicesListApp = () => {
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
		categories: string[];
		// price: (price) => boolean;
	}>({
		categories: [],
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
			<ServicesListItems>
				{({ isPending, data, error }) => {
					if (isPending) return <p className="mt-6">Loading...</p>;

					if (error) return <p className="mt-6">Error loading services</p>;
					if (data) {
						setFilters((prevState) => {
							return {
								...prevState,
								categories: [
									...new Set(
										data
											.map((service) => service.category || 'Other')
											.filter(Boolean)
									),
								] as string[],
							};
						});
						return (
							<>
								<div className="col-span-2 border-r-2 border-primary-border py-6">
									<div className="">
										<h5>Filters</h5>
										<div className="mt-6">
											<p className="uppercase text-base">Category</p>
											<ul className="mt-2 space-y-1">
												{([
													...new Set(
														data
															.map((service) => service.category || 'Other')
															.filter(Boolean)
													),
												] as string[])
													.sort()
													.sort((a, b) => {
														if (a == 'Other') {
															return 1;
														}
														return -1;
													})
													.map((item, index) => {
														console.log('category', item);
														return (
															<li
																className="flex items-center space-x-2"
																key={index}
															>
																<input
																	type="checkbox"
																	id={'filter-platform-' + index}
																	className="bg-secondary-bg border-1 border-primary-border rounded-sm"
																	checked={filters.categories.includes(item)}
																	onClick={() =>
																		setFilters((prevState) => {
																			return {
																				...prevState,
																				categories: prevState.categories.includes(
																					item
																				)
																					? prevState.categories.filter(
																							(category) => item != category
																					  )
																					: prevState.categories.concat(item),
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
													})}
											</ul>
										</div>
									</div>
								</div>
								<div className="col-span-10 pt-6">
									{!([
										...new Set(
											data
												.map((service) => service.category || 'Other')
												.filter(Boolean)
												.filter((cat) => filters.categories.includes(cat))
										),
									] as string[])
										.sort()
										.sort((a, b) => {
											if (a == 'Other') {
												return 1;
											}
											return -1;
										}).length && (
										<p className="text-center col-span-2">
											No services to display
										</p>
									)}
									{([
										...new Set(
											data
												.map((service) => service.category || 'Other')
												.filter(Boolean)
												.filter((cat) => filters.categories.includes(cat))
										),
									] as string[])
										.sort()
										.sort((a, b) => {
											if (a == 'Other') {
												return 1;
											}
											return -1;
										})
										.map((category, index) => {
											return (
												<>
													<div className="pb-2 border-b-2 border-primary-border">
														<p className="uppercase text-base">{category}</p>
													</div>
													<ul className="grid grid-cols-4 gap-4 pb-6 mt-4">
														{data
															.filter(
																(dataItem) =>
																	(dataItem.category || 'Other') == category
															)
															.map((service, index) => {
																return (
																	<li
																		className="w-full bg-secondary-bg rounded-md flex flex-col"
																		key={index}
																	>
																		<div
																			className="w-full bg-tertiary-bg rounded-t-md bg-cover"
																			style={{
																				paddingTop: '100%',
																				backgroundImage: `url(${service.imageUrl})`,
																			}}
																		></div>
																		<div className="p-4">
																			<p className="font-medium text-lg text-primary-text">
																				{service.title || ''}
																			</p>
																			<p className="text-base mt-2">
																				{service.description || ''}
																			</p>
																		</div>
																		<div className="p-4 pt-2">
																			<Button
																				size="small"
																				href="/contact-quote"
																			>
																				{!service.price
																					? 'Get a quote'
																					: `$${service.price}`}
																			</Button>
																		</div>
																	</li>
																);
															})}
													</ul>
												</>
											);
										})}
								</div>
							</>
						);
					}
					return null;
				}}
			</ServicesListItems>
		</section>
	);
};

export { ServicesListApp, ServicesListItems };

// export const getStaticProps = async () => {
// 	return {
// 		props: {},
// 	};
// };
