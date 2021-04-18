import Head from 'next/head';
import React, { createRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { default as faker } from 'faker';
import Sidebar from '../../../components/sidebar';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Button, OutlineButton } from '../../../components/button';
import tailwindConfig from '../../../tailwind.config';
import { useRouter } from 'next/router';
import { BackendApi } from '../../../utils/backend-api';
import { authDataCtx, AuthDataWrapper } from '../../../auth/auth-data';

const DashboardAccountsCreatePage = ({ user }) => {
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
				<title>Delete Account - Dashboard</title>
			</Head>
			{/* <Header ref={headerRef} /> */}
			<AuthDataWrapper user={user} permissions={['DELETE_ACCOUNT']}>
				<main
					className="w-full grid grid-cols-8 h-screen relative"
					ref={mainContentRef}
				>
					<Sidebar />
					<section className="col-span-7 px-6.25% lg:px-15% pt-8 h-screen scrollbar scrollbar-thin scrollbar-thumb-primary-color scrollbar-track-quartiary-bg pb-8">
						{isLoaded && (
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
										<h4 className="mt-2">Delete Account Product</h4>
									</div>
								</div>
								{/* <hr className="my-4" /> */}
								{/* 'ZuL21qoa68POi-LJIB_yU' */}

								<div className="w-full mt-4 bg-secondary-bg rounded-lg">
									<div className="p-6">
										<p>
											Are you sure you want to delete this account product? This
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
													await BackendApi.deleteAccount(router.query.id).catch(
														(_) => false
													);
													router.push('/dashboard/accounts');
												}}
											>
												Delete
											</Button>
										</div>
									</div>
								</div>
							</>
						)}
						{!isLoaded && <p>Loading...</p>}
					</section>
				</main>
			</AuthDataWrapper>
		</>
	);
};
DashboardAccountsCreatePage.getInitialProps = authDataCtx;

export default DashboardAccountsCreatePage;
