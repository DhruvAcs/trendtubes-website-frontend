import Head from 'next/head';
import React, { createRef, useEffect } from 'react';

import Sidebar from '../../components/sidebar';
import { authDataCtx, AuthDataWrapper } from '../../auth/auth-data';

const DashboardIndexPage = ({ user }) => {
	const mainContentRef = createRef<HTMLDivElement>();

	useEffect(() => {
		// mainContentRef.current!.style.marginTop = `${
		// 	headerRef.current!.getBoundingClientRect().height
		// }px)`;
	}, []);

	// const router = useRouter();
	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link
					rel="stylesheet"
					href="https://unpkg.com/flickity@2/dist/flickity.min.css"
				/>
				<script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js" />
				<title>Home - Dashboard</title>
			</Head>
			<AuthDataWrapper user={user}>
				<main className="w-full grid grid-cols-8 h-screen" ref={mainContentRef}>
					<Sidebar />
					<section className="col-span-7 px-6.25% lg:px-15% pt-8 h-screen scrollbar scrollbar-thin scrollbar-thumb-primary-color scrollbar-track-quartiary-bg pb-8">
						<div>
							<h3>Content Management</h3>
							<p className="">Change the text on different pages</p>
						</div>
						<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
							<div className="p-6 bg-secondary-bg rounded-md col-span-2">
								<div className="flex items-center justify-between w-full">
									<h5 className="">Google Analytics</h5>
									<p className="p-2 bg-primary-triadic-color-1 bg-opacity-10 text-primary-triadic-color-1 rounded-md text-base w-fit">
										Connected
									</p>
								</div>
								<hr className="my-3" />
								<div className="overflow-hidden truncate">
									<a
										className="text-primary-color"
										href="https://analytics.google.com/analytics/web/#/p268588354/realtime/overview"
									>
										https://analytics.google.com/analytics/web/#/p268588354/realtime/overview
									</a>
								</div>
							</div>
							<div className="p-6 bg-secondary-bg rounded-md col-span-2">
								<div className="flex items-center justify-between w-full">
									<h5 className="">Shoppy Store</h5>
									<p className="p-2 bg-primary-triadic-color-1 bg-opacity-10 text-primary-triadic-color-1 rounded-md text-base w-fit">
										Connected
									</p>
								</div>
								<hr className="my-3" />
								<div className="overflow-hidden truncate">
									<a
										className="text-primary-color"
										href="https://shoppy.gg/home"
									>
										https://shoppy.gg/home
									</a>
								</div>
							</div>
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
