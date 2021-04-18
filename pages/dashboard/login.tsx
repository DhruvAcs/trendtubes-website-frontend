import Head from 'next/head';
import React, { createRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { default as faker } from 'faker';
import { Button } from '../../components/button';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

const DashboardLoginPage = () => {
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
				<title>Login - Dashboard</title>
			</Head>
			{/* <Header ref={headerRef} /> */}
			<main className="w-full" ref={mainContentRef}>
				<section className="px-6.25% lg:px-15% flex flex-col items-center justify-center h-screen">
					<div className="p-8 bg-secondary-bg w-fit text-center rounded-lg">
						<h3>Sign in</h3>
						<p className="text-xl mt-2">Get access to dashboard system</p>
						{/* <hr className="my-8" /> */}
						<div className="mt-8">
							<Button
								className="space-x-2"
								style={{ width: '100%' }}
								href="http://localhost:3005/auth"
							>
								<FontAwesomeIcon icon={faDiscord} />
								<p>Sign in via Discord</p>
							</Button>
						</div>
					</div>
				</section>

				{/* <Footer /> */}
			</main>
			{/* <Footer /> */}
		</>
	);
};

export default DashboardLoginPage;

// export const getStaticProps = async () => {
// 	return {
// 		props: {},
// 	};
// };
