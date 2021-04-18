import Head from 'next/head';
import React, { createRef, useEffect, useRef, useState } from 'react';
import Header from '../components/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { default as faker } from 'faker';
import faker from 'faker';
import Link from 'next/link';
import Footer from '../components/footer';
import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
} from 'pure-react-carousel';
import {
	cIconSrc,
	javaIconSrc,
	mySQLIconSrc,
	pythonIconSrc,
} from '../utils/constants';
import Sidebar from '../components/sidebar';
import {
	faIdBadge,
	faIdCard,
	faCheckCircle,
	faTimesCircle,
	faLayerGroup,
	faStream,
	faSignInAlt,
	faCog,
	faServer,
	faBox,
	faWrench,
	faGlobe,
	faCoins,
	faBoxOpen,
	faTerminal,
	faCode,
	faBrush,
	faPaintBrush,
	faPaperPlane,
	faGlobeAmericas,
} from '@fortawesome/free-solid-svg-icons';
import { Button, OutlineButton } from '../components/button';
import { faDiscord, faSpeakerDeck } from '@fortawesome/free-brands-svg-icons';
import {
	faBell,
	faComments,
	faLightbulb,
	faUserCircle,
} from '@fortawesome/free-regular-svg-icons';
import UserLink from '../components/userlink';
import { AccountsListApp } from '../components/accounts/accounts-list-4';
import {
	capitalizeFirst,
	isValidEmail,
	isValidURL,
} from '../utils/general-utils';
import gfm from 'remark-gfm';
import { BackendApi } from '../utils/backend-api';
import { AsyncCMSData } from '../components/cms-data-component';
import Markdown from 'markdown-to-jsx';
import MobileHeader from '../components/mobile-header';
import { NextSeo } from 'next-seo';

const ContactPage = () => {
	const headerRef = createRef<HTMLDivElement>();
	const mainContentRef = createRef<HTMLDivElement>();

	useEffect(() => {
		// mainContentRef.current!.style.marginTop = `${
		// 	headerRef.current!.getBoundingClientRect().height
		// }px)`;
	}, []);

	const [filters, setFilters] = useState<{ platforms: string[] }>({
		platforms: ['YOUTUBE', 'TIKTOK', 'TWITCH', 'OTHER'],
	});

	const [messageFormData, setMessageFormData] = useState<{
		firstName: '';
		lastName: '';
		email: '';
		subject: '';
		message: '';
	}>();
	const [showMobileModal, setShowMobileModal] = useState<boolean>(false);

	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link
					rel="stylesheet"
					href="https://unpkg.com/flickity@2/dist/flickity.min.css"
				/>
				<script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js" />
				<title>Contact Quote</title>
			</Head>
			{/* <Header ref={headerRef} /> */}
			<NextSeo
				title="Contact for Quote - TrendTubes"
				description="Reach out to us and we will reply quickly with a quote."
			/>
			<main className="w-full" ref={mainContentRef}>
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
				<section className="mt-30 px-6.25% lg:px-15%">
					{/* <h2>Accounts</h2>
					<p className="text-xl mt-2">
						Securely buy high quality accounts for Twitch, YouTube, & more.
					</p> */}
					<h3>Contact For A Quote</h3>
					<AsyncCMSData path="contact">
						{({ isPending, data, error }) => {
							if (isPending) return 'Loading...';
							if (error) return <p>Error loading CMS</p>;
							if (data) {
								console.log('cms Data fetched', data);
								return (
									<>
										<p className="">
											<Markdown>
												{
													(
														data.subPaths.find(
															(subPath) => subPath.path == 'description'
														) || { value: 'No description' }
													).value
												}
											</Markdown>
										</p>
										<ul className="flex items-center space-x-2 mt-8">
											{['mcm', 'ogu', 'discord', 'email'].map((contactItem) => {
												var pathValue = (
													data.subPaths.find(
														(subPath) => subPath.path == contactItem
													) || { value: 'No description' }
												).value;

												return (
													<li>
														<a
															className="px-4 py-3 bg-secondary-bg text-primary-color rounded-md"
															{...(isValidURL(pathValue)
																? { href: pathValue }
																: isValidEmail(pathValue)
																? { href: `mailto:${pathValue}` }
																: null)}
														>
															{isValidURL(pathValue)
																? contactItem == 'ogu'
																	? 'OG Users'
																	: contactItem == 'mcm'
																	? 'MC-Market'
																	: ''
																: pathValue}
														</a>
													</li>
												);
											})}
										</ul>
										<hr className="mt-8 mb-6" />
										<div>
											{/* <div className="overflow-hidden overflow-x-hidden"></div> */}
											<div className="bg-secondary-bg rounded-md">
												<div className="px-6 pt-6">
													<h5>Message Us</h5>
												</div>
												<form
													id="contact-form"
													method="POST"
													action="http://localhost:3005/contact/?type=quote"
												>
													<div className="grid grid-cols-4 gap-4 px-6 mt-4">
														<div className="space-y-2 flex flex-col">
															<p className="">First name</p>
															<input
																required
																type="text"
																name="firstName"
																className="inline-flex justify-between w-full rounded-md border-none shadow-sm px-4 py-2 bg-tertiary-bg text-base text-secondary-text"
															/>
														</div>
														<div className="space-y-2 flex flex-col">
															<p className="">Last name</p>
															<input
																type="text"
																required
																name="lastName"
																className="inline-flex justify-between w-full rounded-md border-none shadow-sm px-4 py-2 bg-tertiary-bg text-base text-secondary-text"
															/>
														</div>
														<div className="space-y-2 flex flex-col">
															<p className="">Email</p>
															<input
																// pattern={'^.+@.+.[a-zA-Z]{2,63}$'}
																type="email"
																required
																id="email"
																name="email"
																// title="Please enter a valid email format (name@example.com)"
																className="inline-flex justify-between w-full rounded-md border-none shadow-sm px-4 py-2 bg-tertiary-bg text-base text-secondary-text"
															/>
														</div>
														<div className="space-y-2 flex flex-col">
															<p className="">Subject</p>
															<input
																type="text"
																required
																id="subject"
																name="subject"
																className="inline-flex justify-between w-full rounded-md border-none shadow-sm px-4 py-2 bg-tertiary-bg text-base text-secondary-text"
															/>
														</div>
														<div className="space-y-2 flex flex-col col-span-4">
															<p className="">Message</p>
															<textarea
																style={{ minHeight: '250px' }}
																// htmlFor="contact-form"
																required
																id="message"
																name="message"
																className="inline-flex justify-between w-full rounded-md border-none shadow-sm px-4 py-2 bg-tertiary-bg text-base text-secondary-text"
															></textarea>
														</div>
													</div>
													<div className="px-6 p-0">
														<hr className="my-6" />
													</div>
													<div className="p-6 pt-0 flex items-center">
														<input
															type="submit"
															className="bg-primary-color py-3 px-6 text-base rounded-md w-fit text-primary-text font-bold flex items-center justify-center"
															value="Submit Form"
														></input>
													</div>
												</form>
											</div>
										</div>
									</>
								);
							}
							return null;
						}}
					</AsyncCMSData>
				</section>

				<section className="px-6.25% lg:px-15% grid grid-cols-12 gap-6"></section>
				{/* <Footer /> */}
			</main>
			{/* <Footer /> */}
		</>
	);
};

export default ContactPage;

// export const getStaticProps = async () => {
// 	return {
// 		props: {},
// 	};
// };
