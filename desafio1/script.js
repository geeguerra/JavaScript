let num = document.getElementById ('num')
const Btn = document.getElementById ('Btn')
const tabuada = document.getElementById ('tabuada')

// evento de click do botão
Btn.addEventListener('click', function() {
    //está chamando só o valor e não a localização
    num = num.value
    //para
    for(i = 1 ; i <= 10; i++)
    {
// fez uma variavel para guardar o calculo
        let valor = i * num;
        const multi = document.createElement ('p');
        multi.textContent = `${i} x ${num} = ${valor}`;
// multi é filho de tabuada
        tabuada.appendChild(multi);
    }
})