import React from 'react';
import faker from 'faker';
import UserLink from '../../userlink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const ProfileAccountsContent = () => {
	return (
		<>
			<ul className="grid grid-cols-3 gap-3">
				{[
					{
						text: 'SolarBuilds',
						iconSrc:
							'https://www.mc-market.org/data/avatars/l/267/267316.jpg?1606007891',
						subText: 'Owner',
					},
					{
						text: 'Candor Services',
						iconSrc:
							'https://www.mc-market.org/data/avatars/s/107/107610.jpg?1615861381',
						subText: 'Member',
					},
					{
						text: 'Devout Services',
						iconSrc:
							'https://www.mc-market.org/data/avatars/s/86/86915.jpg?1614679267',
						subText: 'Owner',
					},
					{
						text: 'Revolt Crates',
						iconSrc:
							'https://www.mc-market.org/data/avatars/s/134/134985.jpg?1545594283',
						subText: 'Member',
					},
				].map((account, index) => {
					return (
						<li className="relative flex w-full p-3 space-x-4 text-base border-2 rounded-md group border-primary-border">
							<div
								className="flex-shrink-0 w-10 h-10 bg-cover rounded-md"
								style={{
									backgroundImage: `url('${account.iconSrc}')`,
								}}
							/>
							<div className="flex items-center w-full overflow-hidden">
								<p className="flex items-center justify-between w-full overflow-hidden select-none">
									<span className="font-medium text-primary-color">
										{account.text}
									</span>
									<span className="text-sm uppercase truncate">
										{account.subText}
									</span>
								</p>
							</div>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default ProfileAccountsContent;
