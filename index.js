  const navbar    = document.getElementById("navbar");
    const hamburger = document.getElementById("hamburger");
    const navLinks  = document.getElementById("navLinks");
 
    function toggleMenu(forceClose = false) {
      const isOpen = navbar.classList.contains("open");
      if (forceClose || isOpen) {
        navbar.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
      } else {
        navbar.classList.add("open");
        hamburger.setAttribute("aria-expanded", "true");
      }
    }
 
    hamburger.addEventListener("click", () => toggleMenu());
    navLinks.querySelectorAll(".link").forEach(l => l.addEventListener("click", () => toggleMenu(true)));
    document.addEventListener("click", e => {
      if (navbar.classList.contains("open") && !navbar.contains(e.target)) toggleMenu(true);
    });
    document.addEventListener("keydown", e => { if (e.key === "Escape") toggleMenu(true); });
    window.addEventListener("resize", () => { if (window.innerWidth >= 1024) toggleMenu(true); });