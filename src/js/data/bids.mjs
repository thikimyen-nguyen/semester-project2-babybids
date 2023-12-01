//  Get the maw amount from the bids array
export function getMaxAmount(array) {
  // Check if the array is empty
  if (array.length === 0) {
    console.error("Array is empty");
    return "_";
  }


  let maxAmount = array.reduce((max, current) => Math.max(max, current.amount), array[0].amount);

  return maxAmount;
}

