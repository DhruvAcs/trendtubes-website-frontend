import React from 'react';
import faker from 'faker';
import UserLink from '../../userlink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const ProfilePostsContent = () => {
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
											"url('https://www.mc-market.org/data/avatars/m/234/234843.jpg?1590689171')",
									}}
								/>
								<div className="w-full overflow-hidden">
									<a className="w-full text-lg font-medium text-primary-color">
										Selling Hireme.link | Portfolio.Wtf | Mc-Forums.Com/Net/Org
										| Accounts.Wtf
									</a>
									<p className="mt-1 truncate">{faker.lorem.paragraphs(1)}</p>
									<p className="flex items-center justify-between flex-grow mt-4 space-x-1 font-medium">
										<span>
											{index % 2 ? 'Post' : 'Thread'} by{' '}
											<span>
												<UserLink />
											</span>{' '}
											in forum{' '}
											<span className="font-base text-primary-color">
												General Discussion
											</span>{' '}
										</span>
										<span>11:23 AM, Feb 12th, 2021</span>
									</p>
								</div>
							</li>
						);
					})}
			</ul>
		</>
	);
};

export default ProfilePostsContent;
