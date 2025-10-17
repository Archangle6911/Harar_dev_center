
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const links = document.querySelectorAll(".nav-links a");
  const joinBtn = document.querySelector(".btn.join");
  const exploreBtn = document.querySelector(".btn.explore");

  
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").replace("#", "");
      const target = document.getElementById(targetId);
        if (target) {
        target.scrollIntoView({ behavior: "smooth" });
         }

      
      if (targetId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }

      
      link.classList.add("clicked");
      setTimeout(() => link.classList.remove("clicked"), 500);
    });
  });


  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navbar.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
      navbar.style.transition = "background-color 0.4s ease";
    } else {
      navbar.style.backgroundColor = "#000";
    }
  });

  const sections = document.querySelectorAll("section");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    links.forEach(link => {
      link.classList.remove("active");
      if (link.textContent.trim().toLowerCase().replace(" ", "") === current) {
        link.classList.add("active");
      }
    });
  });

  joinBtn.addEventListener("click", e => {
    e.preventDefault();
    alert("🎉 Thanks for your interest! Join Us form coming soon...");
  });

  exploreBtn.addEventListener("click", e => {
    e.preventDefault();
    const courses = document.querySelector(".course-section");
    courses.scrollIntoView({ behavior: "smooth" });
  });
});
