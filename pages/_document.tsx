import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					{/* <script
						async
						src="https://www.googletagmanager.com/gtag/js?id=G-PT10Y2SNBF"
					></script> */}
					<script
						async
						src="https://www.googletagmanager.com/gtag/js?id=G-BEZCM2H910%22%3E"
					></script>
					<script src="/scripts/google-analytics.js"></script>
				</Head>
				{/* <div className="flex items-center text-base font-medium space-x-4 fixed bottom-12 right-12 px-5 py-3 bg-primary-color bg-opacity-50 rounded-md cursor-pointer hover:text-primary-text hover:bg-opacity-100">
					<p>Back to top</p>
					<FontAwesomeIcon icon={faChevronUp} size={'1x'} />
				</div> */}
				<body className="scrollbar scrollbar-thin scrollbar-thumb-primary-color scrollbar-track-quartiary-bg">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
