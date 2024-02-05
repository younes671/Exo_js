function convertCurrency() {
    const euroInput = document.getElementById('euroInput');
    const resultMessage = document.getElementById('resultMessage');

    const euroValue = parseFloat(euroInput.value);

    if (isNaN(euroValue)) {
        resultMessage.textContent = 'Veuillez saisir une valeur numérique.';
    } else {
        const francsValue = (euroValue * 6.55957).toFixed(2);
        resultMessage.textContent = ` ${francsValue} francs.`;
    }
}