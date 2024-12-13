document.getElementById('form-numeros').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (num2 > num1) {
        alert('Sucesso: O número 2 é maior que o número 1.');
    } else {
        alert('Erro: O número 2 deve ser maior que o número 1.');
    }
});