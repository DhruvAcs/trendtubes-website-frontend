import Head from 'next/head';
import React, { createRef, useEffect, useState } from 'react';
import Header from '../components/header';
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
				<script src="https://shoppy.gg/api/embed.js"></script>
				<title>Accounts</title>
			</Head>
			<NextSeo
				title="Accounts Store - TrendTubes"
				description="Purchase social media accounts quickly & securely."
			/>
			<main className="w-full" ref={mainContentRef}>
				<Header onMobileNavOpen={() => setShowMobileModal(true)} />
				{showMobileModal && (
					<MobileHeader onMobileNavClose={() => setShowMobileModal(false)} />
				)}
				<section className="mt-30 px-6.25% lg:px-15%">
					<h3>Accounts</h3>
					<p className="">
						Securely buy high quality accounts for Twitch, YouTube, & more.
					</p>
					<hr className="mt-8" />
					<button
						data-shoppy-product={'aTkm6BW'}
						className="py-2 px-4 text-base rounded-md w-fit text-primary-text font-bold flex items-center justify-center bg-primary-color"
					>
						Buy Now
					</button>
				</section>

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
