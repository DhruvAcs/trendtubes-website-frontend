import Head from 'next/head';
import React, { createRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { default as faker } from 'faker';
import Sidebar from '../../../components/sidebar';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { ServiceProductData } from '../../../components/dashboard/services/dashboard-service-data';
import { BackendApi } from '../../../utils/backend-api';
import Popup from 'reactjs-popup';
import { AuthDataWrapper } from '../../../auth/auth-data';

const DashboardServicesServicePage = () => {
	const mainContentRef = createRef<HTMLDivElement>();
	const [isLoaded, setIsLoaded] = useState<boolean>(false);
	// const [isTitleDropdownActive, setIsTitleDropdownActive] = useState<boolean>(
	// 	false
	// );
	// const [
	// 	isCategoryDropdownActive,
	// 	setIsCategoryDropdownActive,
	// ] = useState<boolean>(false);

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
		title: '',
		category: '',
		description: '',
		imageUrl: '',
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
				<title>Edit Service - Dashboard</title>
			</Head>
			{/* <Header ref={headerRef} /> */}
			<AuthDataWrapper permissions={['EDIT_SERVICE']}>
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
								<h4 className="mt-2">Edit Service</h4>
							</div>
						</div>
						{/* <hr className="my-4" /> */}
						{/* 'ZuL21qoa68POi-LJIB_yU' */}
						{isLoaded && (
							<ServiceProductData id={router.query.id}>
								{({ isPending, data, error }) => {
									if (isPending) return 'Loading service...';
									if (error) return 'Error loading service...';
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
															const apiResponse = await BackendApi.editService(
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
																		name="title"
																		defaultValue={data.title || ''}
																	></textarea>
																</div>
																<div className="col-span-1">
																	<p className="font-medium text-primary-text">
																		Image Url
																	</p>
																	<p className="text-base">
																		Add a service image
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
																		name="imageUrl"
																		defaultValue={data.imageUrl || ''}
																	></textarea>
																</div>
																<div className="col-span-1">
																	<p className="font-medium text-primary-text">
																		Category
																	</p>
																	<p className="text-base whitespace-nowrap truncate">
																		Set the category (optional)
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
																		name="category"
																		defaultValue={data.category || ''}
																	></textarea>
																</div>
																{/* <div className="col-span-1">
																	<p className="font-medium text-primary-text">
																		Price
																	</p>
																	<p className="text-base">
																		Set to 0 to require a quote
																	</p>
																	<div className="mt-4">
																		<input
																			required
																			type="number"
																			step="0.01"
																			className="bg-tertiary-bg border-none rounded-md focus:outline-none col-span-2 w-full px-3 py-2"
																			name="price"
																			onChange={handleFormChange}
																			defaultValue={data.price || 0}
																		/>
																	</div>
																</div> */}
															</div>
															<div className="mt-4">
																<p className="font-medium text-primary-text">
																	Description
																</p>
																<p className="text-base">
																	This is what will be displayed on the services
																	list page
																</p>
																{/* <div className="p-2 border-2 border-primary-border mt-4"></div> */}
																<textarea
																	className="w-full mt-4 bg-tertiary-bg border-none rounded-md"
																	style={{
																		height: '200px',
																		minHeight: '200px',
																	}}
																	defaultValue={data.description || ''}
																	name="description"
																	onChange={(e) => {
																		!hasEditedFormData &&
																			setHasEditedFormData(true);
																		handleFormChange(e);
																	}}
																></textarea>
															</div>
															{/* <hr className="my-4" /> */}
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
							</ServiceProductData>
						)}
					</section>
					{/* <Footer /> */}
				</main>
			</AuthDataWrapper>
			{/* <Footer /> */}
		</>
	);
};
// DashboardServicesServicePage.getInitialProps = authDataCtx;

export default DashboardServicesServicePage;

// export const getStaticProps = async () => {
// 	return {
// 		props: {},
// 	};
// };
