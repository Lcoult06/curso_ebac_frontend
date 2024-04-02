const form = document.getElementById('campo-form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const valorA = document.getElementById('campoA').value;
    const valorB = document.getElementById('campoB').value;
    const mensagemSucesso = `Campo B: ${valorB.value} é maior que o Campo A: ${valorA.value}`;
    if (valorB > valorA) {
        alert('Campo B é maior que o Campo A');
        return true;
    }
    else {
        alert('Preenchimento inválido !');
        return false;
    }
})

console.log(form)
