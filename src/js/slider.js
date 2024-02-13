// const setaDireita = document.querySelector(".seta-direita")
// const setaEsquerda = document.querySelector(".seta-esquerda")

// const temaAtual = document.querySelector(".imagem-de-fundo")

// const tituloPrincipal = document.querySelector(".titulo-principal")

// setaDireita.addEventListener('click', () => {

//     if(temaAtual.classList.contains('primeiro-tema')){
//         temaAtual.classList.add('segundo-tema');
//         temaAtual.classList.remove('primeiro-tema');

//         setaEsquerda.classList.remove('seta-desativada')

//         tituloPrincipal.innerHTML = 'Título imagem 2'

//     }else if(temaAtual.classList.contains('segundo-tema')){
//         temaAtual.classList.add('terceiro-tema');
//         temaAtual.classList.remove('segundo-tema');

//         tituloPrincipal.innerHTML = 'Título imagem 3'

//     }else if(temaAtual.classList.contains('terceiro-tema')){
//         temaAtual.classList.add('quarto-tema')
//         temaAtual.classList.remove('terceiro-tema');

//         setaDireita.classList.add('seta-desativada')
//         setaEsquerda.classList.remove('seta-desativada')

//         tituloPrincipal.innerHTML = 'Título imagem 4'
//     }
// })

// setaEsquerda.addEventListener('click', () => {

//     if(temaAtual.classList.contains('quarto-tema')){
//         temaAtual.classList.add('terceiro-tema');
//         temaAtual.classList.remove('quarto-tema');

//         setaEsquerda.classList.remove('seta-desativada')
//         setaDireita.classList.remove('seta-desativada')

//         tituloPrincipal.innerHTML = 'Título imagem 3'

//     }else if(temaAtual.classList.contains('terceiro-tema')){
//         temaAtual.classList.add('segundo-tema')
//         temaAtual.classList.remove('terceiro-tema');

//         setaDireita.classList.remove('seta-desativada')

//         tituloPrincipal.innerHTML = 'Título imagem 2'

//     }else if(temaAtual.classList.contains('segundo-tema')){
//         temaAtual.classList.add('primeiro-tema')
//         temaAtual.classList.remove('segundo-tema');

//         setaEsquerda.classList.add('seta-desativada')
//         setaDireita.classList.remove('seta-desativada')

//         tituloPrincipal.innerHTML = 'Título imagem 1'
//     }
// })

const setaAvancar = document.getElementById("seta-avancar");
const setaVoltar = document.getElementById("seta-voltar");

let imagemAtual = 0

setaAvancar.addEventListener('click', function(){

    

    esconderImagem()
    mostrarImagem()
    ativarOuDesativarSeta()
})

function esconderImagem(){
    const 
}