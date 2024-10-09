

//video js
var video = document.getElementById("myVideo");
var btn = document.getElementById("myvideoBtn");

function myFunction() {
  if (video.muted) {
    video.muted = false;
    btn.innerHTML = "Mute";
  } else {
    video.muted = true;
    btn.innerHTML = "Unmute";
  }
}


// Slideshow for color works section
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

// Automatic slideshow for color works section
let slideIndexAuto = 0;
showSlidesAuto();

function showSlidesAuto() {
    let i;
    let slidesAuto = document.getElementsByClassName("mySlides");
    let dotsAuto = document.getElementsByClassName("demo");
    
    for (i = 0; i < slidesAuto.length; i++) {
        slidesAuto[i].style.display = "none";  
    }
    
    slideIndexAuto++;
    
    if (slideIndexAuto > slidesAuto.length) { slideIndexAuto = 1 }
    
    for (i = 0; i < dotsAuto.length; i++) {
        dotsAuto[i].className = dotsAuto[i].className.replace(" active", "");
    }
    
    slidesAuto[slideIndexAuto - 1].style.display = "block";  
    dotsAuto[slideIndexAuto - 1].className += " active";
    
    setTimeout(showSlidesAuto, 2000); // Change image every 2 seconds
}


