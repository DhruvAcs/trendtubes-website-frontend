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
			<ul className="grid grid-cols-3 gap-4">
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
							<div className="bg-tertiary-bg h-40 rounded-t-md w-full flex items-center justify-center relative">
								{/* <div className="absolute z-10 top-4 left-4 bg-quartiary-bg flex items-center p-2 rounded-full text-sm">
									<p className="space-x-1 leading-none">
										<FontAwesomeIcon icon={platformIcon} />
										<span>
											{capitalizeFirst(account.platform || 'No platform')}
										</span>
									</p>
								</div> */}
								<div
									className="absolute bg-cover top-0 left-0 bottom-0 right-0 h-full w-full"
									style={
										{
											// background:
											// 'linear-gradient(rgba(255,255,255,.5), url("/static/account-bg.jpg"))',
											// `linear-gradient(rgba(35, 37, 38,.95), rgba(35, 37, 38,.95)), url("/static/account-bg.jpg")`,
											// filter: 'grayscale(1)',
										}
									}
								/>
								{account.shoppyData.image?.url ? (
									<div
										className="z-10 w-24 h-24 bg-tertiary-bg rounded-md bg-cover"
										style={{
											backgroundImage: `url("${account.shoppyData.image.url}")`,
											filter: 'grayscale(0)',
										}}
									/>
								) : (
									<div className="z-10 w-24 h-24 bg-quartiary-bg rounded-md" />
								)}
							</div>
							<div className="p-6">
								<div className="flex items-center space-x-4">
									<div>
										<p className="leading-none">
											{account.shoppyData.title || 'No title'}
										</p>
										<h6 className="font-medium mt-3 text-xl">
											${account.shoppyData.price || 0}
										</h6>
										{/* <p className="space-x-1 mt-3 leading-none">
												<FontAwesomeIcon icon={platformIcon} />
												<span>
													{capitalizeFirst(account.platform || 'No platform')}
												</span>
											</p> */}
									</div>
								</div>
								<hr className="my-4" />
								<p className="leading-normal text-base break-all">
									https://www.youtube.com/channel/UCNMdfOSgAS6hTkvFNFPPvqg
								</p>
								<div className="mt-8 flex items-center justify-between">
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
									<div className="">
										<p className="text-base mt-1 capitalize">1 in stock</p>
									</div>
								</div>
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
