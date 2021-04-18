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
import { capitalizeFirst } from '../utils/general-utils';
import MobileHeader from '../components/mobile-header';
import { NextSeo } from 'next-seo';

const HomePage = () => {
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
