import Head from 'next/head';
import React, { createRef, useEffect, useRef, useState } from 'react';
import Header from '../components/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Footer from '../components/footer';
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
} from '../utils/constants';
import Sidebar from '../components/sidebar';
import {
	faIdBadge,
	faIdCard,
	faCheckCircle,
	faTimesCircle,
	faEllipsisH,
	faSearch,
	faLayerGroup,
} from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { faJava, faJs, faPython } from '@fortawesome/free-brands-svg-icons';
import { OutlineButton } from '../components/button';
import MobileHeader from '../components/mobile-header';

const FourOFourPage = () => {
	// const headerRef = createRef<HTMLDivElement>();
	// const mainContentRef = createRef<HTMLDivElement>();

	// useEffect(() => {
	// 	mainContentRef.current!.style.height = `calc(100vh - ${
	// 		headerRef.current!.getBoundingClientRect().height
	// 	}px)`;
	// }, []);
	const [showMobileModal, setShowMobileModal] = useState<boolean>(false);

	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link
					rel="stylesheet"
					href="https://unpkg.com/flickity@2/dist/flickity.min.css"
				/>
				<script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js" />
				<title>404 Not Found</title>
			</Head>
			<main className="w-full h-full">
				<Header onMobileNavOpen={() => setShowMobileModal(true)} />
				{showMobileModal && (
					<MobileHeader onMobileNavClose={() => setShowMobileModal(false)} />
				)}
				{/* <div className="w-full overflow-x-hidden" ref={mainContentRef}> */}
				<div className="px-12 h-screen">
					<div className="flex flex-col items-center justify-center h-full">
						<object data="404-not-found.svg" type="image/svg+xml" />
						<img src="/static/404-not-found.svg" className="w-1/6" />
						<h2 className="mt-12">404 Page Not Found</h2>
						<p className="text-xl mt-2">The requested page does not exist.</p>
					</div>
				</div>
			</main>
		</>
	);
};

export default FourOFourPage;

export const getStaticProps = async () => {
	return {
		props: {},
	};
};
