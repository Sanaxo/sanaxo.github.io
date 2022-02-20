/** @format */

document.addEventListener('DOMContentLoaded', () => {
	const videoWrapper = document.querySelector('.VideoWrapper');
	const videoSource = videoWrapper.getAttribute('data-video');
	const thumbnail = videoWrapper.getAttribute('data-thumbnail');
	const playButton = videoWrapper.getAttribute('data-playbutton');

	console.log('Droggelbecher videoElement: ', videoWrapper);

	console.log('Droggelbecher videoSource: ', videoSource);
	const videoElement = document.createElement('video');
	console.log('Droggelbecher video: ', videoElement);

	videoElement.src = videoSource;
	videoElement.poster = thumbnail;
	videoElement.classList.add('Video');

	const playButtonElement = document.createElement('img');
	playButton.classList.add('PlayButton');

	videoWrapper.appendChild(playButtonElement);
	videoWrapper.appendChild(videoElement);
});

function togglePlay() {
	if (video.paused || video.ended) {
		video.play();
	} else {
		video.pause();
	}
}
