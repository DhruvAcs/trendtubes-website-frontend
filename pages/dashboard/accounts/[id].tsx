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
import UserLink from '../../../components/userlink';
import { Button, OutlineButton } from '../../../components/button';
import tailwindConfig from '../../../tailwind.config';
import { useRouter } from 'next/router';
import { AccountProductData } from '../../../components/dashboard/accounts/dashboard-account-data';
import { capitalizeFirst, getPlatformIcon } from '../../../utils/general-utils';
import OutsideClickHandler from 'react-outside-click-handler';
import { BackendApi } from '../../../utils/backend-api';
import { authDataCtx, AuthDataWrapper } from '../../../auth/auth-data';

const DashboardAccountsAccountPage = ({ user }) => {
	const headerRef = createRef<HTMLDivElement>();
	const mainContentRef = createRef<HTMLDivElement>();
	const [isLoaded, setIsLoaded] = useState<boolean>(false);

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
	const [formData, updateFormData] = React.useState({
		platform: '',
		type: '',
		tags: '',
		title: '',
		price: '',
		description: '',
		stock: '',
		accounts: '',
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
				<title>Edit Account - Dashboard</title>
			</Head>
			<AuthDataWrapper user={user} permissions={['EDIT_ACCOUNT']}>
				{/* <Header ref={headerRef} /> */}
				<main className="w-full grid grid-cols-8 h-screen" ref={mainContentRef}>
					<Sidebar />
					<section className="col-span-7 px-6.25% lg:px-15% pt-8 h-screen overflow-y-scroll scrollbar scrollbar-thin scrollbar-thumb-primary-color scrollbar-track-quartiary-bg pb-8">
						<div className="flex items-center justify-between">
							<div>
								<a className="text-secondary-text" href="/dashboard/accounts">
									<p className="space-x-2 text-base">
										{/* <span>Accounts</span>
								<FontAwesomeIcon icon={faChevronRight} />
								<span>euUrsDt</span> */}
										<FontAwesomeIcon icon={faArrowLeft} />
										<span>Back</span>
									</p>
								</a>
								<h4 className="mt-2">Edit Account</h4>
							</div>
						</div>
						{/* <hr className="my-4" /> */}
						{/* 'ZuL21qoa68POi-LJIB_yU' */}
						{isLoaded && (
							<AccountProductData id={router.query.id}>
								{({ isPending, data, error }) => {
									if (isPending) return 'Loading account...';
									if (error) return 'Error loading account...';
									if (data) {
										console.log('data found', data);
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
															const apiResponse = await BackendApi.editAccount(
																data.sellixProductId,
																formData
															);
															setPopupMessage('Success');
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
															<div className="">
																<div className="grid grid-cols-4 gap-4">
																	<div className="">
																		<p className="font-medium text-primary-text">
																			Platform
																		</p>
																		<p className="text-base">
																			This is the type of account
																		</p>
																		{/* <div className="p-2 border-2 border-primary-border mt-4"></div> */}
																		<div className="relative inline-block text-left w-full group">
																			<select
																				required
																				className="bg-tertiary-bg border-none rounded-md focus:outline-none mt-4 w-full"
																				name="platform"
																				onChange={(e) => {
																					!hasEditedFormData &&
																						setHasEditedFormData(true);
																					handleFormChange(e);
																				}}
																			>
																				<option value="" disabled hidden>
																					Choose platform
																				</option>
																				<option
																					value="YOUTUBE"
																					selected={data.platform == 'YOUTUBE'}
																				>
																					Youtube
																				</option>
																				<option
																					value="TWITCH"
																					selected={data.platform == 'TWITCH'}
																				>
																					Twitch
																				</option>
																				<option
																					value="TIKTOK"
																					selected={data.platform == 'TIKTOK'}
																				>
																					TikTok
																				</option>
																				<option
																					value="OTHER"
																					selected={data.platform == 'OTHER'}
																				>
																					Other
																				</option>
																			</select>
																		</div>
																	</div>
																	<div className="">
																		<p className="font-medium text-primary-text">
																			Product Type
																		</p>
																		<p className="text-base">
																			Auto Account(s), Manual Account
																		</p>
																		{/* <div className="p-2 border-2 border-primary-border mt-4"></div> */}
																		<div className="relative inline-block text-left w-full group">
																			<select
																				required
																				className="bg-tertiary-bg border-none rounded-md focus:outline-none mt-4 w-full"
																				name="type"
																				onChange={(e) => {
																					!hasEditedFormData &&
																						setHasEditedFormData(true);
																					handleFormChange(e);
																				}}
																			>
																				<option
																					value=""
																					selected
																					disabled
																					hidden
																				>
																					Choose type
																				</option>
																				<option
																					value="serials"
																					selected={
																						data.sellixProductData.type ==
																						'SERIALS'
																					}
																				>
																					Automatic Transfer
																				</option>
																				<option
																					value="service"
																					selected={
																						data.sellixProductData.type ==
																						'SERVICE'
																					}
																				>
																					Manual Transfer
																				</option>
																			</select>
																		</div>
																	</div>
																	<div className="col-span-2">
																		<p className="font-medium text-primary-text">
																			Tags
																		</p>
																		<p className="text-base">
																			Add tags like "Manual Transfer", etc
																			(separated by commas)
																		</p>
																		{/* <div className="p-2 border-2 border-primary-border mt-4"></div> */}
																		<textarea
																			className="w-full mt-4 bg-tertiary-bg border-none rounded-md"
																			style={{
																				height: '40px',
																				minHeight: '40px',
																				maxHeight: '40px',
																			}}
																			onChange={(e) => {
																				!hasEditedFormData &&
																					setHasEditedFormData(true);
																				handleFormChange(e);
																			}}
																			defaultValue={data.tags.join(',')}
																			name="tags"
																		></textarea>
																	</div>
																</div>
																<div className="mt-4 grid grid-cols-4 gap-4">
																	<div className="col-span-2">
																		<p className="font-medium text-primary-text">
																			Title
																		</p>
																		<p className="text-base">
																			Change the title of the product
																		</p>
																		{/* <div className="p-2 border-2 border-primary-border mt-4"></div> */}
																		<textarea
																			className="w-full mt-4 bg-tertiary-bg border-none rounded-md"
																			style={{
																				height: '40px',
																				minHeight: '40px',
																				maxHeight: '40px',
																			}}
																			onChange={(e) => {
																				!hasEditedFormData &&
																					setHasEditedFormData(true);
																				handleFormChange(e);
																			}}
																			required
																			defaultValue={
																				data.sellixProductData.title
																			}
																			name="title"
																		></textarea>
																	</div>
																	<div className="col-span-2">
																		<p className="font-medium text-primary-text">
																			Price
																		</p>
																		<p className="text-base">
																			Change the price of the product
																		</p>
																		<div className="mt-4">
																			<input
																				required
																				type="number"
																				step="0.01"
																				min={0}
																				className="bg-tertiary-bg border-none rounded-md focus:outline-none col-span-2 w-full px-3 py-2"
																				name="price"
																				defaultValue={
																					data.sellixProductData.price
																				}
																				onChange={(e) => {
																					!hasEditedFormData &&
																						setHasEditedFormData(true);
																					handleFormChange(e);
																				}}
																			/>
																		</div>
																	</div>
																</div>
																<div className="mt-4">
																	<p className="font-medium text-primary-text">
																		Description
																	</p>
																	<p className="text-base">
																		This is what will be displayed on the
																		accounts list page
																	</p>
																	{/* <div className="p-2 border-2 border-primary-border mt-4"></div> */}
																	<textarea
																		className="w-full mt-4 bg-tertiary-bg border-none rounded-md"
																		style={{
																			height: '200px',
																			minHeight: '200px',
																		}}
																		onChange={(e) => {
																			!hasEditedFormData &&
																				setHasEditedFormData(true);
																			handleFormChange(e);
																		}}
																		name="description"
																		defaultValue={
																			data.sellixProductData.description
																		}
																		required
																	></textarea>
																</div>
																{/* {data.sellixProductData.type == 'service' && (
																<div className="mt-4">
																	<p className="text-base uppercase">
																		Manual Transfer Options
																	</p>
																	<p className="font-medium text-primary-text mt-4">
																		Stock
																	</p>
																	<p className="text-base">
																		This is how much of the account you have in
																		stock
																	</p>
																	<div className="mt-4 grid grid-cols-4 gap-4">
																		<input
																			required
																			type="number"
																			className="bg-tertiary-bg border-none rounded-md focus:outline-none col-span-2 w-full px-3 py-2"
																			name="stock"
																			value={1}
																			onChange={handleFormChange}
																		/>
																	</div>
																</div>
															)} */}
																{(!hasEditedFormData
																	? data.sellixProductData.type == 'SERIALS'
																	: formData.type == 'serials') && (
																	<>
																		<hr className="my-4" />
																		<div className="mt-4">
																			<p className="text-base uppercase">
																				Automatic Transfer Options
																			</p>
																			<p className="font-medium text-primary-text mt-4">
																				Supply/List
																			</p>
																			<p className="text-base">
																				Enter a list of account details, 1
																				account on each line. (ex: email:pass
																				NEWLINE email:pass...)
																			</p>
																			{/* <div className="p-2 border-2 border-primary-border mt-4"></div> */}
																			<div className="mt-2 grid grid-cols-4 gap-4">
																				<textarea
																					className="w-full mt-4 bg-tertiary-bg border-none rounded-md col-span-4"
																					style={{
																						height: '200px',
																						minHeight: '200px',
																					}}
																					defaultValue={data.sellixProductData.serials
																						// .map((acc) => acc.account)
																						.join('\n')}
																					onChange={(e) => {
																						!hasEditedFormData &&
																							setHasEditedFormData(true);
																						handleFormChange(e);
																					}}
																					name="serials"
																					required
																				></textarea>
																			</div>
																		</div>
																	</>
																)}
																{/* <hr className="my-4" /> */}
															</div>
														</div>
													</div>
													<div className="border-t-2 border-primary-border p-6 flex items-center justify-between">
														<OutlineButton
															color={
																tailwindConfig.theme.extend.colors[
																	'secondary-text'
																]
															}
															textColor={
																tailwindConfig.theme.extend.colors[
																	'secondary-text'
																]
															}
															target="_blank"
															href={`https://dashboard.sellix.io/products/edit/${data.sellixProductId}`}
														>
															View Shoppy Product
														</OutlineButton>
														<div className="flex items-center">
															<input
																type="submit"
																// disabled={!hasEditedFormData}
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
							</AccountProductData>
						)}
					</section>
				</main>
			</AuthDataWrapper>
		</>
	);
};
DashboardAccountsAccountPage.getInitialProps = authDataCtx;

export default DashboardAccountsAccountPage;

// export const getStaticProps = async () => {
// 	return {
// 		props: {},
// 	};
// };
