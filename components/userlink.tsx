import Link from 'next/link';
import React, { ReactElement, ReactNode } from 'react';

const UserLink = ({
	className,
	children,
	name,
}: {
	className?: string;
	children?: ReactElement;
	name?: string;
}) => {
	const newChildren = children ? (
		React.cloneElement(children, { className: className })
	) : (
		<div></div>
	);
	return (
		<Link href="/users/1">
			{children ? (
				<div className="text-yellow-400">{children}</div>
			) : (
				// { newChildren }
				<a className={`text-yellow-400 font-medium ${className}`}>
					{name || 'RiznSun'}
				</a>
			)}
		</Link>
	);
};

export default UserLink;
