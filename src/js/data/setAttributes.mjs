export function setAttributes(element, attributes) {
  for (var key in attributes) {
    if (attributes.hasOwnProperty(key)) {
      element.setAttribute(key, attributes[key]);
    }
  }
}

export const bidAttributes = {
  type: "number",
  id: "bid",
  name: "bid",
  placeholder: "Bid amount",
};
export const bidBtnAttributes = {
  type: "submit",
  id: "bid-button",
};
