import Head from 'next/head';
import React, { createRef, useEffect, useState } from 'react';
import Header from '../components/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { default as faker } from 'faker';
import Footer from '../components/footer';
import {
	faPaperPlane,
	faGlobeAmericas,
	faArrowDown,
} from '@fortawesome/free-solid-svg-icons';
import { Button, OutlineButton } from '../components/button';
import MobileHeader from '../components/mobile-header';
import { AsyncCMSData } from '../components/cms-data-component';
import { findSubPath } from '../utils/general-utils';
import { NextSeo } from 'next-seo';

const HomePage = () => {
	const mainContentRef = createRef<HTMLDivElement>();

	useEffect(() => {
		// mainContentRef.current!.style.marginTop = `${
		// 	headerRef.current!.getBoundingClientRect().height
		// }px)`;
	}, []);
	const [showMobileModal, setShowMobileModal] = useState<boolean>(false);
	const [scrollAmount, setScrollAmount] = useState<number>(0);

	useEffect(() => {
		window.onscroll = () => {
			setScrollAmount(window.pageYOffset);
		};
	});

	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link
					rel="stylesheet"
					href="https://unpkg.com/flickity@2/dist/flickity.min.css"
				/>
				<script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js" />
				<title>Home | TrendTubes</title>
			</Head>
			<NextSeo
				title="TrendTubes - Official Site"
				description="The Place For Professional Social Media Services."
			/>
			<main
				className="w-full"
				ref={mainContentRef}
				// onScroll={() => setScrollAmount(window.pageYOffset)}
			>
				<Header onMobileNavOpen={() => setShowMobileModal(true)} />
				{showMobileModal && (
					<MobileHeader onMobileNavClose={() => setShowMobileModal(false)} />
				)}
				{/* <section className="flex justify-between flex-col lg:flex-row lg:items-center px-6.25% lg:px-12.5% mt-30">
					<div className="flex items-center justify-between w-full">
						<div>
							<h2 className="">Welcome to Marketplace</h2>
							<p className="mt-2 text-xl">
								No censorship, no bullshit. Better than MCM.
							</p>
						</div>
						<div className="flex items-center mt-6 space-x-4 lg:mt-0">
							<OutlineButton className="space-x-3" href="/content-feed">
								<FontAwesomeIcon icon={faStream} />
								<p>View Content Feed</p>
							</OutlineButton>
							<Button className="space-x-3">
								<FontAwesomeIcon icon={faSignInAlt} />
								<p>Sign Up Now</p>
							</Button>
						</div>
					</div>
					<div className="flex items-center mt-6 space-x-4 lg:mt-0">
						<OutlineButton className="space-x-3" href="/content-feed">
							<FontAwesomeIcon icon={faStream} />
							<p>View Content Feed</p>
						</OutlineButton>
						<Button className="space-x-3">
							<FontAwesomeIcon icon={faSignInAlt} />
							<p>Sign Up Now</p>
						</Button>
					</div>
				</section> */}
				<AsyncCMSData path="home">
					{({ isPending, data, error }) => {
						if (isPending) {
							return 'Loading...';
						}
						if (error) {
							return <p>Error loading CMS</p>;
						}
						if (data) {
							return (
								<>
									<section className="px-6.25% lg:px-15% grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 h-fit lg:h-screen relative">
										<div className="flex items-center w-64 lg:w-auto mt-30 lg:mt-0">
											<img src="static/undraw-final.png" />
										</div>
										<div className="w-full flex items-center">
											<div>
												<h1 className="text-4xl leading-normal lg:text-5xl lg:leading-normal">
													{/* The Place For{' '}
													<span className="text-primary-color border-b-4 border-primary-color">
														Professional
													</span>
													<span className="text-primary-color">Professional</span>
													Professional
													<br />
													Social Media Services */}
													{findSubPath(data, 'hero.title')?.value || 'No title'}
												</h1>
												<p className="mt-4 text-xl lg:text-2xl leading-10">
													{findSubPath(data, 'hero.description')?.value ||
														'No description'}
												</p>
												<div className="flex items-center space-x-4 mt-8">
													<Button className="space-x-2" href="/services">
														<FontAwesomeIcon icon={faGlobeAmericas} />
														<span>View Services</span>
													</Button>
													<OutlineButton className="space-x-2" href="/contact">
														<FontAwesomeIcon icon={faPaperPlane} />
														<span>Contact Directly</span>
													</OutlineButton>
												</div>
											</div>
										</div>
										<div className="absolute bottom-12 w-full items-center justify-center flex">
											<div
												className="rounded-md border-2 border-primary-color text-primary-color py-2 px-4 w-fit text-base cursor-pointer hidden xl:block"
												style={{
													opacity: `${Math.min(
														500,
														500 / (scrollAmount || 1)
													)}%`,
												}}
												onClick={() =>
													document
														.getElementById('grow-brand-section')
														?.scroll(0, 0)
												}
											>
												<p className="space-x-2">
													<span>Scroll Down</span>
													<FontAwesomeIcon icon={faArrowDown} />
												</p>
											</div>
										</div>
									</section>
									<section className="mt-12 lg:mt-0" id="grow-brand-section">
										<div className="bg-secondary-bg w-full py-12">
											<h2 className="text-center">
												{findSubPath(data, 'second.container.title')?.value ||
													'No title'}
												{/* <br /> */}
												{/* <span className="text-primary-color border-b-4 border-primary-color">
								Fast & Affordable
							</span> */}
											</h2>
											<div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-6.25% gap-6 xl:gap-0 lg:px-15%">
												{Array(3)
													.fill(null)
													.map((_, index) => {
														return (
															<div
																className={
																	'border-primary-border w-full' +
																	(index == 0
																		? ' xl:pr-6 xl:border-r-2'
																		: index == 1
																		? ' xl:px-6'
																		: ' xl:pl-6 xl:border-l-2')
																}
															>
																<h5 className="text-primary-color">
																	{findSubPath(
																		data,
																		`second.container.subtitle-${index + 1}`
																	)?.value || 'No subtitle'}
																</h5>
																<p className="mt-2 leading-normal">
																	{findSubPath(
																		data,
																		`second.container.subdescription-${
																			index + 1
																		}`
																	)?.value || 'No subtitle'}
																</p>
																<Button
																	size={'small'}
																	className="mt-6"
																	{...(findSubPath(
																		data,
																		`second.container.sublink-${index + 1}`
																	)?.value
																		? {
																				href: findSubPath(
																					data,
																					`second.container.sublink-${
																						index + 1
																					}`
																				)?.value,
																		  }
																		: null)}
																>
																	{findSubPath(
																		data,
																		`second.container.subbutton-${index + 1}`
																	)?.value || 'No button'}
																</Button>
															</div>
														);
													})}
											</div>
										</div>
									</section>
									<section className="px-6.25% lg:px-15% relative mt-12">
										<div className="bg-secondary-bg w-full p-12 rounded-lg">
											<h2 className="text-center">
												Why TrendTubes
												{/* <br /> */}
												{/* <span className="text-primary-color border-b-4 border-primary-color">
								Fast & Affordable
							</span> */}
											</h2>
											<div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16">
												{Array(3)
													.fill(null)
													.map((_, index) => {
														var formatIcon = (
															findSubPath(
																data,
																`third.container.subicon-${index + 1}`
															)?.value || 'times'
														).replace('fa', '');
														formatIcon =
															formatIcon.charAt(0).toLowerCase() +
															formatIcon.substr(1);
														formatIcon = formatIcon
															.split(/(?=[A-Z])/)
															.join('-')
															.toLowerCase();
														return (
															<div className="w-full flex flex-col items-center">
																<div className="text-center flex flex-col items-center">
																	<div className="text-5xl text-primary-color">
																		<FontAwesomeIcon icon={formatIcon} />
																	</div>
																	<h5 className="text-primary-color text-2xl mt-6 whitespace-nowrap">
																		{findSubPath(
																			data,
																			`third.container.subtitle-${index + 1}`
																		)?.value || 'No title'}
																	</h5>
																	<p className="mt-2 leading-normal">
																		{findSubPath(
																			data,
																			`third.container.subdescription-${
																				index + 1
																			}`
																		)?.value || 'No subdescription'}
																	</p>
																</div>
															</div>
														);
													})}
											</div>
										</div>
									</section>
									<section className="px-6.25% lg:px-15% relative mt-12 mb-12 overflow-x-hidden">
										<h2 className="text-center">
											{findSubPath(data, `partnerships.title`)?.value}
										</h2>

										{/* <div className="hidden w-full overflow-x-scroll whitespace-nowrap scrollbar scrollbar-thin scrollbar-thumb-primary-color scrollbar-track-quartiary-bg pb-4">
											<div className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 overflow-hidden overflow-x-scroll">
											<div className="mt-4 flex items-center gap-4 overflow-hidden overflow-x-scroll">
											<div className="mt-4 table table-fixed">
												<div
													className="table-row"
													style={{ wordWrap: 'break-word' }}
												>
													{findSubPath(data, `partnerships.list`)?.value
														? findSubPath(data, `partnerships.list`)
																?.value.split('\n')
																.map((listItem) => {
																	return (
																		<div
																			className="table-cell"
																			// style={{ gridRow: '1' }}
																		>
																			<div
																				className="bg-secondary-bg rounded-lg flex items-center mr-3"
																				style={{
																					width: '300px',
																					wordWrap: 'break-word',
																				}}
																			>
																				<div className="flex items-center">
																					<img
																						src={listItem.split('|')[0] || ''}
																						className="max-w-full w-1/3 h-auto bg-tertiary-bg rounded-l-lg"
																					/>
																					<div className="p-4">
																						<p className="text-primary-color text-xl font-medium">
																							{listItem.split('|')[1] ||
																								'No title'}
																						</p>
																						<p className="">
																							{listItem.split('|')[2] ||
																								'No description'}
																						</p>
																					</div>
																				</div>
																			</div>
																		</div>
																	);
																})
														: null}
												</div>
											</div>
										</div> */}
										<div className="grid mt-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 overflow-hidden overflow-x-scroll scrollbar scrollbar-thin scrollbar-thumb-primary-color scrollbar-track-quartiary-bg pb-4">
											<div className="mt-4 table table-fixed">
												<div
													className="table-row"
													style={{ wordWrap: 'break-word' }}
												>
													{findSubPath(data, `partnerships.list`)?.value
														? findSubPath(data, `partnerships.list`)
																?.value.split('\n')
																.map((listItem) => {
																	return (
																		<div
																			className="table-cell"
																			// style={{ gridRow: '1' }}
																		>
																			<div
																				className="bg-secondary-bg rounded-lg flex items-center mr-3"
																				style={{
																					width: '300px',
																					wordWrap: 'break-word',
																				}}
																			>
																				<div className="flex items-center">
																					<img
																						src={listItem.split('|')[0] || ''}
																						className="max-w-full w-1/3 h-auto bg-tertiary-bg rounded-l-lg"
																					/>
																					<div className="p-4">
																						<p className="text-primary-color text-xl font-medium">
																							{listItem.split('|')[1] ||
																								'No title'}
																						</p>
																						<p className="">
																							{listItem.split('|')[2] ||
																								'No description'}
																						</p>
																					</div>
																				</div>
																			</div>
																		</div>
																	);
																})
														: null}
												</div>
											</div>
										</div>
									</section>
									<Footer cmsData={data} />
								</>
							);
						}
						return null;
					}}
				</AsyncCMSData>
			</main>
			{/* <Footer /> */}
		</>
	);
};

export default HomePage;

// export const getStaticProps = async () => {
// 	return {
// 		props: {},
// 	};
// };
