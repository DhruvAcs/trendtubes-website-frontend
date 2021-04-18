import React, {
	ForwardedRef,
	forwardRef,
	MutableRefObject,
	RefObject,
} from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => (
	<header
		className="flex flex-col p-6 py-5 z-50 bg-secondary-bg border-b-1 border-primary-border" //fixed
		ref={ref}
	>
		<div className="flex items-center justify-between w-full px-12.5%">
			<div className="flex items-center space-x-6">
				<div className="flex items-center space-x-4">
					<div className="w-7 h-7 bg-primary-color rounded-full" />
					<h4 className="">
						License<span className="font-medium">Pro</span>
					</h4>
				</div>
				<div className="rounded-md bg-tertiary-bg px-3 py-2 text-base space-x-3 overflow-hidden">
					<FontAwesomeIcon icon={faSearch} />
					<input
						className="bg-transparent truncate"
						placeholder={'Search Marketplace for posts, services, etc'}
					/>
				</div>
			</div>
			<div>
				<ul className="flex items-center space-x-8">
					<li>
						<a className="text-lg" href="/">
							<FontAwesomeIcon icon={faBell} />
						</a>
					</li>
					<li>
						<a className="text-lg" href="/">
							<FontAwesomeIcon icon={faUser} />
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div className="mt-6 px-12.5%">
			<ul className="flex items-center space-x-8 font-medium">
				<li>
					<a className="text-secondary-text">Home</a>
				</li>
				<li>
					<a className="text-secondary-text">Categories</a>
				</li>
				<li>
					<a className="text-secondary-text">Resources</a>
				</li>
				<li>
					<a className="text-secondary-text">Support</a>
				</li>
				<li>
					<a className="text-secondary-text">Chatbox</a>
				</li>
			</ul>
		</div>
	</header>
));

export default Header;
