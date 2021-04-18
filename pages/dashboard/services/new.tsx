import Head from 'next/head';
import React, { createRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { default as faker } from 'faker';
import Sidebar from '../../../components/sidebar';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { BackendApi } from '../../../utils/backend-api';
import Popup from 'reactjs-popup';
import { authDataCtx, AuthDataWrapper } from '../../../auth/auth-data';

const DashboardAccountsCreatePage = ({ user }) => {
	const mainContentRef = createRef<HTMLDivElement>();
	const [, setIsLoaded] = useState<boolean>(false);

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
				<title>New Service - Dashboard</title>
			</Head>
			{/* <Header ref={headerRef} /> */}
			<AuthDataWrapper user={user} permissions={['CREATE_SERVICE']}>
				<main
					className="w-full grid grid-cols-8 h-screen relative"
					ref={mainContentRef}
				>
					<Sidebar />
					<section className="col-span-7 px-6.25% lg:px-15% pt-8 h-screen scrollbar scrollbar-thin scrollbar-thumb-primary-color scrollbar-track-quartiary-bg pb-8">
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
								<h4 className="mt-2">Create Service Product</h4>
							</div>
						</div>
						{/* <hr className="my-4" /> */}
						{/* 'ZuL21qoa68POi-LJIB_yU' */}

						<div className="w-full mt-4 bg-secondary-bg rounded-lg">
							{/* <p></p> */}
							<form
								ref={formRef}
								id="new-account-form"
								method="POST"
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
										const apiResponse = await BackendApi.createService(
											formData
										);
										setPopupMessage(apiResponse.data?.message || 'Success');
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
												<div className="col-span-2">
													<p className="font-medium text-primary-text">Title</p>
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
															!hasEditedFormData && setHasEditedFormData(true);
															handleFormChange(e);
														}}
														required
														name="title"
													></textarea>
												</div>
												<div className="col-span-1">
													<p className="font-medium text-primary-text">
														Image Url
													</p>
													<p className="text-base">Add a service image</p>
													{/* <div className="p-2 border-2 border-primary-border mt-4"></div> */}
													<textarea
														className="w-full mt-4 bg-tertiary-bg border-none rounded-md"
														style={{
															height: '40px',
															minHeight: '40px',
															maxHeight: '40px',
														}}
														onChange={(e) => {
															!hasEditedFormData && setHasEditedFormData(true);
															handleFormChange(e);
														}}
														name="imageUrl"
													></textarea>
												</div>
												<div className="col-span-1">
													<p className="font-medium text-primary-text">
														Category
													</p>
													<p className="text-base">
														Add a service category (optional)
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
															!hasEditedFormData && setHasEditedFormData(true);
															handleFormChange(e);
														}}
														name="category"
													></textarea>
												</div>
												{/* <div className="col-span-1">
													<p className="font-medium text-primary-text">Price</p>
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
														/>
													</div>
												</div> */}
											</div>
											<div className="mt-4">
												<p className="font-medium text-primary-text">
													Description
												</p>
												<p className="text-base">
													This is what will be displayed on the accounts list
													page
												</p>
												{/* <div className="p-2 border-2 border-primary-border mt-4"></div> */}
												<textarea
													className="w-full mt-4 bg-tertiary-bg border-none rounded-md"
													style={{
														height: '200px',
														minHeight: '200px',
													}}
													defaultValue={''}
													onChange={(e) => {
														!hasEditedFormData && setHasEditedFormData(true);
														handleFormChange(e);
													}}
													name="description"
													required
												></textarea>
											</div>
										</div>
									</div>
								</div>
								<div className="border-t-2 border-primary-border p-6 flex items-center justify-between">
									<div className="space-x-4 flex items-center">
										{/* <Button
										style={{
											backgroundColor: !hasEditedServiceData
												? tailwindConfig.theme.extend.colors['tertiary-bg']
												: tailwindConfig.theme.extend.colors['primary-color'],
										}}
										className={
											!hasEditedServiceData
												? 'cursor-not-allowed'
												: 'cursor-pointer'
                    }
                    type="submit"
									>
										Save Service
									</Button> */}
										<input
											type="submit"
											// disabled={!hasEditedFormData}
											className={
												'bg-primary-color cursor-pointer text-primary-text py-3 px-6 text-base rounded-md w-fit font-bold flex items-center justify-center'
											}
											value="Create Service"
										/>
									</div>
								</div>
							</form>
						</div>
					</section>
					{/* <Footer /> */}
				</main>
			</AuthDataWrapper>
		</>
	);
};
DashboardAccountsCreatePage.getInitialProps = authDataCtx;

export default DashboardAccountsCreatePage;
