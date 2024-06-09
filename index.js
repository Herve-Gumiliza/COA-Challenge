document.addEventListener('DOMContentLoaded', () => {
  const photoGallery = document.querySelectorAll('.Photo-Gallery');
  function handleMouseEnter(imageWrapper, livingThing, img) {
    imageWrapper.style.backdropFilter = 'blur(5px)';
    livingThing.style.transform = 'translate(10%)';
    img.style.transform = 'scale(1.1)';
    img.style.filter = 'grayscale(100%) brightness(25%)';
  }
  function handleMouseLeave(imageWrapper, livingThing, img) {
    imageWrapper.style.backdropFilter = 'none';
    livingThing.style.transform = 'translate(40%)';
    img.style.transform = 'scale(1)';
    img.style.filter = 'none';
  }
  const handleImageHover = () => {
    photoGallery.forEach(container => {
      container.addEventListener('mouseenter', () => handleMouseEnter(container, container.querySelector('.imageWrapper'), container.querySelector('.livingThing'), container.querySelector('img')));
      container.addEventListener('mouseleave', () => handleMouseLeave(container.querySelector('.imageWrapper'), container.querySelector('.livingThing'), container.querySelector('img')));
    });
  };
  handleImageHover();
}
);


