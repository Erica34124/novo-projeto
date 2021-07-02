let visualizado= 0;
const lista = ['{a:1}', '{a:2}', '{a:3}', '{a:4}', '{a:5}'];
function anunciosVisualizados(){
    lista.forEach((item, index) => {
        for(let a=0; a <4; a++){
            item = {visualizado: (visualizado+=1)}
            console.log(item)}
      
      console.log(lista[index], visualizado)
            
        console.log('testando foreach', item);

    })   
    return visualizado*40;
}

//console.log(anunciosVisualizados())



/*let enviaDados = document.getElementById('anuncio');

function handleKeyUp(event) {
    console.log(event.target.value);
    return ('teste valor', enviaDados)
}
 enviaDados.addEventListener('change', handleKeyUp);
*/

nomesAnuncios =[]
let inserirAnuncio = document.getElementsByClassName('anuncio').value;
if (!!inserirAnuncio){
    nomesAnuncios.push(inserirAnuncio)
}
else{
    console.log('inserir valor')
}
console.log('itens da lista',nomesAnuncios)
   /* anuncio= new ListaAnuncio();
    anuncio.cliente =document.getElementById('anuncio');
    anuncio.inicio =document.getElementById('anuncio');
    anuncio.fim =document.getElementById('anuncio');
    anuncio.investimento=document.getElementById('anuncio');*/
 
//console.log(anuncio);


/*console.log('testando envio de informações para objeto',enviarAnuncio());
var meuCarro = new Object();
meuCarro.fabricacao = "Ford";
meuCarro.modelo = "Mustang";
meuCarro.ano = 1969;*/

//teste get

const dadoAnuncio = document.getElementsByClassName('anuncio');
console.log(dadoAnuncio)
const dadoNome = document.getElementById('nome');
const dadoData1 = document.getElementById('dataI');
const dadoData2 = document.getElementById('dataF');
const dadoGrana = document.getElementById('grana');

console.log("Que poha é essa",document.getElementsByClassName("dadoAnuncio").innerText = dadoAnuncio);


//listas dados Anunciante
const listaAnunciantes =[];
listaAnunciantes.push(document.getElementsByClassName('anuncio').value)

console.log("lista de armazenamento", listaAnunciantes[0])
