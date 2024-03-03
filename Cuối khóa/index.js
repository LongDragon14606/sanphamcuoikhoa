const images = [
    'kinh thành huế.jpg',
    'nha trang.jpeg',
    'sapa.jpg',
    'đà lạt.jpg',
    'vịnh hạ long.webp',
    'đà nẵng.jpg'
  ];
  let currentImageIndex = 0;
  
  const currentImage = document.getElementById('currentImage');
  
  const backwardButton = document.getElementById('backward');
  backwardButton.addEventListener('click', () => {
    currentImageIndex--;
    if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1;
    }
    currentImage.src = `./img/${images[currentImageIndex]}`;
  });
  
  const forwardButton = document.getElementById('forward');
  forwardButton.addEventListener('click', () => {
    console.log("next");
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }
    currentImage.src = `./img/${images[currentImageIndex]}`;
  });
  
  currentImage.src = `./img/${images[currentImageIndex]}`;
  