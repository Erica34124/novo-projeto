class cadastrar{
    contructor(anuncio, nome, valor){
        this.anuncio = anuncio;
        this.nome= nome;
        this.valor=valor;
    }
}

function erro(){
    return "Cadastre apenas 5 por vez";
}


const quantidadeAnuncios =["anuncio1", "anuncio1", "anuncio2", "anuncio3", "anuncio4", "anuncio5"]
let inclusao = document.querySelector("qtd");
if (inclusao > 0 && inclusao <=5){
    for (let i=0; i<= inclusao; i++){
      console.log(  quantidadeAnuncios[i]= new cadastrar(document.querySelector("anuncio"), document.querySelector("nome"),document.querySelector("grana")))

    }

}
else{
   erro()
}

function scrollToSection(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    let section = document.querySelector(href);

section.scrollIntoView({
        behavior:'smooth',
        block: 'start',
});}
//enviando as listas para relatório

/*nomesAnuncios = []
let aAnuncio =[];
let aNomes =[];
let aData1 =[];
let aData2 =[];
let aInvestimento =[];*/

//Puxa dados


const dataDiv = document.querySelector("[anunciar]");
console.log("testeerica1",dataDiv)
const dataForm = document.querySelector("[all]");
console.log("testeerica2",dataForm)
const dataInput = document.querySelector("[qtd1]");
console.log("testeerica3",dataInput)

let array = []

dataForm.addEventListener('submit', function(event){
    event.preventDefault()
    const listNome = dataInput.value
    console.log(listNome)
    if (listNome === null || listNome === "") return
    const list = createList(listNome)
    dataInput.value = null
    array.push(list)
    render()
})

function createList(nome){
    return{id: Date.now().toString(), name: nome}
}

function render(){
    clearElement(dataDiv)
    array.forEach(function(array){
        const item = document.createElement('li')
        item.classList.add("item")
        item.innerText=array.name
        console.log(item)
        dataDiv.appendChild(item)
    })
}

function clearElement(elemento){
    while(elemento.firstChild){
        elemento.removeChild(elemento.firstChild)
    }
}
console.log("Socorro",render())