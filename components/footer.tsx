import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { findSubPath } from '../utils/general-utils';

const Footer = (props: { cmsData?: any }) => {
	return (
		<footer className="px-6.25% lg:px-15% flex flex-col py-10 bg-secondary-bg border-t-1 border-primary-border overflow-x-hidden">
			<div className="grid grid-cols-2 md:grid-cols-4 gap-12">
				<div className="col-span-2">
					<a className="flex items-center space-x-3">
						{/* <div className="rounded-md w-7 h-7 bg-primary-color" /> */}
						<img
							src="static/trendtubes-icon.svg"
							className="w-8 transform rotate-90"
						/>
						<h4 className="">
							Trend
							<span className="font-medium">
								Tubes<span className="text-xl">.com</span>
							</span>
						</h4>
					</a>
					<p className="mt-6 text-base leading-relaxed">
						{(props.cmsData &&
							findSubPath(props.cmsData, `footer.description`)?.value) ||
							''}
					</p>
					<p className="text-sm mt-6">
						© Copyright Marketplace. All rights reserved.
					</p>
				</div>
				<div className="col-span-2">
					<h5>Social Media</h5>
					<ul className="mt-6 flex items-center gap-2">
						{props.cmsData &&
							findSubPath(props.cmsData, `footer.socials`)?.value &&
							findSubPath(props.cmsData, `footer.socials`)
								?.value.split('\n')
								.map((item) => {
									var formatIcon = (item.split('|')[0] || 'times').replace(
										'fa',
										''
									);
									formatIcon =
										formatIcon.charAt(0).toLowerCase() + formatIcon.substr(1);
									formatIcon = formatIcon
										.split(/(?=[A-Z])/)
										.join('-')
										.toLowerCase();
									return (
										<li>
											<a
												{...(item.split('|')[1] || ''
													? { href: item.split('|')[1] }
													: null)}
												className="w-12 h-12 rounded-md bg-tertiary-bg flex items-center justify-center text-2xl text-primary-color"
											>
												<FontAwesomeIcon icon={['fab', formatIcon]} />
											</a>
										</li>
									);
								})}
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
