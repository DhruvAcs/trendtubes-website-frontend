import Head from 'next/head';
import React, { createRef, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../button';
import { useAsync } from 'react-async';
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
// import { default as faker } from 'faker';

const fetchAccounts = async () => {
	const accountsResponse = await BackendApi.getAccounts();
	const shoppyCacheResponse = await BackendApi.getShoppyProductCache();
	if (
		!accountsResponse ||
		!accountsResponse.data ||
		!shoppyCacheResponse ||
		!shoppyCacheResponse.data
	)
		throw new Error();
	return accountsResponse.data.map((account, index) =>
		shoppyCacheResponse.data[index]
			? {
					...account,
					shoppyData: shoppyCacheResponse.data.find(
						(dataItem) => dataItem.id == account.shoppyProductId
					),
			  }
			: account
	);
};

const AccountsListItems = () => {
	useEffect(() => {
		// mainContentRef.current!.style.marginTop = `${
		// 	headerRef.current!.getBoundingClientRect().height
		// }px)`;
	}, []);
	const { data, error } = useAsync({ promiseFn: fetchAccounts });
	if (error) {
	}
	if (data) {
		console.log('fetch data', data);
		return (
			<ul className="grid grid-cols-2 gap-4">
				{data.map((account) => {
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
					return (
						<li className="w-full bg-secondary-bg rounded-md">
							<div className="p-4 border-b-2 border-primary-border">
								<div className="flex items-center justify-between">
									<div className="flex items-center space-x-4 overflow-hidden">
										<div>
											{account.shoppyData.image?.url ? (
												<div
													className="w-14 h-14 bg-tertiary-bg rounded-full bg-cover"
													style={{
														backgroundImage: `url("${account.shoppyData.image.url}")`,
													}}
												/>
											) : (
												<div className="w-14 h-14 bg-tertiary-bg rounded-full" />
											)}
										</div>
										<div className="overflow-hidden">
											<p className="text-primary-text font-medium leading-none pr-4 whitespace-nowrap truncate">
												{account.shoppyData.title || 'No title'}eeeeee
											</p>
											<p className="space-x-1 mt-3 leading-none text-base">
												<FontAwesomeIcon icon={platformIcon} />
												<span>
													{capitalizeFirst(account.platform || 'No platform')}
												</span>
											</p>
										</div>
									</div>
									<div className="flex items-center space-x-4">
										<h6 className="font-medium">${account.shoppyData.price}</h6>
										<Button
											size={'small'}
											onClick={() =>
												window.open(
													`https://shoppy.gg/payment/embed?embed=&product=${account.shoppyProductId}`,
													'_blank',
													'width=500,height=650,'
												)
											}
										>
											Buy now
										</Button>
									</div>
								</div>
							</div>
							<div className="p-4 overflow-hidden">
								<p className="leading-normal truncate">
									Owner Transfer
									<br /> Non-Monetized Channel
									<br />
									https://www.youtube.com/channel/UCNMdfOSgAS6hTkvFNFPPvqg
								</p>
							</div>
						</li>
					);
				})}
			</ul>
		);
	}

	return null;
};

export default AccountsListItems;

// export const getStaticProps = async () => {
// 	return {
// 		props: {},
// 	};
// };
