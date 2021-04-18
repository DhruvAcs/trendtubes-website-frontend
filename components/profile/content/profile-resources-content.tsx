import React from 'react';
import faker from 'faker';
import UserLink from '../../userlink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const ProfileResourcesContent = () => {
	return (
		<>
			<ul className="space-y-4">
				{Array(4)
					.fill(null)
					.map((_, index) => {
						return (
							<li className="flex pb-4 space-x-4 text-base border-b-2 border-primary-border last:border-0 last:pb-0">
								<div
									className="flex-shrink-0 w-16 h-16 bg-cover rounded-md"
									style={{
										backgroundImage:
											"url('https://www.mc-market.org/data/resource_icons/16/16860.jpg?1597179633')",
									}}
								/>
								<div className="w-full overflow-hidden">
									<a className="w-full text-lg font-medium truncate text-primary-color">
										[NEW] ⭐ Ultimate CraftingStore Theme ⭐ | Easy Config ⚡
										Custom Color Schemes ⚡ Amazing Features V-1.1
									</a>
									<p className="mt-1 truncate text-primary-text">
										The best CraftingStore theme on the market.
									</p>
									<div className="flex items-center justify-between flex-grow mt-4 space-x-1 font-medium">
										<div className="flex items-center space-x-3">
											<div className="px-2 bg-opacity-50 rounded-md text-primary-text bg-primary-color">
												<p>{!(index % 2) ? 'Free' : '$9.95'}</p>
											</div>
											<p>Category: Plugins</p>
										</div>
										<p>Created on Feb 12th, 2021</p>
									</div>
								</div>
							</li>
						);
					})}
			</ul>
		</>
	);
};

export default ProfileResourcesContent;
