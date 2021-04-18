import {
	faBox,
	faCog,
	faHome,
	faSignOutAlt,
	faSitemap,
	faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { BackendApi } from '../utils/backend-api';
const TABS = [
	// {
	// 	name: 'Dashboard',
	// 	link: '/dashboard',
	// 	icon: faHome,
	// },
	{
		name: 'Home',
		link: '/dashboard',
		icon: faHome,
	},
	{
		name: 'Accounts',
		link: '/dashboard/accounts',
		icon: faUserPlus,
	},
	// {
	// 	name: 'Account Orders',
	// 	link: '/dashboard/accounts-orders',
	// 	icon: faFileAlt,
	// },
	{
		name: 'Services',
		link: '/dashboard/services',
		icon: faBox,
	},
	// {
	// 	name: 'Service Orders',
	// 	link: '/dashboard/services-orders',
	// 	icon: faFileAlt,
	// },
	{
		name: 'Content',
		link: '/dashboard/content',
		icon: faSitemap,
	},
	{
		name: 'Settings',
		link: '/dashboard/settings',
		icon: faCog,
	},
	// {
	// 	name: 'Developers',
	// 	link: '/developers',
	// 	icon: faCode,
	// },
];

const Sidebar = () => {
	const router = useRouter();
	// !activeTab && activeTab == router.pathname;
	// console.log('activeTab', activeTab);
	// console.log('pathName', router.pathname);

	const isLink = (link: string) => {
		return router.pathname == link;
	};

	return (
		<aside className="w-full bg-secondary-bg px-3 py-6 h-full max-h-screen flex flex-col">
			<a className="flex items-center space-x-3">
				{/* <div className="rounded-md w-7 h-7 bg-primary-color" /> */}
				<img
					src="/static/trendtubes-icon.svg"
					className="w-7 transform rotate-90"
				/>
				<h4 className="text-lg">
					Trend
					<span className="font-medium">
						Tubes<span className="text-base">.com</span>
					</span>
				</h4>
			</a>
			<ul className="space-y-4 mt-8 flex flex-col h-full">
				{TABS.map((tab, index) => {
					return (
						<li
							className={
								'rounded-md group hover:bg-tertiary-bg hover:text-primary-color ' +
								(isLink(tab.link) ? 'bg-tertiary-bg' : '')
							}
							key={index}
						>
							<a
								className="px-3 py-2 flex items-center space-x-3 group-hover:text-primary-color"
								href={tab.link}
							>
								<div className="w-7 flex flex-col items-center">
									<FontAwesomeIcon
										icon={tab.icon}
										style={{ fontSize: '20px' }}
										className={isLink(tab.link) ? 'text-primary-color' : ''}
									/>
								</div>
								<p className={isLink(tab.link) ? 'text-primary-color' : ''}>
									{tab.name}
								</p>
							</a>
						</li>
					);
				})}
			</ul>
			<div className="flex-grow h-full flex flex-col justify-end">
				<div className="rounded-md group hover:bg-tertiary-bg hover:text-primary-color">
					<a
						className="px-3 py-2 flex items-center space-x-3 group-hover:text-primary-color"
						onClick={async () => {
							//TODO: FIX COOKIES
							await BackendApi.authLogout();
							// destroyCookie(null, `trendtubes.session`, { path: `/` });
							// console.log('doc cookie', Cookies.get());
							router.push('/');
						}}
					>
						<div className="w-7 flex flex-col items-center">
							<FontAwesomeIcon
								icon={faSignOutAlt}
								style={{ fontSize: '20px' }}
							/>
						</div>
						<p>Logout</p>
					</a>
				</div>
			</div>
		</aside>
	);
};

// Sidebar.getInitialProps = authDataCtx;

export default Sidebar;
