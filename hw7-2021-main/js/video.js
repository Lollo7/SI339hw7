var video = document.getElementById('player1');;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

function load_page() {
	video.autoplay = false;
	video.loop = false;
}
window.addEventListener('load', load_page);


const playButton = document.getElementById('playButton');
const volumeValue = document.getElementById('volumeValue');
playButton.addEventListener('click', function () {
	if (video.paused) {
		video.play(); 
		playButton.textContent = 'Pause'; 
	} else {
		video.pause(); 
		playButton.textContent = 'Play'; 
	}
});


video.addEventListener('volumechange', function () {
	const volumePercentage = Math.round(video.volume * 100);
	volumeValue.textContent = volumePercentage + '%';
});

pauseButton.addEventListener('click', function () {
	if (!video.paused) {
		video.pause(); 
	}
});


// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

