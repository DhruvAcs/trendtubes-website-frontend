import Head from 'next/head';
import React, { createRef, useEffect } from 'react';

import Sidebar from '../../components/sidebar';
import { AuthDataWrapper } from '../../auth/auth-data';

const DashboardIndexPage = () => {
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
			<AuthDataWrapper>
				<main className="w-full grid grid-cols-8 h-screen" ref={mainContentRef}>
					<Sidebar />
					<section className="col-span-7 px-6.25% lg:px-15% pt-8 h-screen scrollbar scrollbar-thin scrollbar-thumb-primary-color scrollbar-track-quartiary-bg pb-8">
						<div>
							<h3>Home</h3>
							<p className="">This is the home page of the dashboard.</p>
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
									<h5 className="">Sellix Store</h5>
									<p className="p-2 bg-primary-triadic-color-1 bg-opacity-10 text-primary-triadic-color-1 rounded-md text-base w-fit">
										Connected
									</p>
								</div>
								<hr className="my-3" />
								<div className="overflow-hidden truncate">
									<a
										className="text-primary-color"
										href="https://dashboard.sellix.io/"
									>
										https://dashboard.sellix.io/
									</a>
								</div>
							</div>
							<div className="p-6 bg-secondary-bg rounded-md col-span-2">
								<div className="flex items-center justify-between w-full">
									<h5 className="">Netlify (Frontend)</h5>
									<p className="p-2 bg-primary-triadic-color-1 bg-opacity-10 text-primary-triadic-color-1 rounded-md text-base w-fit">
										Connected
									</p>
								</div>
								<hr className="my-3" />
								<div className="overflow-hidden truncate">
									<a
										className="text-primary-color"
										href="https://app.netlify.com/"
									>
										https://app.netlify.com/
									</a>
								</div>
							</div>
							<div className="p-6 bg-secondary-bg rounded-md col-span-2">
								<div className="flex items-center justify-between w-full">
									<h5 className="">Vultr (Backend)</h5>
									<p className="p-2 bg-primary-triadic-color-1 bg-opacity-10 text-primary-triadic-color-1 rounded-md text-base w-fit">
										Connected
									</p>
								</div>
								<hr className="my-3" />
								<div className="overflow-hidden truncate">
									<a
										className="text-primary-color"
										href="https://my.vultr.com/"
									>
										https://my.vultr.com/
									</a>
								</div>
							</div>
							<div className="p-6 bg-secondary-bg rounded-md col-span-2">
								<div className="flex items-center justify-between w-full">
									<h5 className="">MongoDB (Database)</h5>
									<p className="p-2 bg-primary-triadic-color-1 bg-opacity-10 text-primary-triadic-color-1 rounded-md text-base w-fit">
										Connected
									</p>
								</div>
								<hr className="my-3" />
								<div className="overflow-hidden truncate">
									<a
										className="text-primary-color"
										href="https://cloud.mongodb.com/"
									>
										https://cloud.mongodb.com/
									</a>
								</div>
							</div>
							<div className="p-6 bg-secondary-bg rounded-md col-span-2">
								<div className="flex items-center justify-between w-full">
									<h5 className="">GoDaddy (Domain)</h5>
									<p className="p-2 bg-primary-triadic-color-1 bg-opacity-10 text-primary-triadic-color-1 rounded-md text-base w-fit">
										Connected
									</p>
								</div>
								<hr className="my-3" />
								<div className="overflow-hidden truncate">
									<a
										className="text-primary-color"
										href="https://account.godaddy.com/products"
									>
										https://account.godaddy.com/products
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

// DashboardIndexPage.getInitialProps = authDataCtx;

export default DashboardIndexPage;

// export const getStaticProps = async () => {
// 	return {
// 		props: {},
// 	};
// };
