// scroling navbar 
window.addEventListener("scroll", () => {
    document.querySelector("nav")
      .classList.toggle("nav_style", window.scrollY > 0);
  });
