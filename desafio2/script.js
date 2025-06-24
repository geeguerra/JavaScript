const neg = document.getElementById('neg')
const list = document.getElementById('list')
const btn = document.getElementById("btn")

btn.addEventListener('click', () => {
    const texto = neg.value.toLowerCase();
    const itens = list.querySelectorAll('li')
// está lendo item por item
    itens.forEach(item => {
        // Lower ignora se as letras estão maiusculas ou minusculas
      const nome = item.textContent.toLowerCase();
 //  está verificando se está igual
      if (nome == texto) {
        // mudando a fonte da letra para negrito
        item.style.fontWeight = "bold";
      } else {
        item.style.fontWeight = "normal";
      } 
    });
})