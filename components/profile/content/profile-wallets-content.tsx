import React from 'react';
import faker from 'faker';
import UserLink from '../../userlink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const ProfileWalletsContent = () => {
	return (
		<>
			<p className="text-base">Click on any wallet to copy the address</p>
			<ul className="grid grid-cols-3 gap-3 mt-4">
				{[
					{
						text: 'Bitcoin',
						iconSrc:
							'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
						address: '3JJDFGmyBifRy1E4KwaDB17uppWMDEQvt3',
					},
					{
						text: 'Ethereum',
						iconSrc:
							'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
						address: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
					},
					{
						text: 'Cardano',
						iconSrc:
							'https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png',
						address:
							'DdzFFzCqrhspptP6PtdZpSEAdgUY2TTrwZj7xycuy5S6JqBUVW7hW4yijxEyddtW1fTiwbS1dSJs5D1y3s47Q6egSQSb4myVQq3qGbnL',
					},
					{
						text: 'Litecoin',
						iconSrc:
							'https://s2.coinmarketcap.com/static/img/coins/64x64/2.png',
						address: 'LajyQBeZaBA1NkZDeY8YT5RYYVRkXMvb2T',
					},
				].map((wallet, index) => {
					return (
						<li className="relative flex w-full p-3 space-x-4 text-base border-2 rounded-md group border-primary-border">
							<div
								className="flex-shrink-0 w-10 h-10 bg-cover rounded-md"
								style={{
									backgroundImage: `url('${wallet.iconSrc}')`,
								}}
							/>
							<div className="flex items-center w-full overflow-hidden">
								<p className="flex flex-col overflow-hidden select-none">
									<span className="font-medium text-primary-color">
										{wallet.text}
									</span>
									<span className="mt-1 truncate">{wallet.address}</span>
								</p>
							</div>
							<a className="absolute top-0 right-0 items-center justify-center hidden w-full h-full bg-opacity-95 bg-tertiary-bg group-hover:flex">
								<p className="font-medium select-none text-primary-color">
									Click to copy address
								</p>
							</a>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default ProfileWalletsContent;
