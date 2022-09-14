/** @format */
document.addEventListener('DOMContentLoaded', () => {
  const inputStart = document.querySelector('.Number__InputStart');
  const inputEnd = document.querySelector('.Number__InputEnd');
  const button = document.querySelector('.Button');
  const outputElement = document.querySelector('.Output');
  function makeResult() {
    const outputList = document.querySelector('.OutputList');

    if (outputList) {
      outputElement.removeChild(outputElement.querySelector('.OutputList'));
    }

    let rangeStart = Number(inputStart.value) + 1;
    console.log('Droggelbecher rangeStart: ', rangeStart);

    let rangeEnd = Number(inputEnd.value) - 1;
    console.log('Droggelbecher rangeEnd: ', rangeEnd);

    if (rangeStart > rangeEnd) {
      rangeStart = Number(inputEnd.value) + 1;
      rangeEnd = Number(inputStart.value) - 1;
    }

    let numbersList = {
      totalRange: [],
      oddNumbers: [],
    };
    for (var i = rangeStart; i <= rangeEnd; i++) {
      const liElement = `<li>${i}</li>`;
      numbersList.totalRange.push(liElement);
      if (i % 2 != 0) {
        numbersList.oddNumbers.push(liElement);
      }
    }

    const oddListElement = document.createElement('div');
    oddListElement.innerHTML = `
        Range: ${numbersList.totalRange.length}
        <ul class="List">
          ${numbersList.oddNumbers.join('')}
        </ul>    
    `;
    oddListElement.classList.add('OutputList');
    outputElement.appendChild(oddListElement);
    console.log('Droggelbecher numbersList: ', numbersList);
  }

  button.addEventListener('click', makeResult);
});
