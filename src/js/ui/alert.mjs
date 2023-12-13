/* global bootstrap */
// Create a specific alert message
export function alertModal(type = "Success!", message = "") {
  const alertType = document.querySelector("#alertType");
  const alertMessage = document.querySelector("#alertMessage");
  const alertModal = new bootstrap.Modal(document.getElementById("alertModal"));

  alertType.innerHTML = type;
  alertMessage.innerHTML = message;
  alertModal.show();

  setTimeout(() => {
    alertModal.hide();

    window.location.reload();
  }, 2000);
}
