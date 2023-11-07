// var video = document.getElementById('player1');

// window.addEventListener("load", function() {
// 	console.log("Good job opening the window")

// });

// function load_page() {
// 	video.autoplay = false;
// 	video.loop = false;
// }
// window.addEventListener('load', load_page);


// const playButton = document.getElementById('play');
// const volumeValue = document.getElementById('slider');


// playButton.addEventListener('click', function () {
// 	if (video.paused) {
// 		video.play(); 
// 		playButton.textContent = 'Pause'; 
// 	} else {
// 		video.pause(); 
// 		playButton.textContent = 'Play'; 
// 	}
// });


// video.addEventListener('volumechange', function () {
// 	const volumePercentage = Math.round(video.volume * 100);
// 	volumeValue.textContent = volumePercentage + '%';
// });

// var pauseButton = document.getElementByIdI('pause'); 

// pauseButton.addEventListener('click', function () {
// 	if (!video.paused) {
// 		video.pause(); 
// 	}
// 	console.log("Pause pressed")
// });


// // document.querySelector("#play").addEventListener("click", function() {
// // 	console.log("Play Video");
// // });


window.addEventListener("load", function() {
    var video = document.querySelector("#player1");

    console.log("Window has been opened")

    video.autoplay = false;
    video.loop = false;

    document.querySelector("#play").addEventListener("click", function() {
        console.log("Play Video");
        video.play();
        document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
    });

    document.querySelector("#pause").addEventListener("click", function() {
        console.log("Pause Video");
        video.pause();
    });

    document.querySelector("#slower").addEventListener("click", function() {
        console.log("Slow Down Video");
        video.playbackRate *= 0.9;
        console.log(video.playbackRate);
    });

    document.querySelector("#faster").addEventListener("click", function() {
        console.log("Speed Up Video");
        video.playbackRate /= 0.9;
        console.log(video.playbackRate);
    });
    document.querySelector("#skip").addEventListener("click", function() {
        console.log("Skip Ahead");
        if(video.currentTime + 10 > video.duration){
            video.currentTime = 0;
        }
        else{
            video.currentTime += 10;
        }
        console.log(video.currentTime);
    });

    document.querySelector("#mute").addEventListener("click", function() {
        console.log("Mute");
        if(video.muted == false){
            video.muted = true;
            this.innerHTML = "Unmute"
        }
        else{
            video.muted = false;
            this.innerHTML = "Mute"
        }
    });

    document.querySelector("#slider").addEventListener("change", function() {
        console.log("Volume Slider");
        video.volume = this.value/100;
        document.querySelector("#volume").innerHTML = video.volume*100 + "%";
    });

    document.querySelector("#vintage").addEventListener("click", function() {
        console.log("Old School");
        video.classList.add("oldSchool");
    });

    document.querySelector("#orig").addEventListener("click", function() {
        console.log("Original");
        video.classList.remove("oldSchool");
    });
});
