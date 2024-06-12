cont caixapirncipal = document.querySelector(".caixa-principal");
cont caixapirncipal = document.querySelector(".caixa-perguntas");
cont caixapirncipal = document.querySelector(".caixa-alternativas");
cont caixapirncipal = document.querySelector(".caixa-resultado");
cont caixapirncipal = document.querySelector(".caixa-resultado");

const perguntas = [
    {
        enunciado: "pergunta 1",
        alternativas;[
           texto: "sim"
           afirmação:"afirmação",
        }
        
    }
    texto:"nao",
    afirmação:"afirmação",
}
]
            texto: "alternativa 1"
            texto:"alternativa 2",
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