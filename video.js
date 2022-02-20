/** @format */

document.addEventListener('load', () => {
	const videoWrapper = document.querySelector('.Video');
	const videoSource = videoWrapper.getAttribute('data-video');
	const thumbnail = videoWrapper.getAttribute('data-thumbnail');

	console.log('Droggelbecher videoElement: ', videoElement);

	console.log('Droggelbecher videoSource: ', videoSource);
	const videoElement = document.createElement('video');
	console.log('Droggelbecher video: ', video);

	videoElement.src = videoSource;
	videoElement.poster = thumbnail;
});
