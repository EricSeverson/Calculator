function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function operate(operator, x, y) {
  if (operator === '+') {
    return add(x, y);
  } else if (operator === '-') {
    return subtract(x, y);
  } else if (operator === '*') {
    return multiply(x, y);
  } else if (operator === '/') {
    return divide(x, y);
  }
}

function populateNumber(e) {
  let textBox = document.querySelector('.screen input');
  let pressedButton = e.target.textContent;
  if (pressedButton === 'C') {
    clearScreen();
    return;
  }
    if (textBox.value === '0') textBox.value = pressedButton;
  else textBox.value = textBox.value + pressedButton;
}
function clearScreen() {
  document.querySelector('.screen input').value = '0';
}

console.log(document.querySelectorAll('.numbers button'));
document.querySelectorAll('.numbers button').forEach(button => addEventListener('click', populateNumber));

window.onload = clearScreen();