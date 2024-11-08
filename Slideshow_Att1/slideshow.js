window.addEventListener("load", createLightbox);
window.addEventListener("load", setupGallery);

function createLightbox() {
    let lightBox = document.getElementById("lightbox");

    let lbCounter = document.createElement("div");
    let lbPrev = document.createElement("div");
    let lbNext = document.createElement("div");
    let lbPlay = document.createElement("div");
    let lbImages = document.createElement("div");

    lightBox.appendChild(lbCounter);
    lbCounter.id = "lbCounter";
    let currentImg = 1;
    lbCounter.textContent = currentImg + " / " + imgCount;

    //Designing the lightbox previous slide button
    lightBox.appendChild(lbPrev);
    lbPrev.id = "lbPrev";
    lbPrev.innerHTML = "&#9664;";
    lbPrev.onclick = showPrev;

    //Designing the lightbox next slide button
    lightBox.appendChild(lbNext);
    lbNext.id = "lbNext";
    lbNext.innerHTML = "&#9654;";
    lbNext.onclick = showNext;

    //Designing the lightbox play-pause button
    lightBox.appendChild(lbPlay);
    lbPlay.innerHTML = "&#9199;";
    let timeID;
    lbPlay.onclick = function() {
        if (timeID) {
           //Stopping the slideshow
           window.clearInterval(timeID);
           timeID = undefined;
        } else {
           //Starting the slideshow
           showNext();
           timeID = window.setInterval(showNext, 1500);
        }
     }

    //Designing the lightbox images container
    lightBox.appendChild(lbImages);
    lbImages.id = "lbImages";

    //Adding images from the image file array to the container
    for (let i = 0; i < imgCount; i++) {
        let image = document.createElement("img");
        image.src = imgFiles[i];
        image.alt = imgCaptions[i];
        image.onclick = createOverlay;
        lbImages.appendChild(image);
    }
    function showNext() {
        lbImages.appendChild(lbImages.firstElementChild);
        (currentImg < imgCount) ? currentImg++ : currentImg = 1;
        lbCounter.textContent = currentImg + " / " + imgCount;
     }
     function showPrev() {
        lbImages.insertBefore(lbImages.lastElementChild, lbImages.firstElementChild);
        (currentImg > 1) ? currentImg-- : currentImg = imgCount;
        lbCounter.textContent = currentImg + " / " + imgCount;
     }
  
     function createOverlay() {
        let overlay = document.createElement("div");
        overlay.id = "lbOverlay";
  
        //Add the figure box to the overlay
        let figureBox = document.createElement("figure");
        overlay.appendChild(figureBox);
  
        //Add the image to the figure box
        let overlayImage = this.cloneNode("true");
        figureBox.appendChild(overlayImage);
  
        //Add the caption to the figure box
        let overlayCaption = document.createElement("figcaption");
        overlayCaption.textContent = this.alt;
        figureBox.appendChild(overlayCaption);
  
        let closeBox = document.createElement("div");
        closeBox.id = "lbOverlayClose";
        closeBox.innerHTML = "&times;";
        closeBox.onclick = function() {
           document.body.removeChild(overlay);
        }
        overlay.appendChild(closeBox);
  
        document.body.appendChild(overlay);
     }
  }



function setupGallery() {
    let imageCount = imgFiles.length;
    let galleryBox = document.getElementById("gallery");
    let currentSlide = 1;
    let runShow = true;
    let showRunning;
    
    let galleryTitle = document.createElement("h1");
    galleryTitle.id = "galleryTitle";
    galleryTitle.textContent = slidesTitle;
    galleryBox.appendChild(galleryTitle);
    
    let slideCounter = document.createElement("div");
    slideCounter.id = "slideCounter";
    slideCounter.textContent = currentSlide + "/" + imageCount;
    galleryBox.appendChild(slideCounter);
    
    let leftBox = document.createElement("div");
    leftBox.id = "leftBox";
    leftBox.innerHTML = "&#9664;";
    leftBox.onclick = moveToLeft;   
    galleryBox.appendChild(leftBox);
    
    let rightBox = document.createElement("div");
    rightBox.id = "rightBox";
    rightBox.innerHTML = "&#9654;";  
    rightBox.onclick = moveToRight;   
    galleryBox.appendChild(rightBox);
    
    let playPause = document.createElement("div");
    playPause.id = "playPause";
    playPause.innerHTML = "&#9199;";
    playPause.onclick = startStopShow;
    galleryBox.appendChild(playPause);
    
    let slideBox = document.createElement("div");
    slideBox.id = "slideBox";
    galleryBox.appendChild(slideBox);
    
    
    for (let i = 0; i < imageCount; i++) {
       let image = document.createElement("img");
       image.src = imgFiles[i];
       image.alt = imgCaptions[i];
       image.onclick = createModal;
       slideBox.appendChild(image);
    }
    function moveToRight() {
        let firstImage = slideBox.firstElementChild.cloneNode("true");
        firstImage.onclick = createModal;
        slideBox.appendChild(firstImage);
        slideBox.removeChild(slideBox.firstElementChild);
        currentSlide++;
        if (currentSlide > imageCount) {
           currentSlide = 1;
        }
        slideCounter.textContent = currentSlide + " / " + imageCount;
     }
     
     function moveToLeft() {
        let lastImage = slideBox.lastElementChild.cloneNode("true");
        lastImage.onclick = createModal;
        slideBox.removeChild(slideBox.lastElementChild);
        slideBox.insertBefore(lastImage, slideBox.firstElementChild);
        currentSlide--;
        if (currentSlide === 0) {
           currentSlide = imageCount;
        }
        slideCounter.textContent = currentSlide + " / " + imageCount;      
     }  
     
     function startStopShow() {
        if (runShow) {
           showRunning = window.setInterval(moveToRight, 2000);
           runShow = false;
        } else {
           window.clearInterval(showRunning);
           runShow = true;
        }
     }
     
     function createModal() {
        let modalWindow = document.createElement("div");
        modalWindow.id = "activeModal";
        let figureBox = document.createElement("figure");
        modalWindow.appendChild(figureBox);
        
        let modalImage = this.cloneNode("true");
        figureBox.appendChild(modalImage);
        
        let figureCaption = document.createElement("figcaption");
        figureCaption.textContent = modalImage.alt;
        figureBox.appendChild(figureCaption);
        
        let closeBox = document.createElement("div");
        closeBox.id = "modalClose";
        closeBox.innerHTML = "&times;";
        closeBox.onclick = function() {
           document.body.removeChild(modalWindow);
        }
        
        modalWindow.appendChild(closeBox);
        
        document.body.appendChild(modalWindow);
     }
     
  }