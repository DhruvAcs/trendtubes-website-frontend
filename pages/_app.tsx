import '../styles/styles.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import * as BrandsIcons from '@fortawesome/free-brands-svg-icons';
import React, { useEffect } from 'react';
import { DefaultSeo } from 'next-seo';

export default function MyApp({ Component, pageProps }) {
	useEffect(() => {
		const iconList = Object.keys(Icons)
			.filter((key) => key !== 'fas' && key !== 'prefix')
			.map((icon) => Icons[icon]);

		library.add(...iconList);
		console.log('Icons imported');
		const brandIconsList = Object.keys(BrandsIcons)
			.filter((key) => key !== 'fab' && key !== 'prefix')
			.map((icon) => BrandsIcons[icon]);
		console.log('Brands Icons imported');

		library.add(...iconList);
		library.add(...brandIconsList);
	}, []);
	return (
		<>
			<DefaultSeo
				openGraph={{
					type: 'website',
					locale: 'en_US',
					url: 'https://www.trendtubes.com/',
					site_name: 'TrendTubes',
				}}
			/>
			<Component {...pageProps} />
		</>
	);
}
