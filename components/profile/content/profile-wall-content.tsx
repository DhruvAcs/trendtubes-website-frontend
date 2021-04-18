import React from 'react';
import faker from 'faker';
import UserLink from '../../userlink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const ProfileWallContent = () => {
	return (
		<>
			<ul className="space-y-4">
				{Array(4)
					.fill(null)
					.map(() => {
						return (
							<li className="flex w-full pb-4 space-x-4 text-base border-b-2 border-primary-border last:border-0 last:pb-0">
								<div
									className="flex-shrink-0 w-16 h-16 bg-cover rounded-md"
									style={{
										backgroundImage:
											"url('https://www.mc-market.org/data/avatars/m/234/234843.jpg?1590689171')",
									}}
								/>
								<div className="w-full">
									<p className="space-x-1">
										<UserLink />
										<span>{faker.lorem.paragraphs(1)}</span>
									</p>
									<div className="flex items-center justify-between mt-3">
										<div className="flex items-center space-x-4 font-medium text-primary-color">
											<p className="space-x-1">
												<FontAwesomeIcon icon={faThumbsUp} />
												<span>Like</span>
											</p>
											<p className="space-x-1">
												<FontAwesomeIcon icon={faComment} />
												<span>Reply</span>
											</p>
										</div>
										<p className="space-x-1 font-medium">
											<span>Feb 12th, 2021</span>
											<span> • </span>
											<span>Report</span>
										</p>
									</div>
								</div>
							</li>
						);
					})}
			</ul>
		</>
	);
};

export default ProfileWallContent;
