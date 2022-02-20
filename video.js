/** @format */

document.addEventListener('DOMContentLoaded', () => {
	const videoWrapper = document.querySelector('.VideoWrapper');
	const videoSource = videoWrapper.getAttribute('data-video');
	const thumbnail = videoWrapper.getAttribute('data-thumbnail');
	const playbackIcons = videoWrapper.querySelectorAll('.playback-icon');

	const videoElement = document.createElement('video');

	videoElement.src = videoSource;
	videoElement.poster = thumbnail;
	videoElement.classList.add('Video');
	videoWrapper.appendChild(videoElement);
});

function togglePlay() {
	if (videoElement.paused || videoElement.ended) {
		videoElement.play();
	} else {
		videoElement.pause();
	}
}

function updatePlayButton() {
	playbackIcons.forEach((icon) => icon.classList.toggle('hidden'));

	if (video.paused) {
		playButton.setAttribute('data-title', 'Play (k)');
	} else {
		playButton.setAttribute('data-title', 'Pause (k)');
	}
}
