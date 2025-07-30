const toggleBtn1 = document.getElementById("menuToggle");
const menu = document.getElementById("mobileMenu");

let isOpen = false;

toggleBtn1.addEventListener("click", () => {
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

const toggleBtn = document.getElementById("darkToggle");

const body = document.body;
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    body.classList.remove("bg-gray-100", "text-gray-900");
    body.classList.add("bg-gray-900", "text-white");
  } else {
    body.classList.remove("bg-gray-900", "text-white");
    body.classList.add("text-gray-900");
  }
});
