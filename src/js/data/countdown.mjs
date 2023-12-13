// countdown time for deadline

/**
 * Calculates the time remaining until a specified date and returns a formatted countdown string.
 *
 *
 * @export
 * @param {string | number | Date} date -  The deadline date for the countdown.
 * @return {string} A formatted countdown string indicating the time remaining.
 */
export function updateCountdown(date) {
  const deadlineDate = new Date(date);
  const now = new Date();
  const timeRemaining = deadlineDate - now;

  if (timeRemaining <= 0) {
    return "Expired!";
  }
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  if (days > 0) {
    return `${days} days ${hours} hours`;
  } else if (hours > 0) {
    return `${hours} hours ${minutes} minutes`;
  } else if (minutes > 0) {
    return `${minutes} minutes ${seconds} seconds`;
  } else {
    return `${seconds} seconds`;
  }
}
