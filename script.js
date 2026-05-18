document.addEventListener('DOMContentLoaded', function(){
  const slides = document.querySelectorAll('.slide');
  if(slides.length){
    let index = 0;
    setInterval(function(){
      slides[index].classList.remove('active');
      index = (index + 1) % slides.length;
      slides[index].classList.add('active');
    }, 5000);
  }

  const section = document.querySelector('.contact-scroll');
  if(section){
    const reveal = function(){
      if(section.getBoundingClientRect().top < window.innerHeight * 0.85){
        section.classList.add('visible');
      }
    };
    window.addEventListener('scroll', reveal);
    reveal();
  }
});

function openPopup(){
  const popup = document.getElementById('contactPopup');
  if(popup) popup.classList.add('active');
}
function closePopup(){
  const popup = document.getElementById('contactPopup');
  if(popup) popup.classList.remove('active');
}
window.addEventListener('click', function(e){
  const popup = document.getElementById('contactPopup');
  if(popup && e.target === popup) popup.classList.remove('active');
});
window.addEventListener('keydown', function(e){
  if(e.key === 'Escape') closePopup();
});
