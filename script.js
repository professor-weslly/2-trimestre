cont caixapirncipal = document.querySelector(".caixa-principal");
cont caixapirncipal = document.querySelector(".caixa-perguntas");
cont caixapirncipal = document.querySelector(".caixa-alternativas");
cont caixapirncipal = document.querySelector(".caixa-resultado");
cont caixapirncipal = document.querySelector(".caixa-resultado");

const perguntas = [
    {
        enunciado: "uma aluna nova entra em hogwarts, assim que voce entra na escola , o chapeu seletor te selecionia para uma casa",
        alternativas;[
           texto: "lufa-lufa"
           afirmação:"afirmação",
        }
        
    }
    texto:"sonserina",
    afirmação:"afirmação",
}
]
            texto: "lufa-lufa"
            texto:"sonserina",
        ]
}
    {
        enunciado: "pergunta 2",
        alternativas;[
            texto: "alternativa 1"
            texto: "alternativa 2"
]
}
    {        enunciado: "pergunta 3",
            alternativos;[
                texto: "alternativa 1",
                texto: "alternativa 2",
            ]
}
    {
        enunciado: "pergunta 4"
        alternativas;[
            texto: "alternativa 1"
            texto: "alternativa 2"
        ]
 }
    {
        enunciado: "pergunta 5"
        alternativas;[
            texto: "alternativa 1"
            texto: "alternativa 2"

        ]
}
]

let atual = 0;
let perguntaAtual;

function mostrapergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas. textContent= perguntaAtual.enunciado;
    mostraAlternativa();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
    const botaoAlternativas = document.createElement("button");
    botãoAlternatiivas.textContent = alternativa;
    caixaAlternativa.appendchild(botãoAlternativas);
    }
}

mostraPerguntas ();
},
];

let atual = 0;
let perguntaAtual;
let historiaFinal = ""; 

function mostraPergunta() {
 /*    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }   */ 
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
 /* caixaAlternativas.textContent = ""; */
    mostraAlternativas();
}
function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
            const afirmacoes = opcaoSelecionada.afirmacoes; /* mudar para opcaoSelecionada.afirmacao*/
            historiaFinal = afirmacao; /* += afirmacao + " "; */
            atual++;
            mostraPergunta();
      }
/*
function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049..."
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent ="";
}
*/
mostraPergunta();