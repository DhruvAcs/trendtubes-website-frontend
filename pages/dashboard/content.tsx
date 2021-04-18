import Head from 'next/head';
import React, { createRef, useEffect, useRef, useState } from 'react';
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
import DashboardContentHomeTab from '../../components/dashboard/content/dashboard-content-home-tab';
import { AsyncCMSData } from '../../components/cms-data-component';
import { capitalizeFirst } from '../../utils/general-utils';
import Markdown from 'markdown-to-jsx';
import tailwindConfig from '../../tailwind.config';
import { authDataCtx, AuthDataWrapper } from '../../auth/auth-data';
import * as _ from 'lodash';
import { useRouter } from 'next/router';
import { BackendApi } from '../../utils/backend-api';
import Popup from 'reactjs-popup';

const DashboardContentPage = ({ user, cookie }) => {
	const headerRef = createRef<HTMLDivElement>();
	const mainContentRef = createRef<HTMLDivElement>();
	// const [currentTab, setCurrentTab] = useState('home');

	useEffect(() => {
		// mainContentRef.current!.style.marginTop = `${
		// 	headerRef.current!.getBoundingClientRect().height
		// }px)`;
	}, []);
	const handleFormChange = (e) => {
		updateFormData({
			...formData,

			// Trimming any whitespace
			[e.target.name]: e.target.value.trim(),
		});
	};
	const [hasEditedFormData, setHasEditedFormData] = useState<boolean>(false);
	const [formData, updateFormData] = React.useState<any>({});

	const router = useRouter();

	const [isPopupOpen, setPopupOpen] = useState(false);
	const [popupMessage, setPopupMessage] = useState('Default message');
	const closePopup = () => setPopupOpen(false);

	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link
					rel="stylesheet"
					href="https://unpkg.com/flickity@2/dist/flickity.min.css"
				/>
				<script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js" />
				<title>Content - Dashboard</title>
			</Head>
			{/* <Header ref={headerRef} /> */}
			<AuthDataWrapper user={user} permissions={['EDIT_CONTENT']}>
				<main className="w-full grid grid-cols-8 h-screen" ref={mainContentRef}>
					<Sidebar />
					<section className="col-span-7 px-6.25% lg:px-15% pt-8 h-screen scrollbar scrollbar-thin scrollbar-thumb-primary-color scrollbar-track-quartiary-bg pb-8">
						<Popup open={isPopupOpen} closeOnDocumentClick onClose={closePopup}>
							<div className="text-primary-color p-4 rounded-md bg-primary-color bg-opacity-10 absolute top-20 left-0 right-0 w-fit">
								<p className="whitespace-nowrap">{popupMessage}</p>
							</div>
						</Popup>
						<div className="flex items-center justify-between">
							<div>
								<h3>Content Management</h3>
								<p className="">Change the text on different pages</p>
							</div>
							{/* <div>
							<Button className="space-x-2">
								<FontAwesomeIcon icon={faPlus} />
								<p>Add Account</p>
							</Button>
						</div> */}
						</div>
						{/* <hr className="my-4" /> */}
						<AsyncCMSData path="">
							{({ isPending, data, error }) => {
								if (isPending) return 'Loading...';
								if (error) return <p>Error loading CMS</p>;
								if (data) {
									console.log('data', data);
									return (
										<>
											<div className="w-full mt-8">
												<ul className="flex items-center border-b-2 border-primary-border">
													{data
														.map((item) => {
															return {
																name: capitalizeFirst(
																	item.path.split('.').join(' ')
																),
																// tab: item.path.replace('.', '-'),
																tab: item.path,
															};
														})
														.map((tabItem) => {
															return (
																<li>
																	<a
																		className={
																			'px-6 pb-3 cursor-pointer border-b-2 block' +
																			(tabItem.tab ==
																			(router.query.tab || 'home')
																				? ' border-primary-color text-primary-color'
																				: ' border-transparent text-secondary-text')
																		}
																		href={`/dashboard/content/?tab=${tabItem.tab}`}
																	>
																		{tabItem.name}
																	</a>
																</li>
															);
														})}
												</ul>
											</div>
											<div className="mt-4">
												{/* {currentTab == 'staff' && <DashboardContentStaffTab />} */}
												<div className="">
													<div className="w-full bg-secondary-bg rounded-lg">
														<form
															onSubmit={async (e) => {
																e.preventDefault();

																var dataCopy = data.find(
																	(basePath) =>
																		basePath.path ==
																		(router.query.tab || 'home')
																).subPaths;

																console.log('formData', formData);
																console.log('dataCopy', dataCopy);
																Object.keys(formData).map((key) => {
																	_.set(
																		_.find(dataCopy, { path: key }),
																		'value',
																		formData[key]
																	);
																});

																console.log('newDataCopy', dataCopy);
																try {
																	const apiResponse = await BackendApi.editCMSPath(
																		router.query.tab || 'home',
																		dataCopy
																	);
																	setPopupMessage(
																		apiResponse.data?.message || 'Success'
																	);
																	setPopupOpen(true);
																} catch (e) {
																	setPopupMessage(e.message || 'Failed');
																	setPopupOpen(true);
																}
															}}
														>
															<div className="p-6 space-y-4">
																{data.find(
																	(basePath) =>
																		basePath.path ==
																		(router.query.tab || 'home')
																)
																	? data
																			.find(
																				(basePath) =>
																					basePath.path ==
																					(router.query.tab || 'home')
																			)
																			.subPaths.map((subPath) => {
																				console.log('SUBPATH', subPath);
																				console.log(
																					'SUBPATH 2',
																					data.find(
																						(basePath) =>
																							basePath.path ==
																							(router.query.tab || 'home')
																					).subPaths
																				);
																				return (
																					<div>
																						<div>
																							<p className="font-medium text-primary-text capitalize">
																								{capitalizeFirst(
																									subPath.path
																										.split('.')
																										.join(' ')
																								)}
																							</p>
																							<textarea
																								defaultValue={subPath.value}
																								onChange={(e) => {
																									!hasEditedFormData &&
																										setHasEditedFormData(true);
																									handleFormChange(e);
																								}}
																								name={subPath.path}
																								className="bg-tertiary-bg border-none rounded-md bg-transparent w-full mt-2 placeholder-secondary-text"
																							>
																								{/* {subPath.value} */}
																								{/* <Markdown>{subPath.value}</Markdown> */}
																							</textarea>
																						</div>
																					</div>
																				);
																			})
																	: null}
															</div>
															<div className="border-t-2 border-primary-border p-6 flex items-center justify-between">
																<div className="space-x-4 flex items-center">
																	<input
																		type="submit"
																		disabled={!hasEditedFormData}
																		// className={
																		// 	'bg-primary-color cursor-pointer text-primary-text py-3 px-6 text-base rounded-md w-fit font-bold flex items-center justify-center'
																		// }
																		className={
																			(hasEditedFormData
																				? 'bg-primary-color cursor-pointer text-primary-text '
																				: 'bg-tertiary-bg cursor-not-allowed text-secondary-text ') +
																			'py-3 px-6 text-base rounded-md w-fit font-bold flex items-center justify-center'
																		}
																		value="Save Changes"
																	/>
																</div>
															</div>
														</form>
													</div>
												</div>
											</div>
										</>
									);
								}
								return null;
							}}
						</AsyncCMSData>
					</section>
				</main>
			</AuthDataWrapper>
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
