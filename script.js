// PARTE 1: Lista de perguntas e respostas
const perguntas = [
    {
        pergunta: "Qual foi o maior corredor brasileiro que já existiu na F1?",
        respostas: [
            { opcao: "Felipe Massa", correto: false },
            { opcao: "Ayrton Senna", correto: true },
            { opcao: "Gabriel Bortoleto", correto: false }
        ]
    },
    {
        pergunta: "Qual é a capital do Brasil?",
        respostas: [
            {opcao: "Brasília", correto: true},
            {opcao: "Rio de Janeiro", correto: false},
            {opcao: "São Paulo", correto: false}
        ]
    },
    {
        pergunta: "Qual é a maior floresta tropical do mundo localizada no Brasil?",
        respostas: [
            {opcao: "Pantanal", correto: false},
            {opcao: "Mata Atlântica", correto: false},
            {opcao: "Floresta Amazônica", correto: true}
        ]
    },
    {
        pergunta: "Quem foi o primeiro imperador do Brasil?",
        respostas: [
            {opcao: "Dom Pedro II", correto: false},
            {opcao: "Juscelino Kubitschek", correto: false},
            {opcao: "Dom Pedro I", correto: true}
        ]
    },
    {
        pergunta: "Qual é o maior estado brasileiro em território?",
        respostas: [
            {opcao: "Amazonas", correto: true},
            {opcao: "Mato Grosso", correto: false},
            {opcao: "Pará", correto: false}
        ]
    },
    {
        pergunta: "Qual é a data da independência do Brasil?",
        respostas: [
            {opcao: "7 de setembro de 1822", correto: true},
            {opcao: "15 de novembro de 1889", correto: false},
            {opcao: "22 de abril de 1500", correto: false}
        ]
    },
    {
        pergunta: "Qual é o maior rio do Brasil?",
        respostas: [
            {opcao: "Rio Paraná", correto: false},
            {opcao: "Rio Amazonas", correto: true},
            {opcao: "Rio São Francisco", correto: false}
        ]
    },
    {
        pergunta: "Quem é conhecido como o 'Pai da Aviação' no Brasil?",
        respostas: [
            {opcao: "Bartolomeu de Gusmão", correto: false},
            {opcao: "Santos Dumont", correto: true},
            {opcao: "Joaquim Nabuco", correto: false}
        ]
    },
    {
        pergunta: "Qual é a maior festa popular do Brasil?",
        respostas: [
            {opcao: "Festa Junina", correto: false},
            {opcao: "Carnaval", correto: true},
            {opcao: "Réveillon", correto: false}
        ]
    },
    {
        pergunta: "Qual é o ponto turístico mais famoso do Rio de Janeiro?",
        respostas: [
            {opcao: "Cristo Redentor", correto: true},
            {opcao: "Pão de Açúcar", correto: false},
            {opcao: "Maracanã", correto: false}
        ]
    }
    
];

// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

// Verifica se os elementos HTML existem
if (!perguntaElemento || !respostasElemento || !progressoElemento || !textoFinal || !conteudo || !conteudoFinal) {
    console.error("Elementos HTML necessários não encontrados.");
}

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual
let acertos = 0; // Contador de acertos

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
    progressoElemento.textContent = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
    const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
    perguntaElemento.textContent = perguntaAtual.pergunta; // Exibe a pergunta

    respostasElemento.innerHTML = ""; // Limpa as respostas anteriores

    // Percorre todas as respostas da pergunta atual
    perguntaAtual.respostas.forEach(resposta => {
        const botao = document.createElement("button");
        botao.classList.add("botao-resposta");
        botao.innerText = resposta.opcao;
        botao.onclick = () => {
            if (resposta.correto) acertos++; // Incrementa o contador de acertos

            indiceAtual++;
            if (indiceAtual < perguntas.length) {
                carregarPergunta();
            } else {
                finalizarJogo();
            }
        };
        respostasElemento.appendChild(botao);
    });
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
    textoFinal.textContent = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
    conteudo.style.display = "none"; // Esconde as perguntas
    conteudoFinal.style.display = "flex"; // Mostra a tela final
}

// PARTE 6: Iniciando o jogo pela primeira vez
carregarPergunta();