import React from 'react';
import faker from 'faker';
import UserLink from '../../userlink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faComment,
	faExternalLinkAlt,
	faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import {
	faDiscord,
	faSpotify,
	faSteam,
	faTwitch,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const ProfileConnectionsContent = () => {
	return (
		<>
			<ul className="grid grid-cols-3 gap-3">
				{[
					{
						text: 'Discord',
						iconSrc: faDiscord,
						handle: 'RiznSun',
						link: 'https://discord.com/user/RiznSun',
					},
					{
						text: 'Twitter',
						iconSrc: faTwitter,
						handle: 'RiznSun',
						link: 'https://twitter.com/RiznSun',
					},
					{
						text: 'Spotify',
						iconSrc: faSpotify,
						handle: 'RiznSun',
						link: 'https://spotify.com/RiznSun',
					},
					{
						text: 'Steam',
						iconSrc: faSteam,
						handle: 'RiznSun',
						link: 'https://steam.com/RiznSun',
					},
					{
						text: 'Twitch',
						iconSrc: faTwitch,
						handle: 'RiznSun',
						link: 'https://twitch.tv/RiznSun',
					},
				].map((connection, index) => {
					return (
						<li className="relative flex w-full p-4 space-x-4 text-base border-2 rounded-md group border-primary-border">
							<FontAwesomeIcon
								icon={connection.iconSrc}
								size={'2x'}
								className="text-primary-color"
							/>
							<div className="flex items-center w-full overflow-hidden">
								<p className="flex items-center justify-between w-full overflow-hidden">
									<span className="font-medium text-primary-text">
										{connection.handle}
									</span>
									<FontAwesomeIcon
										icon={faExternalLinkAlt}
										className="text-secondary-text"
									/>
								</p>
							</div>
						</li>
						// <li className="relative flex items-center w-full p-3 space-x-4 text-base border-2 rounded-md group border-primary-border">
						// 	<div className="flex items-center w-full space-x-3 overflow-hidden">
						// 		<FontAwesomeIcon
						// 			icon={connection.iconSrc}
						// 			size={'lg'}
						// 			className="text-primary-color"
						// 		/>
						// 		<p className="flex flex-col overflow-hidden">
						// 			<span className="font-medium truncate text-primary-text">
						// 				{connection.handle}
						// 			</span>
						// 		</p>
						// 	</div>
						// 	<a className="">
						// 		<FontAwesomeIcon
						// 			icon={faExternalLinkAlt}
						// 			className="text-secondary-text"
						// 		/>
						// 	</a>
						// </li>
					);
				})}
			</ul>
		</>
	);
};

export default ProfileConnectionsContent;
