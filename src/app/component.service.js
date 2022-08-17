class ComponentService {
  constructor() {
    this.numberOneInput = document.getElementById('numberOne');
    this.numberTwoInput = document.getElementById('numberTwo');
    this.addValuesButton = document.getElementById('addValues');
    this.resultDiv = document.getElementById('result');
  }

  getInputs() {
    return [this.numberOneInput.value, this.numberTwoInput];
  }
  setResult(str) {
    this.resultDiv.innerHTML = str;
  }
  onClick(cb) {
    this.addValuesButton.addEventListener('click', cb)
  }
}