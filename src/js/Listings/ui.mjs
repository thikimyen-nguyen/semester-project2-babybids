// count down time

function updateCountdown(endsAt) {
  const deadlineDate = new Date(endsAt);
  // Get the current date and time
  const now = new Date();

  // Calculate the time remaining in milliseconds
  const timeRemaining = deadlineDate - now;

  // Convert milliseconds to days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  // const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  // const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the time remaining
  // const countdownElement = document.getElementById('countdown');
  const countdownElement = `${days}d ${hours}h`;
  // // If the deadline has passed, display a message
  // if (timeRemaining < 0) {
  //     countdownElement.innerHTML = "Time's up!";
  // }
}
// Update the countdown every second
setInterval(updateCountdown(), 1000);

export {updateCountdown}