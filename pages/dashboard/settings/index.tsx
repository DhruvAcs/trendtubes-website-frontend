import Head from 'next/head';
import React, { createRef, useEffect, useRef, useState } from 'react';
import Header from '../../../components/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { default as faker } from 'faker';
import faker, { lorem } from 'faker';
import Link from 'next/link';
import Footer from '../../../components/footer';
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
} from '../../../utils/constants';
import Sidebar from '../../../components/sidebar';
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
import { Button, OutlineButton } from '../../../components/button';
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
import UserLink from '../../../components/userlink';
import DashboardContentHomeTab from '../../../components/dashboard/content/dashboard-content-home-tab';
import { DashboardContentStaffTab } from '../../../components/dashboard/settings/dashboard-settings-tabs';
import { authDataCtx, AuthDataWrapper } from '../../../auth/auth-data';

const DashboardContentPage = ({ user, cookie }) => {
	const headerRef = createRef<HTMLDivElement>();
	const mainContentRef = createRef<HTMLDivElement>();
	const [currentTab, setCurrentTab] = useState('staff');

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
				<title>Settings - Dashboard</title>
			</Head>
			{/* <Header ref={headerRef} /> */}
			<AuthDataWrapper user={user}>
				<main className="w-full grid grid-cols-8 h-screen" ref={mainContentRef}>
					<Sidebar />
					<section className="col-span-7 px-6.25% lg:px-15% pt-8">
						<div className="flex items-center justify-between">
							<div>
								<h3>Settings</h3>
								<p className="">
									Manage staff accounts, general settings, & more
								</p>
							</div>
							<div>
								<Button
									className="space-x-2"
									href="localhost:3005/auth/generate-code"
								>
									<FontAwesomeIcon icon={faPlus} />
									<p>Add Staff Account</p>
								</Button>
							</div>
							{/* <div>
							<Button className="space-x-2">
							<FontAwesomeIcon icon={faPlus} />
							<p>Add Account</p>
							</Button>
						</div> */}
						</div>
						{/* <hr className="my-4" /> */}
						<div className="w-full mt-8">
							<ul className="flex items-center border-b-2 border-primary-border">
								{[{ name: 'Staff Accounts', tab: 'staff' }].map((tabItem) => {
									return (
										<li
											className={
												'px-6 pb-3 cursor-pointer border-b-2' +
												(tabItem.tab == currentTab
													? ' border-primary-color text-primary-color'
													: ' border-transparent')
											}
											onClick={() => setCurrentTab(tabItem.tab)}
										>
											{tabItem.name}
										</li>
									);
								})}
							</ul>
						</div>
						<div className="mt-4">
							{currentTab == 'staff' && (
								<DashboardContentStaffTab user={user} />
							)}
						</div>
					</section>
					{/* <Footer /> */}
				</main>
			</AuthDataWrapper>
			{/* <Footer /> */}
		</>
	);
};

DashboardContentPage.getInitialProps = authDataCtx;
export default DashboardContentPage;

// export const getStaticProps = async () => {
// 	return {
// 		props: {},
// 	};
// };
