const pics = document.querySelectorAll('.pic');

pics.forEach(pic => {
  const original = pic.src;
  pic.addEventListener('mouseenter', () => {
    pic.src = 'tum2.jpg'; // change this to your hover image
  });
  pic.addEventListener('mouseleave', () => {
    pic.src = original;
  });
});
