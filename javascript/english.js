
// the videos play sector in english navbar
'use strict'
var listVideo = document.querySelectorAll(".video_list .vid");
var mainVideo = document.querySelector(".main_video video");
var title = document.querySelector(".main_video .title");

listVideo.forEach((video) => {
  video.onclick = () => {
    listVideo.forEach((vid) => vid.classList.remove("active"));
    video.classList.add("active");
    if (video.classList.contains("active")) {
      var src = video.children[0].getAttribute("src");
      mainVideo.src = src;
      var text = video.children[1].innerHTML;
      title.innerHTML = text;
    }
  };
});



// the religious story
var  videoList = document.querySelectorAll(".video-list .video");
var mainGride = document.querySelector(".main-gride video");
var thumb = document.querySelector(".main-gride .thumb");

videoList.forEach((video) => {
  video.onclick = () => {
    videoList.forEach((video) => video.classList.remove("active"));
    video.classList.add("active");
    if (video.classList.contains("active")) {
      var src = video.children[0].getAttribute("src");
      mainGride.src = src;
      var text = video.children[1].innerHTML;
      thumb.innerHTML = text;
    }
  };
});