import {
	faInstagram,
	faTiktok,
	faTwitch,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const capitalizeFirst = (str: string) => {
	return str.charAt(0).toUpperCase() + str.toLowerCase().substr(1);
};

const getPlatformIcon = (platform: string) => {
	return platform.toUpperCase() == 'YOUTUBE'
		? faYoutube
		: platform.toUpperCase() == 'INSTAGRAM'
		? faInstagram
		: platform.toUpperCase() == 'TIKTOK'
		? faTiktok
		: platform.toUpperCase() == 'TWITCH'
		? faTwitch
		: faQuestionCircle;
};

const isValidURL = (str) => {
	var pattern = new RegExp(
		'^(https?:\\/\\/)?' + // protocol
			'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
			'((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
			'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
			'(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
			'(\\#[-a-z\\d_]*)?$',
		'i'
	); // fragment locator
	return !!pattern.test(str);
};

function isValidEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

const findSubPath = (base, path) => {
	return base.subPaths.find(
		(subPath) => subPath.path.toLowerCase() == path.toLowerCase()
	);
};

export {
	capitalizeFirst,
	getPlatformIcon,
	isValidURL,
	isValidEmail,
	findSubPath,
};
