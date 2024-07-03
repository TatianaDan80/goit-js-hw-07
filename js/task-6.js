function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

document.addEventListener('DOMContentLoaded', function () {
  const controlsDiv = document.getElementById('controls');
  const inputNumber = controlsDiv.querySelector('input');
  const createButton = controlsDiv.querySelector('[data-create]');
  const destroyButton = controlsDiv.querySelector('[data-destroy]');
  const boxesDiv = document.getElementById('boxes');

  createButton.addEventListener('click', function () {
    const amount = inputNumber.value;
    if (!amount || amount < 1 || amount > 100) {
      alert('Введите число от 1 до 100');
      return;
    }

    createBoxes(amount);
    inputNumber.value = '';
  });

  destroyButton.addEventListener('click', function () {
    boxesDiv.innerHTML = '';
  });

  function createBoxes(amount) {
    const initialSize = 30;
    const stepSize = 10;
    let boxesHTML = '';

    for (let i = 0; i < amount; i++) {
      const size = initialSize + i * stepSize;
      const color = getRandomHexColor();
      boxesHTML += `<div style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
    }

    boxesDiv.innerHTML = boxesHTML;
  }
});
