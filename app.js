//gallery starts here
const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.3;

// First img Opacity 
imgs[0].style.opacity = opacity;

imgs.forEach(img => 
  img.addEventListener('click', imgClick)
);

function imgClick(e) {
  // opacity Reset for all imgs
  imgs.forEach(img => (img.style.opacity = 1));
  
  //This changes the current image inside the gallery
  current.src = e.target.src;

  // Add fade in class
  current.classList.add('fade-in');
  // Remove fade in class after .5 seconds
  setTimeout(() => current.classList.remove('fade-in'), 550);

  //change the opacity to opacity variable
  e.target.style.opacity = opacity;
}