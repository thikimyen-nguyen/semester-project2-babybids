const logoutBtn = document.querySelector("#logoutNav");

export function logout() {
  logoutBtn.addEventListener("click", function () {
    try {
      const remove = (key) => localStorage.removeItem(key);
      remove("accessToken");
      alert("You are logged out successfully!");
      window.location.href = "../index.html";
    } catch {
      return alert("There was a problem logging out");
    }
  });
}
