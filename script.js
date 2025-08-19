// Section fade-up animation on scroll
document.querySelectorAll('.fade-up').forEach(sec => {
  const reveal = () => {
    const trigger = window.innerHeight - 60;
    const secTop = sec.getBoundingClientRect().top;
    if (secTop < trigger) sec.classList.add('visible');
  };
  window.addEventListener('scroll', reveal);
  window.addEventListener('load', reveal);
});

// Contact form popup message
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('formMessage').textContent = "Thank you for contacting, Shiv will reach out soon!";
  this.reset();
});

// Smooth scroll effect for navbar links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop - 40,
      behavior: 'smooth'
    });
  });
});

// Animated Neon Pulse Effect for heading
setInterval(() => {
  document.querySelector('.neon').style.textShadow =
    `0 0 ${Math.random()*15+9}px #eab62a99, ` +
    `0 0 ${Math.random()*22+8}px #fff4, ` +
    `0 0 ${Math.random()*40+15}px #ffef10`;
}, 800);
