// highlight current nav link
(function () {
  const here = location.pathname.split('/').pop(); // e.g., "protocols.html" or ""
  document.querySelectorAll('nav a').forEach(a => {
    const target = a.getAttribute('href').split('/').pop();
    if ((here === '' && target === './') || here === target) a.classList.add('active');
  });
})();

