const hamburger = document.getElementById('hamburger');
      const navbar = document.getElementById('navbar');
 
      hamburger.addEventListener('click', () => {
        navbar.classList.toggle('open');
      });
 
      hamburger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          navbar.classList.toggle('open');
        }
      });
 
      // Close nav when a link is clicked
      document.querySelectorAll('.link').forEach(link => {
        link.addEventListener('click', () => {
          navbar.classList.remove('open');
        });
      });
 
      // Close nav on outside click
      document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target)) {
          navbar.classList.remove('open');
        }
      });