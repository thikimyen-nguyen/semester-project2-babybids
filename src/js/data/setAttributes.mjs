/**
 *
 *
 * @export
 * @param {HTMLElement} element - The HTML element to which attributes will be set.
 * @param {Object} attributes - An object containing key-value pairs where keys represent attribute names
 * and values represent attribute values.
 */
export function setAttributes(element, attributes) {
  for (const key in attributes) {
    if (Object.prototype.hasOwnProperty.call(attributes, key)) {
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

export const loginAttributes = {
  "data-bs-target": "#loginModal",
  "data-bs-toggle": "modal",
};
