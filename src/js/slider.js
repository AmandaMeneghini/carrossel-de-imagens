const imagens = document.querySelectorAll(".slide")
console.log(imagens);
const setaAvancar = document.getElementById("seta-avancar");
const setaVoltar = document.getElementById("seta-voltar");

let imagemAtual = 0

setaAvancar.addEventListener('click', function(){
    if(imagemAtual === imagens.length - 1){
        return;
    }
    
    imagemAtual++;

    esconderImagemAberta();
    mostrarImagem();
    ativarOuDesativarSeta();
});

setaVoltar.addEventListener('click', function(){
    if(imagemAtual === 0){
        return;
    }

    imagemAtual--;

    esconderImagemAberta();
    mostrarImagem();
    ativarOuDesativarSeta();
});

function esconderImagemAberta(){
    const imagemAberta = document.querySelector(".mostrar");
    imagemAberta.classList.remove("mostrar");
};

function mostrarImagem(){
    imagens[imagemAtual].classList.add("mostrar");
};

function ativarOuDesativarSeta(){
    const NaoEhAPrimeiraImagem = imagemAtual !== 0
    if(NaoEhAPrimeiraImagem){
        setaVoltar.classList.remove("opacidade");
    }else{
        setaVoltar.classList.add("opacidade");
    };
    
    const ehAUltimaImagem = imagemAtual !== 0 && imagemAtual === imagens.length - 1
    if(ehAUltimaImagem){
        setaAvancar.classList.add("opacidade");
    }else{
        setaAvancar.classList.remove("opacidade");
    };

};