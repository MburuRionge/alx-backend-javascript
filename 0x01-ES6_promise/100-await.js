import { uploadPhoto, createUser } from './utils';s

export default async function asyncUploadUser() {
	const promise1 = uploadPhoto();
	const promise2 = createUser();
	const obj = {}

	await Promise.all([promise1, promise2])
	.then((values) => {
		obj.photo = values[0]
		obj.user = values[1]
	})
	.catch(() => {
		obj.photo = null
		obj.user = null
	})

	return obj;
}
