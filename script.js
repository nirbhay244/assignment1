const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach((item) => {
  const cardContent = item.querySelector('.card-content');
  const imgHeight = item.querySelector('img').height;
  cardContent.style.height = `calc(100% - ${imgHeight}px - 30px)`;
});

const sections = document.querySelectorAll('section');

const options = {
  root: null,
  threshold: 0.2,
  rootMargin: "-200px 0px -200px 0px"
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});
