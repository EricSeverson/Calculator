class Expression {

  constructor(leftOperand, operator, rightOperand) {
    this.leftOperand = leftOperand;
    this.operator = operator;
    this.rightOperand = rightOperand;
  }
}

class Calculator {

  constructor() {
    this.textBox = document.querySelector('.screen input');
    this.expression = new Expression();
  }

  add(x, y) {
    return x + y;
  }

  subtract(x, y) {
    return x - y;
  }

  multiply(x, y) {
    return x * y;
  }

  divide(x, y) {
    return x / y;
  }

  operate(operator, x, y) {
    if (operator === '+') {
      return this.add(x, y);
    } else if (operator === '-') {
      return this.subtract(x, y);
    } else if (operator === '*') {
      return this.multiply(x, y);
    } else if (operator === '/') {
      return this.divide(x, y);
    }
  }  

  populateNumber(e) {
    let pressedButton = e.target.textContent;
    if (pressedButton === 'C') {
      this.clearScreen();
      return;
    }
    if (this.textBox.value === '0') this.textBox.value = pressedButton;
    else if (!parseInt(this.textBox.value)) this.textBox.value = pressedButton;
    else this.textBox.value = this.textBox.value + pressedButton;
  }

  populateOperator(e) {
    if (!parseInt(this.textBox.value)) return;
    if (e.target.textContent === '=' && parseInt(this.textBox.value)) {
      if(this.expression.leftOperand && this.expression.operator) {
        this.expression.rightOperand = this.textBox.value;
        this.textBox.value = this.operate(this.expression.operator, parseInt(this.expression.leftOperand), parseInt(this.expression.rightOperand));
        this.expression.leftOperand = this.textBox.value;
      }
      return;
    }
    if (!this.expression.leftOperand) {
      this.expression.leftOperand = this.textBox.value;
    }
    this.textBox.value = e.target.textContent;
    this.expression.operator = e.target.textContent;
  }

  clearScreen() {
    this.textBox.value = '0';
    delete this.expression.leftOperand;
    delete this.expression.rightOperand;
    delete this.expression.operator;
  }
}

let calculator = new Calculator();
window.onload = calculator.clearScreen();

document.querySelector('.numbers').addEventListener('click', calculator.populateNumber.bind(calculator));
document.querySelector('.operators').addEventListener('click', calculator.populateOperator.bind(calculator));