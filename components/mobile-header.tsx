import React, {
	ForwardedRef,
	forwardRef,
	MutableRefObject,
	RefObject,
	useState,
} from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-regular-svg-icons';
import {
	faBell,
	faUser,
	faBars,
	faSearch,
	faPaperPlane,
	faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { Button, OutlineButton } from './button';

// const Header = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => (
const MobileHeader = (props: {
	onMobileNavOpen?: () => any;
	onMobileNavClose?: () => any;
}) => {
	const [showMobileModal, setShowMobileModal] = useState<boolean>(false);
	return (
		<header
			className="fixed top-0 w-full h-full flex flex-col p-8 z-50 bg-secondary-bg border-b-1 border-primary-border overflow-x-hidden" //fixed
		>
			{/* <div className="top-0 left-0 right-0 bg-secondary-bg w-full h-full z-50 fixed p-6">
				<h4>Navigation</h4>
			</div> */}
			<div className="flex items-center space-between w-full">
				<div>
					<div
						className="text-xl py-2 px-4 bg-tertiary-bg w-fit rounded-md cursor-pointer"
						onClick={() => props.onMobileNavClose && props.onMobileNavClose()}
					>
						<FontAwesomeIcon icon={faTimes} />
					</div>
					<h4 className="mt-6">Navigation</h4>
				</div>
			</div>
			<ul className="mt-6 text-xl space-y-4">
				<li>
					<a className="text-secondary-text" href="/services">
						Home
					</a>
				</li>
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
				<li>
					<a className="text-secondary-text" href="/accounts">
						TOS
					</a>
				</li>
			</ul>
		</header>
	);
};

export default MobileHeader;
