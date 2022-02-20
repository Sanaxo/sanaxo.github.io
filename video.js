/** @format */

document.addEventListener('DOMContentLoaded', () => {
	const videoWrapper = document.querySelector('.VideoWrapper');
	const videoSource = videoWrapper.getAttribute('data-video');
	const thumbnail = videoWrapper.getAttribute('data-thumbnail');
	const playbackIcons = videoWrapper.querySelectorAll('.playback-icon');
	const playButton = videoWrapper.querySelector('.Playbutton');

	const videoElement = document.createElement('video');

	videoElement.src = videoSource;
	videoElement.poster = thumbnail;
	videoElement.classList.add('Video');
	videoWrapper.appendChild(videoElement);

	function togglePlay() {
		if (videoElement.paused || videoElement.ended) {
			videoElement.play();
		} else {
			videoElement.pause();
		}
	}

	function updatePlayButton() {
		playbackIcons.forEach((icon) => icon.classList.toggle('hidden'));
	}

	playButton.addEventListener('click', togglePlay);
	videoElement.addEventListener('play', updatePlayButton);
	videoElement.addEventListener('pause', updatePlayButton);
});
