import { signUpUser } from '4-user-promise';

import { uploadPhoto } from '5-photo-reject';


export default function handleProfileSignup(firstName, lastName, fileName) {
	const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
	Promise.allSettled(promises).then((result) => {
		console.log(result);
		const newInfo = [];

		for (const res of result) {
			console.log(res.status);
			if (res.status === 'fulfilled') {
				newInfo.push({ status: res.status, value: res.reason })
			} else if (res.status === 'rejected') {
				newInfo.push({status: res.status, value: res.reason })
			}
		}
		console.log(newInfo);
		return newInfo;
	})
}
