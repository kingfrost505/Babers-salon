const KING_WHATSAPP_NUMBER = "2349052769366";

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("booking-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("customer-name").value.trim();
  const service = document.getElementById("service-choice").value;
  const time = document.getElementById("preferred-time").value.trim();

  if (!name || !service || !time) {
    alert("Please complete all booking fields.");
    return;
  }

  const message = `Hello King's Web Studio! I viewed The Gentleman's Room barbershop demo and would like to enquire about a website.%0A%0AName: ${encodeURIComponent(name)}%0ADemo service selected: ${encodeURIComponent(service)}%0APreferred time (optional): ${encodeURIComponent(time)}`;
  window.open(`https://wa.me/${KING_WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener,noreferrer");
});

document.getElementById("year").textContent = new Date().getFullYear();
