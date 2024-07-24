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
        enunciado: "voce se junta a mesa da sua casa selecionada, assim que voce se senta na mesa uma garota começa a conversar com voce , voce fala com ela?",
        alternativas;[
            texto: "sim"
            texto: "nao"
]
}
    {        enunciado: "garota:ola, voce é nova aqui , podemos ser amigas?",
            alternativos;[
                texto: "claro",
                texto: "nao, obrigada(o)",
            ]
}
    {
        enunciado: "voce continua conversando com a garota, apos isso o jantar acaba e voce vai ate sua comunal, draco se aproxima, voce fala com ele?"
        alternativas;[
            texto: "sim"
            texto: "nao"
        ]
 }
    {
        enunciado: "mesmo assim ele fala com voce.-draco:oque temos aqui? uma aluna(o) nova(o)?vejo que nosso ano sera divertido , espero que voce nao se junte a pessoa errada ,-ele estica a mao esperando que voce aperte,"
        alternativas;[
            texto: "apertar a mao"
            texto: "nao apertar e ir embora"

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