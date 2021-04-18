import Head from 'next/head';
import React, { createRef, useEffect, useRef } from 'react';
import Header from '../../components/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { default as faker } from 'faker';
import faker, { lorem } from 'faker';
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
	faPlus,
	faEdit,
} from '@fortawesome/free-solid-svg-icons';
import { Button, OutlineButton } from '../../components/button';
import {
	faDiscord,
	faSpeakerDeck,
	faTiktok,
	faTwitch,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
	faBell,
	faComments,
	faLightbulb,
	faUserCircle,
} from '@fortawesome/free-regular-svg-icons';
import UserLink from '../../components/userlink';
import { DashboardAccountsListApp } from '../../components/dashboard/accounts/dashboard-accounts-list';
import { DashboardServicesListApp } from '../../components/dashboard/services/dashboard-services-list';
import { authDataCtx, AuthDataWrapper } from '../../auth/auth-data';

const DashboardIndexPage = ({ user, cookie }) => {
	const headerRef = createRef<HTMLDivElement>();
	const mainContentRef = createRef<HTMLDivElement>();

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
				<title>Services - Dashboard</title>
			</Head>
			{/* <Header ref={headerRef} /> */}
			<AuthDataWrapper user={user} permissions={['EDIT_SERVICE']}>
				<main className="w-full grid grid-cols-8 h-screen" ref={mainContentRef}>
					<Sidebar />
					<section className="col-span-7 px-6.25% lg:px-15% pt-8">
						<div className="flex items-center justify-between">
							<div>
								<h3>Services</h3>
								<p className="">Edit services for the online store here.</p>
							</div>
							<div>
								<Button className="space-x-2" href="/dashboard/services/new">
									<FontAwesomeIcon icon={faPlus} />
									<p>Add Service</p>
								</Button>
							</div>
						</div>
						{/* <hr className="my-4" /> */}
						<div className="w-full mt-8 bg-secondary-bg rounded-lg">
							<DashboardServicesListApp></DashboardServicesListApp>
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
