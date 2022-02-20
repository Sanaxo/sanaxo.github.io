/** @format */

document.addEventListener('DOMContentLoaded', () => {
	const videoWrapper = document.querySelector('.VideoWrapper');
	const videoSource = videoWrapper.getAttribute('data-video');
	const thumbnail = videoWrapper.getAttribute('data-thumbnail');

	console.log('Droggelbecher videoElement: ', videoWrapper);

	console.log('Droggelbecher videoSource: ', videoSource);
	const videoElement = document.createElement('video');
	console.log('Droggelbecher video: ', videoElement);

	videoElement.src = videoSource;
	videoElement.poster = thumbnail;

	videoElement.classList.add('Video');
	videoWrapper.appendChild(videoElement);
});
