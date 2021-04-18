import Head from 'next/head';
import React, {
	createRef,
	FormEvent,
	useEffect,
	useRef,
	useState,
} from 'react';
import Header from '../../../../components/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { default as faker } from 'faker';
import faker, { database, lorem } from 'faker';
import Link from 'next/link';
import Footer from '../../../../components/footer';
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
} from '../../../../utils/constants';
import Sidebar from '../../../../components/sidebar';
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
	faChevronRight,
	faChevronDown,
	faArrowLeft,
	faInfo,
	faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
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
import UserLink from '../../../../components/userlink';
import { Button, OutlineButton } from '../../../../components/button';
import tailwindConfig from '../../../../tailwind.config';
import { Router, useRouter } from 'next/router';
import { AccountProductData } from '../../../../components/dashboard/accounts/dashboard-account-data';
import {
	capitalizeFirst,
	getPlatformIcon,
} from '../../../../utils/general-utils';
import OutsideClickHandler from 'react-outside-click-handler';
import { BackendApi } from '../../../../utils/backend-api';
import Popup from 'reactjs-popup';
import { authDataCtx, AuthDataWrapper } from '../../../../auth/auth-data';

const DashboardStaffAccountDeletePage = ({ user }) => {
	const headerRef = createRef<HTMLDivElement>();
	const mainContentRef = createRef<HTMLDivElement>();
	const [isLoaded, setIsLoaded] = useState<boolean>(false);

	const formRef = createRef<HTMLFormElement>();
	useEffect(() => {
		// mainContentRef.current!.style.marginTop = `${
		// 	headerRef.current!.getBoundingClientRect().height
		// }px)`;
	}, []);

	const router = useRouter();
	useEffect(() => {
		if (!router.isReady) return;

		// codes using router.query
		setIsLoaded(true);
		console.log(router.query);
	}, [router.isReady]);

	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link
					rel="stylesheet"
					href="https://unpkg.com/flickity@2/dist/flickity.min.css"
				/>
				<script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js" />
				<title>Delete Staff Account - Dashboard</title>
			</Head>
			{/* <Header ref={headerRef} /> */}
			<AuthDataWrapper user={user} permissions={['DELETE_STAFF_ACCOUNT']}>
				<main
					className="w-full grid grid-cols-8 h-screen relative"
					ref={mainContentRef}
				>
					<Sidebar />
					<section className="col-span-7 px-6.25% lg:px-15% pt-8 h-screen scrollbar scrollbar-thin scrollbar-thumb-primary-color scrollbar-track-quartiary-bg pb-8">
						{isLoaded && user._id != router.query.id && (
							<>
								<div className="flex items-center justify-between">
									<div>
										<a
											className="text-secondary-text"
											href="/dashboard/accounts"
										>
											<p className="space-x-2 text-base">
												{/* <span>Accounts</span>
            <FontAwesomeIcon icon={faChevronRight} />
            <span>euUrsDt</span> */}
												<FontAwesomeIcon icon={faArrowLeft} />
												<span>Back</span>
											</p>
										</a>
										<h4 className="mt-2">Delete Staff Account</h4>
									</div>
								</div>
								{/* <hr className="my-4" /> */}
								{/* 'ZuL21qoa68POi-LJIB_yU' */}

								<div className="w-full mt-4 bg-secondary-bg rounded-lg">
									<div className="p-6">
										<p>
											Are you sure you want to delete this staff account? This
											is not reversible.
										</p>
										<div className="flex items-center mt-4 space-x-4">
											<OutlineButton
												color={`${tailwindConfig.theme.extend.colors['secondary-text']}`}
												textColor={`${tailwindConfig.theme.extend.colors['secondary-text']}`}
												highlightTextColor={'text-primary-text'}
												href="/dashboard/services"
											>
												Cancel
											</OutlineButton>
											<Button
												onClick={async () => {
													await BackendApi.deleteUser(router.query.id).catch(
														(err) => false
													);
													router.push('/dashboard/settings');
												}}
											>
												Delete
											</Button>
										</div>
									</div>
								</div>
							</>
						)}
						{isLoaded && user._id == router.query.id && (
							<p>You cannot delete your own user.</p>
						)}
						{!isLoaded && <p>Loading...</p>}
					</section>
				</main>
			</AuthDataWrapper>
		</>
	);
};
DashboardStaffAccountDeletePage.getInitialProps = authDataCtx;

export default DashboardStaffAccountDeletePage;
