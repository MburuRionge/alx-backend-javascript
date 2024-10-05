export default function loadBalancer(chinaDownload, USDownload) {
	const Promise.race([chinaDownload, USDownload]).then((value) => value);
	return data;
}
