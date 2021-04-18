import Head from 'next/head';
import React, { createRef, useEffect, useState } from 'react';
import Header from '../components/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { default as faker } from 'faker';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../components/button';

import MobileHeader from '../components/mobile-header';

const ContactPage = () => {
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
				<title>Contact Submitted</title>
			</Head>
			{/* <Header ref={headerRef} /> */}
			<main className="w-full" ref={mainContentRef}>
				<Header onMobileNavOpen={() => setShowMobileModal(true)} />
				{showMobileModal && (
					<MobileHeader onMobileNavClose={() => setShowMobileModal(false)} />
				)}

				<section className="px-6.25% lg:px-15% h-screen flex items-center justify-center">
					<div className="flex flex-col items-center mt-30 py-12 px-8 bg-secondary-bg rounded-lg">
						<h3>Thank You</h3>
						<p className="mt-2">We will get back to your shortly.</p>
						<Button className="space-x-2 mt-16" href="/">
							<span>Return Home</span>
							<FontAwesomeIcon icon={faArrowRight} />
						</Button>
					</div>
				</section>
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
