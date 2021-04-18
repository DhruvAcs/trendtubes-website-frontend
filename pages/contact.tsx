import Head from 'next/head';
import React, { createRef, useEffect, useState } from 'react';
import Header from '../components/header';
// import { default as faker } from 'faker';
import { isValidEmail, isValidURL } from '../utils/general-utils';
import { AsyncCMSData } from '../components/cms-data-component';
import MobileHeader from '../components/mobile-header';
import { NextSeo } from 'next-seo';

const ContactPage = () => {
	// const headerRef = createRef<HTMLDivElement>();
	const mainContentRef = createRef<HTMLDivElement>();
	const [showMobileModal, setShowMobileModal] = useState<boolean>(false);

	useEffect(() => {
		// mainContentRef.current!.style.marginTop = `${
		// 	headerRef.current!.getBoundingClientRect().height
		// }px)`;
	}, []);

	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link
					rel="stylesheet"
					href="https://unpkg.com/flickity@2/dist/flickity.min.css"
				/>
				<script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js" />
				<title>Contact</title>
			</Head>
			{/* <Header ref={headerRef} /> */}
			<NextSeo
				title="Contact Us- TrendTubes"
				description="The Place For Professional Social Media Services."
			/>

			<main className="w-full relative" ref={mainContentRef}>
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
					<h3>Contact</h3>
					<AsyncCMSData path="contact">
						{({ isPending, data, error }) => {
							if (isPending) return 'Loading...';
							if (error) return <p>Error loading CMS</p>;
							if (data) {
								console.log('cms Data fetched', data);
								return (
									<>
										<p className="">
											{
												(
													data.subPaths.find(
														(subPath) => subPath.path == 'description'
													) || { value: 'No description' }
												).value
											}
										</p>
										<ul className="flex items-center mt-8 flex-wrap gap-2">
											{['mcm', 'ogu', 'discord', 'email'].map((contactItem) => {
												var pathValue = (
													data.subPaths.find(
														(subPath) => subPath.path == contactItem
													) || { value: 'No description' }
												).value;

												return (
													<li>
														<a
															className="block px-4 py-3 bg-secondary-bg text-primary-color rounded-md"
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
										<hr className="my-8 mb-6" />
										<div className="pb-8">
											{/* <div className="overflow-hidden overflow-x-hidden"></div> */}
											<div className="bg-secondary-bg rounded-md">
												<div className="px-6 pt-6">
													<h5>Message Us</h5>
												</div>
												<form
													id="contact-form"
													method="POST"
													action="http://localhost:3005/contact"
												>
													<div className="grid grid-cols-4 gap-4 px-6 mt-4">
														<div className="space-y-2 flex flex-col col-span-4 md:col-span-2 lg:col-span-1">
															<p className="">First name</p>
															<input
																required
																type="text"
																name="firstName"
																className="inline-flex justify-between w-full rounded-md border-none shadow-sm px-4 py-2 bg-tertiary-bg text-base text-secondary-text"
															/>
														</div>
														<div className="space-y-2 flex flex-col col-span-4 md:col-span-2 lg:col-span-1">
															<p className="">Last name</p>
															<input
																type="text"
																required
																name="lastName"
																className="inline-flex justify-between w-full rounded-md border-none shadow-sm px-4 py-2 bg-tertiary-bg text-base text-secondary-text"
															/>
														</div>
														<div className="space-y-2 flex flex-col col-span-4 md:col-span-2 lg:col-span-1">
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
														<div className="space-y-2 flex flex-col col-span-4 md:col-span-2 lg:col-span-1">
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
					{/* <p className="">
						Management​
						<br />
						<ol className="list-decimal list-inside">
							<li>
								All terms will be agreed upon prior to the deal, an invoice will
								be created and both parties must follow accordingly
							</li>
							<li>
								You will only receive what your plan includes unless we agreed
								to custom terms.<ul className="flex items-center space-x-2">
												{['mcm', 'ogu', 'discord', 'email'].map(
													(contactItem) => {
														var pathValue = (
															data.subPaths.find(
																(subPath) => subPath.path == contactItem
															) || { value: 'No description' }
														).value;

														return (
															<li>
																<a
																	className="px-4 py-3 bg-secondary-bg rounded-md"
																	href={
																		isValidURL(pathValue)
																			? pathValue
																			: isValidEmail(pathValue)
																			? `mailto:${pathValue}`
																			: ''
																	}
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
													}
												)}
											</ul>
							</li>
							<li>
								Payments will be on a monthly basis using reoccurring invoices
								or subscriptions. If manual payments all payments will be
								upfront.
							</li>
							<li>
								Charging back is prohibited, only refunds issues by
								Trendtubes.com.
							</li>
						</ol>
						<br />
						Management​
						<br />
						<ol className="list-decimal list-inside">
							<li>Channel will be sold as-is.</li>
							<li>
								After you gain full access to the channel you are liable for
								what happens to the account afterward.
							</li>
							<li>
								If during the transfer session any suspicious activity is found
								there will be an appropriate action.
							</li>
							<li>
								Channels will be only sold through ownership transfer, you will
								provide a gmail and you will be invited as owner. After being an
								owner on the channel for 7 days you are able to assign yourself
								the primary owner and remove all other accounts that have
								access.
							</li>
							<li>
								All payments must be upfront for channels unless discussed
								otherwise with a manager.
							</li>
						</ol>
						<br />
						Payments
						<br />
						<ol className="list-decimal list-inside">
							<li>
								We are accepting, Paypal (Friends and Family), Paypal( Goods and
								Services0 if all fees are covered, Paypal( invoices or
								subscriptions) Like goods and services you incur all fees, and
								Crypto (BTC,ETH,LT,XLM,ADA ect)
							</li>
							<li>
								All payments are upfront, if the payment does not confirm we may
								only provide service after it is.
							</li>
							<li>Charging back is prohibited for any reason</li>
						</ol>
					</p> */}
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
