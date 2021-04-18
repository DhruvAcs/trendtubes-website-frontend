import Head from 'next/head';
import React, { createRef, useEffect, useState } from 'react';
import Header from '../components/header';
// import { default as faker } from 'faker';
import { AccountsListApp } from '../components/accounts/accounts-list-4';
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
				{/* <script src="https://shoppy.gg/api/embed.js"></script> */}
				<script src="https://cdn.sellix.io/static/js/embed.js"></script>
				<title>Accounts</title>
			</Head>
			<NextSeo
				title="Accounts Store - TrendTubes"
				description="Purchase social media accounts quickly & securely."
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
				<section className="mt-30 px-6.25% lg:px-15%">
					{/* <h2>Accounts</h2>
					<p className="text-xl mt-2">
						Securely buy high quality accounts for Twitch, YouTube, & more.
					</p> */}
					<h3>Accounts</h3>
					<p className="">
						Securely buy high quality accounts for Twitch, YouTube, & more.
					</p>
					<hr className="mt-8" />
				</section>

				<AccountsListApp />
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
