import Head from 'next/head';
import React, { createRef, useEffect, useState } from 'react';
import Header from '../components/header';
import { AsyncCMSData } from '../components/cms-data-component';
import Markdown from 'markdown-to-jsx';
import MobileHeader from '../components/mobile-header';
import { NextSeo } from 'next-seo';

const HomePage = () => {
	const mainContentRef = createRef<HTMLDivElement>();

	useEffect(() => {
		// mainContentRef.current!.style.marginTop = `${
		// 	headerRef.current!.getBoundingClientRect().height
		// }px)`;
	}, []);

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
				<title>Terms of Service</title>
			</Head>
			<NextSeo
				title="Terms of Service - TrendTubes"
				description="The Place For Professional Social Media Services."
			/>
			{/* <Header ref={headerRef} /> */}
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
				<section className="mt-30 px-6.25% lg:px-15% overflow-hidden overflow-x-hidden">
					{/* <h2>Accounts</h2>
					<p className="text-xl mt-2">
						Securely buy high quality accounts for Twitch, YouTube, & more.
					</p> */}
					<h3>Terms of Service</h3>
					<p className=""></p>
					<hr className="my-8" />
					<div className=" overflow-hidden overflow-x-hidden">
						<AsyncCMSData path="tos.description">
							{({ isPending, data, error }) => {
								if (isPending) return 'Loading...';
								if (error) return <p>Error loading CMS</p>;
								if (data) {
									console.log('cms Data fetched', data);
									return (
										// <ReactMarkdown
										// 	plugins={[gfm]}
										// 	children={data.value}
										// 	escapeHtml={false}
										// />
										<Markdown>{data.value}</Markdown>
										// null
									);
								}
								return null;
							}}
						</AsyncCMSData>
					</div>
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
								to custom terms.
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

export default HomePage;

// export const getStaticProps = async () => {
// 	return {
// 		props: {},
// 	};
// };
