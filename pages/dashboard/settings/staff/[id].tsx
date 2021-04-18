import Head from 'next/head';
import React, { createRef, useEffect, useRef, useState } from 'react';
import Header from '../../../../components/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { default as faker } from 'faker';
import faker, { lorem } from 'faker';
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
import { useRouter } from 'next/router';
import { AccountProductData } from '../../../../components/dashboard/accounts/dashboard-account-data';
import {
	capitalizeFirst,
	getPlatformIcon,
} from '../../../../utils/general-utils';
import OutsideClickHandler from 'react-outside-click-handler';
import { ServiceProductData } from '../../../../components/dashboard/services/dashboard-service-data';
import { BackendApi } from '../../../../utils/backend-api';
import Popup from 'reactjs-popup';
import { authDataCtx, AuthDataWrapper } from '../../../../auth/auth-data';
import { StaffUserData } from '../../../../components/dashboard/settings/dashboard-staff-data';

const DashboardSettingsStaffEditPage = ({ user }) => {
	const headerRef = createRef<HTMLDivElement>();
	const mainContentRef = createRef<HTMLDivElement>();
	const [isLoaded, setIsLoaded] = useState<boolean>(false);
	// const [isTitleDropdownActive, setIsTitleDropdownActive] = useState<boolean>(
	// 	false
	// );
	// const [
	// 	isCategoryDropdownActive,
	// 	setIsCategoryDropdownActive,
	// ] = useState<boolean>(false);
	const [editedServiceData, setEditedServiceData] = useState<any>({});
	const [
		isProductTypeDropdownActive,
		setProductTypeDropdownActive,
	] = useState<boolean>(false);

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
	}, [router.isReady]);

	const handleFormChange = (e) => {
		updateFormData({
			...formData,

			// Trimming any whitespace
			[e.target.name]: e.target.value.trim(),
		});
	};
	const [hasEditedFormData, setHasEditedFormData] = useState<boolean>(false);
	const [formData, updateFormData] = React.useState<{ permissions: {} }>({
		permissions: {},
	});
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
				<title>Edit Staff Account - Dashboard</title>
			</Head>
			{/* <Header ref={headerRef} /> */}
			<AuthDataWrapper user={user} permissions={['EDIT_SERVICE']}>
				<main className="w-full grid grid-cols-8 h-screen" ref={mainContentRef}>
					<Sidebar />
					<section className="col-span-7 px-6.25% lg:px-15% pt-8 h-screen overflow-y-scroll scrollbar scrollbar-thin scrollbar-thumb-primary-color scrollbar-track-quartiary-bg pb-8">
						<Popup open={isPopupOpen} closeOnDocumentClick onClose={closePopup}>
							<div className="text-primary-color p-4 rounded-md bg-primary-color bg-opacity-10 absolute top-20 left-0 right-0 w-fit">
								<p className="whitespace-nowrap">{popupMessage}</p>
							</div>
						</Popup>
						<div className="flex items-center justify-between">
							<div>
								<a className="text-secondary-text" href="/dashboard/services">
									<p className="space-x-2 text-base">
										{/* <span>Accounts</span>
								<FontAwesomeIcon icon={faChevronRight} />
								<span>euUrsDt</span> */}
										<FontAwesomeIcon icon={faArrowLeft} />
										<span>Back</span>
									</p>
								</a>
								<h4 className="mt-2">Edit Staff Account</h4>
							</div>
						</div>
						{/* <hr className="my-4" /> */}
						{/* 'ZuL21qoa68POi-LJIB_yU' */}
						{isLoaded && (
							<StaffUserData id={router.query.id}>
								{({ isPending, data, error }) => {
									if (isPending) return 'Loading staff account...';
									if (error) return 'Error loading staff account...';
									if (data) {
										console.log('data found', data);
										// updateFormData((prevState) => {
										// 	return { ...prevState, permissions: data.permission };
										// });
										return (
											<div className="w-full mt-4 bg-secondary-bg rounded-lg">
												{/* <p></p> */}
												<form
													id="edit-account-form"
													method="PUT"
													action="http://localhost:3005/accounts"
													onSubmit={async (e) => {
														e.preventDefault();
														// const data = new FormData(formRef.current as HTMLFormElement);
														// const data = new FormData(
														// 	document.getElementById('new-account-form') as HTMLFormElement
														// );

														console.log('formData', formData);
														// if (formData['type'] == 'service') {

														//   delete formData['accounts'];
														// }
														// formData['type'] == 'accounts' && delete formData['stock'];
														try {
															const apiResponse = await BackendApi.editUser(
																data._id,
																formData
															);
															console.log(apiResponse.data);
															setPopupMessage(
																apiResponse.data?.message || 'Success'
															);
															setPopupOpen(true);
														} catch (e) {
															console.log(e.message);
															setPopupMessage(e.message || 'Failed');
															setPopupOpen(true);
														}
													}}
												>
													<div className="p-6">
														<div className="">
															<div className="grid grid-cols-4 gap-4">
																<div className="col-span-2">
																	<ul className="space-y-1">
																		{[
																			'CREATE_ACCOUNT',
																			'EDIT_ACCOUNT',
																			'DELETE_ACCOUNT',
																			'CREATE_SERVICE',
																			'EDIT_SERVICE',
																			'DELETE_SERVICE',
																			'EDIT_CONTENT',
																		].map((perm) => {
																			return (
																				<li className="space-x-2">
																					<input
																						type="checkbox"
																						id={
																							'form-perm-' + perm.toLowerCase()
																						}
																						className="bg-secondary-bg border-1 border-primary-border rounded-sm"
																						checked={
																							Object.keys(
																								formData.permissions
																							).includes(perm)
																								? formData.permissions[perm]
																								: data.permissions.includes(
																										perm
																								  )
																						}
																						onClick={() => {
																							!hasEditedFormData &&
																								setHasEditedFormData(true);
																							updateFormData((prevState) => {
																								return {
																									...prevState,
																									permissions: {
																										...prevState.permissions,
																										[perm]: Object.keys(
																											prevState.permissions
																										).includes(perm)
																											? !prevState.permissions[
																													perm
																											  ]
																											: !data.permissions.includes(
																													perm
																											  ),
																									},
																								};
																							});
																						}}
																					/>
																					<label
																						htmlFor={
																							'form-perm-' + perm.toLowerCase()
																						}
																						className="select-none"
																					>
																						{capitalizeFirst(
																							perm.replace('_', ' ')
																						)}
																					</label>
																				</li>
																			);
																		})}
																	</ul>
																</div>
															</div>
														</div>
													</div>
													<div className="border-t-2 border-primary-border p-6 flex items-center justify-between">
														<div className="space-x-4 flex items-center">
															<input
																type="submit"
																disabled={!hasEditedFormData}
																className={
																	(hasEditedFormData
																		? 'bg-primary-color cursor-pointer text-primary-text '
																		: 'bg-tertiary-bg cursor-not-allowed text-secondary-text ') +
																	'py-3 px-6 text-base rounded-md w-fit font-bold flex items-center justify-center'
																}
																value="Apply Changes"
															/>
														</div>
													</div>
												</form>
											</div>
										);
										return null;
									}
								}}
							</StaffUserData>
						)}
					</section>
					{/* <Footer /> */}
				</main>
			</AuthDataWrapper>
			{/* <Footer /> */}
		</>
	);
};
DashboardSettingsStaffEditPage.getInitialProps = authDataCtx;

export default DashboardSettingsStaffEditPage;
