const caixapirncipal = document.querySelector(".caixa-principal");
const caixapirncipal = document.querySelector(".caixa-perguntas");
const caixapirncipal = document.querySelector(".caixa-alternativas");
const caixapirncipal = document.querySelector(".caixa-resultado");
const caixapirncipal = document.querySelector(".caixa-resultado");

const perguntas = [
    {
        enunciado: "uma aluna nova entra em hogwarts, assim que voce entra na escola , o chapeu seletor te selecionia para uma casa",
        alternativas: [
            {
                texto: "lufa-lufa",
                afirmação: "afirmação",
            },
            {
                texto: "sonserina",
                afirmação: "afirmação",
            }
        ]
    },
    {
        enunciado: "voce se junta a mesa da sua casa selecionada, assim que voce se senta na mesa uma garota começa a conversar com voce , voce fala com ela?",
        alternativas: [
            {
                texto: "sim",
                afirmação: "afirmação",
            },
            {
                texto: "não",
                afirmação: "afirmação",
            }
        ]
    },
    {
    enunciado: "garota:ola, voce é nova aqui , podemos ser amigas?",
    alternativas: [
        {
            texto: "claro",
            afirmação: "afirmação",
        },
        {
            texto: "não, obrigada(o)",
            afirmação: "afirmação",
        }
    ]
    },
    {
        enunciado: "voce continua conversando com a garota, apos isso o jantar acaba e voce vai ate sua comunal, draco se aproxima, voce fala com ele?",
        alternativas: [
            {
                texto: "sim",
                afirmação: "afirmação",
            },
            {
                texto: "não",
                afirmação: "afirmação",
            }
        ]
        },
       {
        enunciado: "mesmo assim ele fala com voce.-draco:oque temos aqui? uma aluna(o) nova(o)?vejo que nosso ano sera divertido , espero que voce nao se junte a pessoa errada ,-ele estica a mao esperando que voce aperte",
        alternativas: [
            {
                texto: "sim",
                afirmação: "afirmação",
            },
            {
                texto: "não",
                afirmação: "afirmação",
            }
        ]
        },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = ""; 

function mostraPergunta() {
     if(atual >= perguntas.length){
        mostraResultado();
        return;
    }    
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
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
            const afirmacoes = opcaoSelecionada.afirmação; 
            historiaFinal += afirmacoes + " "; 
            atual++;
            mostraPergunta();
      }

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049..."
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent ="";
}

mostraPergunta();