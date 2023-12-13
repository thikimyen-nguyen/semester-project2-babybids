/**
 * Get the maximum amount from the bids array
 *
 * @export
 * @param {array} This is an array of bid amounts on a listing
 * @return {number} maxAmount
 */
export function getMaxAmount(array) {
  // Check if the array is empty
  if (array.length === 0) {
    return 0;
  }

  let maxAmount = array.reduce(
    (max, current) => Math.max(max, current.amount),
    array[0].amount,
  );

  return maxAmount;
}
