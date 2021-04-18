import React from 'react';
import UserLink from '.././userlink';

const PostProfileSidebarCard = (props: { className?: string }) => {
	return (
		<div
			className={
				'h-full text-center rounded-md bg-tertiary-bg ' +
				(props.className || '')
			}
		>
			<div className="flex flex-col items-center px-6 py-4 rounded-t-md border-b-1 border-secondary-border">
				<div
					className="relative w-32 h-32 bg-cover rounded-md"
					style={{
						backgroundImage:
							"url('https://www.mc-market.org/data/avatars/m/234/234843.jpg?1590689171')",
					}}
				>
					{/* <div className="absolute top-0 right-0 w-6 h-6 rounded-bl-full bg-positive-cta-color" /> */}
					<div
						className="absolute top-0 right-0"
						style={{
							width: '0',
							height: '0',
							borderStyle: 'solid',
							borderWidth: '0 20px 20px 0',
							borderColor: 'transparent #94ff51 transparent transparent',
						}}
					/>
				</div>
				<UserLink className="mt-4 text-xl" />
				<p>Software Developer</p>
			</div>
			<div className="px-6 py-3 space-y-1 border-b-1 border-secondary-border">
				<p className="flex items-center justify-between w-full">
					<span className="">Reputation</span>
					<span className="font-medium text-primary-color">+12</span>
				</p>
				{/* <p className="flex items-center justify-between w-full">
      <span className="">Discord</span>
      <span className="font-medium truncate text-primary-color">
        RiznSun#7591
      </span>
    </p> */}
			</div>
			<div className="px-6 py-4 border-b-1 border-secondary-border">
				<ul className="space-y-2">
					<li className="py-1 text-base font-medium text-white rounded-md bg-primary-color">
						Owner
					</li>
					<li
						className="py-1 text-base font-medium text-white rounded-md"
						style={{ backgroundColor: '#ffbc51' }}
					>
						Supreme
					</li>
					<li className="py-1 text-base font-medium text-white rounded-md bg-primary-color">
						Premium
					</li>
				</ul>
			</div>
			<div className="px-6 py-4">
				<ul className="space-y-1">
					<li className="flex items-center justify-between text-base">
						<p>Joined:</p>
						<p>Jan 2021</p>
					</li>
					<li className="flex items-center justify-between text-base">
						<p>Posts:</p>
						<p>24</p>
					</li>
					<li className="flex items-center justify-between text-base">
						<p>Reactions:</p>
						<p>121</p>
					</li>
					<li className="flex items-center justify-between text-base">
						<p>Age:</p>
						<p>24</p>
					</li>
					<li className="flex items-center justify-between text-base">
						<p>Gender:</p>
						<p>Male</p>
					</li>
				</ul>
			</div>
			{/* <img src="https://www.mc-market.org/data/avatars/m/234/234843.jpg?1590689171" /> */}
		</div>
	);
};
export default PostProfileSidebarCard;
