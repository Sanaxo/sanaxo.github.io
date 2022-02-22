/** @format */

document.addEventListener('DOMContentLoaded', () => {
	const videoWrapper = document.querySelector('.VideoWrapper');
	const videoSource = videoWrapper.getAttribute('data-video');
	const thumbnail = videoWrapper.getAttribute('data-thumbnail');
	const playbackIcons = videoWrapper.querySelectorAll('.playback-icon');
	const playButton = videoWrapper.querySelector('.PlayButton');

	const videoElement = document.createElement('video');

	videoElement.src = videoSource;
	videoElement.poster = thumbnail;
	videoElement.classList.add('Video');
	videoElement.setAttribute('controls', 'true');
	videoWrapper.appendChild(videoElement);

	function togglePlay() {
		if (videoElement.paused || videoElement.ended) {
			setTimeout(() => {
				videoElement.play();
			}, 20);
		} else {
			setTimeout(() => {
				videoElement.pause();
			}, 20);
		}
	}

	function updatePlayButton() {
		playbackIcons.forEach((icon) => icon.classList.toggle('hidden'));
	}

	function animatePlayback() {
		playButton.animate(
			[
				{
					opacity: 1,
					transform: 'scale(1)',
				},
				{
					opacity: 0,
					transform: 'scale(1.3)',
				},
			],
			{
				duration: 500,
			}
		);
	}

	playButton.addEventListener('click', togglePlay);
	videoElement.addEventListener('play', updatePlayButton);
	videoElement.addEventListener('pause', updatePlayButton);
	videoElement.addEventListener('click', togglePlay);
	videoElement.addEventListener('click', animatePlayback);
});
