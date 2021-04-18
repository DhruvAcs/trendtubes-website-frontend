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
	faArrowRight,
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

const ContactPage = () => {
	const headerRef = createRef<HTMLDivElement>();
	const mainContentRef = createRef<HTMLDivElement>();
	const [showMobileModal, setShowMobileModal] = useState<boolean>(false);

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
