const toggleBtn = document.getElementById("menuToggle");
const menu = document.getElementById("mobileMenu");

let isOpen = false;

toggleBtn.addEventListener("click", () => {
  isOpen = !isOpen;

  if (isOpen) {
    menu.classList.remove(
      "-translate-y-full",
      "opacity-0",
      "pointer-events-none"
    );
    menu.classList.add("translate-y-0", "opacity-100");
    menu.classList.add("flex");
    menu.classList.add("justify-center");
  } else {
    menu.classList.add(
      "-translate-y-full",
      "opacity-0",
      "pointer-events-none",
      "ease-out"
    );
    menu.classList.remove("translate-y-0", "opacity-100");
  }
});
