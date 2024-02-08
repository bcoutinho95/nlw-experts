const perguntas = [
  {
    pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
    respostas: [
      "var myVar;",
      "let myVar;",
      "const myVar;",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a maneira correta de escrever um comentário de uma linha em JavaScript?",
    respostas: [
      "// Este é um comentário",
      "/* Este é um comentário */",
      "<!-- Este é um comentário -->",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o operador lógico 'E' em JavaScript?",
    respostas: [
      "&&",
      "||",
      "!",
    ],
    correta: 0
  },
  {
    pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
    respostas: [
      "print()",
      "console.print()",
      "console.log()",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o resultado de 5 + '3' em JavaScript?",
    respostas: [
      "53",
      "8",
      "5 + '3'",
    ],
    correta: 0
  },
  {
    pergunta: "O que o método 'push()' faz em um array em JavaScript?",
    respostas: [
      "Remove o último elemento do array",
      "Adiciona um novo elemento ao início do array",
      "Adiciona um novo elemento ao final do array",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a função do método 'querySelector()' em JavaScript?",
    respostas: [
      "Selecionar todos os elementos de uma classe",
      "Selecionar um elemento pelo seu ID",
      "Selecionar o primeiro elemento que corresponde a um seletor CSS especificado",
    ],
    correta: 2
  },
  {
    pergunta: "Como você pode verificar se uma variável é do tipo 'string' em JavaScript?",
    respostas: [
      "typeof myVar === 'string'",
      "myVar instanceof String",
      "myVar.type === 'string'",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o método que pode ser usado para remover o último elemento de um array em JavaScript?",
    respostas: [
      "pop()",
      "shift()",
      "splice()",
    ],
    correta: 0
  },
  {
    pergunta: "O que o operador '+' faz com strings em JavaScript?",
    respostas: [
      "Concatenação",
      "Subtração",
      "Multiplicação",
    ],
    correta: 0
  }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de' + totalDePerguntas

// loop ou repetição
for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

for(let resposta of item.respostas) {
  const dt = quizItem.querySelector('dl dt').cloneNode(true)
  dt.querySelector('span').textContent = resposta
  dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
  dt.querySelector('input').value = item.respostas.indexOf(resposta)
  dt.querySelector('input').onchange = (event) => {
    // alert(event.target.value) valor da resposta
    // const estaCorreta === event.target.value = item.correta false
    const estaCorreta = event.target.value == item.correta // true
    
    corretas.delete(item)
    if(estaCorreta) {
      corretas.add(item)
    }
    
    mostrarTotal.textContent = corretas.size + ' de' + totalDePerguntas
}


  quizItem.querySelector('dl').appendChild(dt)
}

quizItem.querySelector('dl dt').remove()
  
  
  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
}

