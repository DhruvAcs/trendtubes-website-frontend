import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PromiseFn, useAsync } from 'react-async';
import { BackendApi } from '../../../utils/backend-api';

import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
// import { default as faker } from 'faker';

const fetchServices: PromiseFn<any> = async () => {
	const servicesResponse = await BackendApi.getServices();
	// const shoppyCacheResponse = await BackendApi.getShoppyProductCache();
	if (
		!servicesResponse ||
		!servicesResponse.data
		// !shoppyCacheResponse ||
		// !shoppyCacheResponse.data
	)
		throw new Error();
	// return servicesResponse.data.map((service, index) =>
	// 	shoppyCacheResponse.data[index]
	// 		? {
	// 				...service,
	// 				shoppyProductData: shoppyCacheResponse.data.find(
	// 					(dataItem) => dataItem.id == service.shoppyProductId
	// 				),
	// 		  }
	// 		: service
	// );
	return servicesResponse.data;
};

const DashboardServicesListItems = ({ children }) => {
	const state = useAsync({
		promiseFn: fetchServices,
	});
	return children(state);
};

const DashboardServicesListApp = () => {
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
	// 	promiseFn: fetchservices,
	// 	filters: localFilters,
	// });

	return (
		<DashboardServicesListItems>
			{({ isPending, data, error }) => {
				if (isPending) return 'Loading...';
				if (error) return 'Error loading services';
				if (data) {
					console.log('data services data', data);
					return (
						<table className="table-fixed w-full">
							<thead>
								<tr className="text-left">
									<th className="w-4/12 p-4 border-b-2 border-primary-border">
										Title
									</th>
									{/* <th className="w-2/12 p-4 pl-0 border-b-2 border-primary-border">
										Platform
									</th> */}
									<th className="w-2/12 p-4 pl-0 border-b-2 border-primary-border">
										Category
									</th>
									<th className="w-3/12 p-4 pl-0 border-b-2 border-primary-border">
										Description
									</th>
								</tr>
							</thead>
							<tbody>
								{data.map((service) => {
									return (
										<tr className="text-primary-text border-b-2 border-primary-border last:border-b-0">
											<td className="py-4 pl-4 pr-4">
												<div className="flex items-center space-x-3">
													{service.imageUrl ? (
														<div
															className="w-9 h-9 bg-tertiary-bg rounded-full bg-cover"
															style={{
																backgroundImage: `url("${service.imageUrl}")`,
															}}
														/>
													) : (
														<div className="w-9 h-9 bg-tertiary-bg rounded-full" />
													)}
													<p>{service.title || 'No title'}</p>
												</div>
											</td>
											{/* <td
												className="py-4 space-x-2 flex items-center"
												style={{ color: platformColor }}
											>
												<FontAwesomeIcon icon={platformIcon} />
												<p>{capitalizeFirst(service.platform)}</p>
											</td> */}
											<td className="py-4 pr-4 truncate">
												{service.category || 'n/a'}
											</td>
											<td className="py-4 pr-4 relative">
												<div>{service.description || 'No description'}</div>
												<div className="absolute h-full flex items-center right-4 top-0 bottom-0 space-x-6">
													<a
														className="flex items-center space-x-2 text-primary-color"
														href={`/dashboard/services/delete?id=${service._id}`}
													>
														<FontAwesomeIcon icon={faTrash} />
														<p>Delete</p>
													</a>
													<a
														href={`/dashboard/services/${service._id}`}
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
		</DashboardServicesListItems>
	);
};

export { DashboardServicesListApp, DashboardServicesListItems };

// export const getStaticProps = async () => {
// 	return {
// 		props: {},
// 	};
// };
