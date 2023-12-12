const loader = document.querySelector(".loader");
function message(error) {
  return `<div>${error}</div>`;
}
export { loader, message };
