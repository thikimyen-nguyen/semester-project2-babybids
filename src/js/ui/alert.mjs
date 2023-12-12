import * as bootstrap from "bootstrap";

export function alertModal(type = "Success!", message = "") {
  const alertType = document.querySelector("#alertType");
  const alertMessage = document.querySelector("#alertMessage");
  const alertModal = new bootstrap.Modal(document.getElementById("alertModal"));

  alertType.innerHTML = type;
  alertMessage.innerHTML = message;
  alertModal.show();

  // Hide the modal after 2000 milliseconds
  setTimeout(() => {
    // Hide the modal
    alertModal.hide();

    // Reload the page
    window.location.reload();
  }, 2000);
}
