document.addEventListener("DOMContentLoaded", function() {
    const imagesContainer = document.getElementById("images");
    const counter = document.getElementById("counter");
    const totalImages = imgCount;
    let currentIndex = 0;

    // Load the first four images
    function loadImages() {
        imagesContainer.innerHTML = ""; // Clear existing images
        for (let i = 0; i < 4; i++) {
            let imgIndex = (currentIndex + i) % totalImages;
            const img = document.createElement("img");
            img.src = imgFiles[imgIndex];
            img.alt = imgCaptions[imgIndex];
            imagesContainer.appendChild(img);
        }
    }

    // Update counter text
    function updateCounter() {
        counter.textContent = `${currentIndex + 1} / ${totalImages}`;
    }

    // Move to the next set of images
    document.getElementById("next").addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % totalImages;
        loadImages();
        updateCounter();
    });

    // Move to the previous set of images
    document.getElementById("prev").addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        loadImages();
        updateCounter();
    });

    // Initial load
    loadImages();
    updateCounter();
});
