document.addEventListener("DOMContentLoaded", function () {
  const navlinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".nav-target");

  function hapusClassActive() {
    navlinks.forEach((link) => {
      link.classList.remove(
        "bg-clip-text",
        "text-transparent",
        "bg-gradient-to-br",
        "border-b-2",
        "border-sky-500",
        "pb-5",
        "from-cyan-300",
        "to-sky-800"
      );
      if (document.documentElement.classList.contains("dark")) {
        link.classList.add("dark:text-gray-100");
      } else {
        link.classList.add("text-gray-800");
      }
    });
  }
  function tembahClassActive() {
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
        const id = section.getAttribute("id");
        const activeLink = document.querySelector(`a[href="#${id}"]`);
        if (activeLink) {
          hapusClassActive();

          if (document.documentElement.classList.contains("dark")) {
            activeLink.classList.remove("dark:text-gray-100");
          } else {
            activeLink.classList.remove("text-gray-800");
          }

          activeLink.classList.add(
            "bg-clip-text",
            "text-transparent",
            "bg-gradient-to-br",
            "border-b-2",
            "border-sky-500",
            "pb-5",
            "from-cyan-300",
            "to-sky-800"
          );
        }
      }
    });
  }

  tembahClassActive();
  window.addEventListener("scroll", tembahClassActive);
});
