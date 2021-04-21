import Head from 'next/head';
import React, { createRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { default as faker } from 'faker';
import Sidebar from '../../components/sidebar';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../components/button';
import { DashboardAccountsListApp } from '../../components/dashboard/accounts/dashboard-accounts-list';
import { AuthDataWrapper } from '../../auth/auth-data';

const DashboardAccountsPage = () => {
	// const headerRef = createRef<HTMLDivElement>();
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
				<title>Accounts - Dashboard</title>
			</Head>
			{/* <Header ref={headerRef} /> */}
			<AuthDataWrapper permissions={['EDIT_SERVICE']}>
				<main className="w-full grid grid-cols-8 h-screen" ref={mainContentRef}>
					<Sidebar />
					<section className="col-span-7 px-6.25% lg:px-15% pt-8">
						<div className="flex items-center justify-between">
							<div>
								<h3>Accounts</h3>
								<p className="">
									Add, modify, and delete accounts for the online store here.
								</p>
							</div>
							<div>
								<Button className="space-x-2" href="/dashboard/accounts/new">
									<FontAwesomeIcon icon={faPlus} />
									<p>Add Account</p>
								</Button>
							</div>
						</div>
						{/* <hr className="my-4" /> */}
						<div className="w-full mt-8 bg-secondary-bg rounded-lg">
							<DashboardAccountsListApp></DashboardAccountsListApp>
						</div>
					</section>
					{/* <Footer /> */}
				</main>
			</AuthDataWrapper>
			{/* <Footer /> */}
		</>
	);
};

// DashboardAccountsPage.getInitialProps = authDataCtx;
export default DashboardAccountsPage;

// export const getStaticProps = async () => {
// 	return {
// 		props: {},
// 	};
// };
