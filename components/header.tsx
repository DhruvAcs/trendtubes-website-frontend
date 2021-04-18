import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-regular-svg-icons';
import { faBars, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Button, OutlineButton } from './button';

// const Header = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => (
const Header = (props: { onMobileNavOpen?: () => any }) => {
	// const [showMobileModal, setShowMobileModal] = useState<boolean>(false);
	return (
		<header
			className="fixed top-0 w-full flex flex-col px-6.25% lg:px-15% py-5 z-50 bg-secondary-bg border-b-1 border-primary-border overflow-x-hidden" //fixed
		>
			<div className="flex items-center justify-between w-full">
				<div className="flex items-center space-x-8">
					<Link href="/">
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
					</Link>
					<ul className="items-center hidden space-x-8 font-medium lg:flex">
						{/* <li>
						<a className="text-secondary-text" href="/">
							Home
						</a>
					</li> */}
						<li>
							<a className="text-secondary-text" href="/services">
								Services
							</a>
						</li>
						<li>
							<a className="text-secondary-text" href="/accounts">
								Accounts
							</a>
						</li>
						{/* <li>
						<a className="text-secondary-text" href="/resources">
							Resources
						</a>
					</li> */}
						{/* <li>
						<a className="text-secondary-text" href="/support">
							Sponsors
						</a>
					</li> */}
						<li>
							<a className="text-secondary-text" href="/terms-of-service">
								TOS
							</a>
						</li>
					</ul>
				</div>
				<div className="items-center hidden space-x-8 lg:flex">
					<ul className="flex items-center space-x-8">
						<li>
							<a className="text-lg" href="/">
								<OutlineButton className="space-x-2" href="/contact">
									<FontAwesomeIcon icon={faPaperPlane} />
									<span>Contact Directly</span>
								</OutlineButton>
							</a>
						</li>
					</ul>
				</div>
				<div className="flex items-center lg:hidden">
					<ul className="flex items-center space-x-8">
						<li>
							<a
								className="text-lg"
								onClick={() => props.onMobileNavOpen && props.onMobileNavOpen()}
							>
								<Button size="small" className="space-x-3">
									<FontAwesomeIcon icon={faBars} />
									<p>Menu</p>
								</Button>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;
