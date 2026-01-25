const currentYear = new Date().getFullYear();
const footer = document.querySelector(".site-footer p");

if (footer) {
  footer.textContent = `Portfolio Digitale Geletterdheid — ${currentYear}.`;
}
