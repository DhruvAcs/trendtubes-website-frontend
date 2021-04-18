import Head from 'next/head';
import React, { createRef, useEffect, useRef } from 'react';
import Header from '../../components/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { default as faker } from 'faker';
import faker from 'faker';
import Link from 'next/link';
import Footer from '../../components/footer';
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
} from '../../utils/constants';
import Sidebar from '../../components/sidebar';
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
import { Button, OutlineButton } from '../../components/button';
import { faDiscord, faSpeakerDeck } from '@fortawesome/free-brands-svg-icons';
import {
	faBell,
	faComments,
	faLightbulb,
	faUserCircle,
} from '@fortawesome/free-regular-svg-icons';
import UserLink from '../../components/userlink';
import { BackendApi } from '../../utils/backend-api';
import { useRouter } from 'next/router';
import { authDataCtx, AuthDataWrapper } from '../../auth/auth-data';

const DashboardIndexPage = ({ user, cookie }) => {
	const headerRef = createRef<HTMLDivElement>();
	const mainContentRef = createRef<HTMLDivElement>();

	useEffect(() => {
		// mainContentRef.current!.style.marginTop = `${
		// 	headerRef.current!.getBoundingClientRect().height
		// }px)`;
	}, []);

	// const router = useRouter();
	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link
					rel="stylesheet"
					href="https://unpkg.com/flickity@2/dist/flickity.min.css"
				/>
				<script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js" />
				<title>Home - Dashboard</title>
			</Head>
			<AuthDataWrapper user={user}>
				<main className="w-full grid grid-cols-8 h-screen" ref={mainContentRef}>
					<Sidebar />
					<section className="col-span-7 px-6.25% lg:px-15% pt-8 h-screen scrollbar scrollbar-thin scrollbar-thumb-primary-color scrollbar-track-quartiary-bg pb-8">
						<div>
							<h3>Content Management</h3>
							<p className="">Change the text on different pages</p>
						</div>
						<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
							<div className="p-6 bg-secondary-bg rounded-md col-span-2">
								<div className="flex items-center justify-between w-full">
									<h5 className="">Google Analytics</h5>
									<p className="p-2 bg-primary-triadic-color-1 bg-opacity-10 text-primary-triadic-color-1 rounded-md text-base w-fit">
										Connected
									</p>
								</div>
								<hr className="my-3" />
								<div className="overflow-hidden truncate">
									<a
										className="text-primary-color"
										href="https://analytics.google.com/analytics/web/#/p268588354/realtime/overview"
									>
										https://analytics.google.com/analytics/web/#/p268588354/realtime/overview
									</a>
								</div>
							</div>
							<div className="p-6 bg-secondary-bg rounded-md col-span-2">
								<div className="flex items-center justify-between w-full">
									<h5 className="">Shoppy Store</h5>
									<p className="p-2 bg-primary-triadic-color-1 bg-opacity-10 text-primary-triadic-color-1 rounded-md text-base w-fit">
										Connected
									</p>
								</div>
								<hr className="my-3" />
								<div className="overflow-hidden truncate">
									<a
										className="text-primary-color"
										href="https://shoppy.gg/home"
									>
										https://shoppy.gg/home
									</a>
								</div>
							</div>
						</div>
					</section>
				</main>
			</AuthDataWrapper>
		</>
	);
};

DashboardIndexPage.getInitialProps = authDataCtx;

export default DashboardIndexPage;

// export const getStaticProps = async () => {
// 	return {
// 		props: {},
// 	};
// };
