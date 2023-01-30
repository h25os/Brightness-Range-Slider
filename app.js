//select elems
const container = document.querySelector(".container");
const rangeInput = document.querySelector("#range");
const numberValue = document.querySelector("#numberValue");
const decreaseBtn = document.querySelector("#decrease-btn");
const increaseBtn = document.querySelector("#increase-btn");
//change Brightness FUNCTIONs
const setDataAndBrightness = () => {
  numberValue.innerHTML = valueInput;
  rangeInput.setAttribute("value", valueInput);
  container.style.filter = `brightness(${valueInput}%)`;
};
const changeBrightness = (event) => {
  valueInput = event.target.value;
  setDataAndBrightness();
};
const increaseBrightness = (event) => {
  valueInput = rangeInput.getAttribute("value");
  valueInput = Number(valueInput) + 5;
  setDataAndBrightness();
};
const decreaseBrightness = (event) => {
  valueInput = rangeInput.getAttribute("value");
  valueInput = Number(valueInput) - 5;
  setDataAndBrightness();
};
//add listeners
rangeInput.addEventListener("change", changeBrightness);
decreaseBtn.addEventListener("click", decreaseBrightness);
increaseBtn.addEventListener("click", increaseBrightness);
