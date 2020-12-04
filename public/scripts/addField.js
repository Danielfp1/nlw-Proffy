//Procurar o botao
document.querySelector("#add-time")
//Quando clicar no botao
.addEventListener('click',cloneField)

//Executar uma acao
function cloneField(){
    //Duplicar os campos
    const newFieldContainer= document.querySelector('.schedule-item').cloneNode(true)

    //Pegar os campos
    const fields= newFieldContainer.querySelectorAll('input')

    //Limpando os campos
    fields.forEach(function(field){
        field.value = "";
    })

    //local
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}