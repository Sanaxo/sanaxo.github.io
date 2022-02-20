/** @format */

document.addEventListener('load', () => {
	const videoWrapper = document.querySelector('.Video');
	const videoSource = videoElement.getAttribute('data-video');
	const thumbnail = videoElement.getAttribute('data-thumbnail');

	console.log('Droggelbecher videoElement: ', videoElement);

	console.log('Droggelbecher videoSource: ', videoSource);
	const video = document.createElement('video');
	console.log('Droggelbecher video: ', video);

	video.src = videoSource;
	video.poster = thumbnail;
});
