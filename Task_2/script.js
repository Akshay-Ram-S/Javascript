let display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  const expression = display.value;

  // Only allow numbers, operators, decimal points
  if (/^[0-9+\-*/. ]+$/.test(expression)) {
    try {
      const result = new Function(`return ${expression}`)();
      display.value = result;
    } catch (err) {
      display.value = "Error";
    }
  } else {
    display.value = "Error";
  }
}
