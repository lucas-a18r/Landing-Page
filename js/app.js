// Faça o texto1 se mover quando o usuario carregar a página

// para fazer o texto se mover criarei uma função ou evento
/* function moveTexto() {
    let textos = document.getElementsByClassName("texto1").onload;
} */

// reformulando código 
var i = 0;
var velocidade = 30; /* é em milisegundos */

function digiteTexto() {
    if (i < textos.length) {
        document.getElementsByClassName("texto1").innerHTML += txt.charAt(i);
        i++;
        setTimeout(digiteTexto, velocidade);
      }
}
// pode usar a tagNameClass para pegar a classe texto1 e o innerHTML 
// para pegar só o elemento (estou quase lá, não desista)