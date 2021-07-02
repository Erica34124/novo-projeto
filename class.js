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