// 1. Escreva um programa em que o usuário informe dois números utilizando o "prompt". Então escreva em tela o maior deles.

// var numero1 = parseFloat(prompt("Insira um Número "))
// var numero2 = parseFloat(prompt("Mais outro Número "))
// if (numero1 > numero2) { 
//     window.alert("O maior Número é " + numero1) 
// } else { 
//     window.alert("O maior Número é " + numero2) 
// }



// 2. Faça um programa que leia um valor informado pelo usuário e diga se o valor informado é positivo, negativo ou zero.

// var numero1 = parseFloat(prompt("Insira um Número "))
// if (numero1 < 0 ){ 
//     window.alert("O número é negativo ")
// }
// else if(numero1 == 0 )
// {window.alert("O número é igual a zero ")}

// else {window.alert("O número é positivo ")}



// 3.Faça um programa para ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.

// var numero1 = parseInt(prompt("Insira um número "))
// var numero2 = parseInt(prompt("Insira outro número "))
// var numero3 = parseInt(prompt("Insira mais um número "))
// if (numero1 > numero2 && numero1 > numero3){
//     window.alert("O Primeiro número é maior ")
// }
// else if (numero2 > numero1 && numero2 > numero3){
//     window.alert("O Segundo número é maior ")
// }
// else {
//     window.alert("O Terceiro número é maior ")
// }



// 4. Faça um programa que leia 3 valores informados pelo usuário (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.

// var numero1 = parseInt(prompt("Insira um número "))
// var numero2 = parseInt(prompt("Insira outro número ")) 
// var numero3 = parseInt(prompt("Insira mais um número "))
// if (numero1 > numero2 && numero1 > numero3){
//             maior = numero1
//             if(numero2 > numero3){
//                 maior2 = numero2
//             }
//             else{maior2 = numero3}
// }
// else if (numero2 > numero1 && numero2 > numero1){
//             maior = numero2
//             if(numero1 > numero3){
//                 maior2 = numero1
//             }
//             else{maior2 = numero3}
// }
// else{maior = numero3
//             if(numero2 > numero1){
//                 maior2 = numero2
//             }
//             else maior2 = numero1
// }

// window.alert(maior + "+" + maior2 + "=" + (maior + maior2))



// 5.  Faça um programa que leia 6 valores informados pelo usuário, calcule, exiba os números informados e escreva a média aritmética desses valores lidos.

// var numero1 = parseInt(prompt("Digite um número"));
// var numero2 = parseInt(prompt("Digite um número"));
// var numero3 = parseInt(prompt("Digite um número"));
// var numero4 = parseInt(prompt("Digite um número"));
// var numero5 = parseInt(prompt("Digite um número"));
// var numero6 = parseInt(prompt("Digite um número"));

// var total = numero1 + numero2 + numero3 + numero4 + numero5 + numero6 ;
// var total2 = (numero1 + numero2 + numero3 + numero4 + numero5 + numero6) /6 ;
// window.alert("x = " +  numero1 + "+ " + numero2 + "+ " + numero3 + "+ " + numero4 + "+ " + numero5 + "+ "  + numero6 + "= " + total + "÷6 " + "=" + total2);



// 6. Faça um programa que receba quatro valores informados pelo usuário, mas informe somente o primeiro, o último e o maior de todos eles (considere que todos os números informados serão diferentes)

// var n1 = parseInt(prompt("Digite um número"));
// var n2 = parseInt(prompt("Digite Mais um número"));
// var n3 = parseInt(prompt("Digite Outro número"));
// var n4 = parseInt(prompt("Digite o Ultimo número"));

// if(n1 > n2 && n1 > n3 && n1 > n4){
//     maior = n1;
// }

// else if(n2 > n1 && n2 > n3 && n2 > n4){
//     maior = n2
// }
// else if(n3 > n1 && n3 > n2 && n3 > n4){
//     maior = n3
// }
// else{maior = n4

// }
// window.alert("O primeiro número é " + n1 + " O ultimo número  " + n4 + " e o maior deles " + maior);



// 7. Faça um programa que leia 6 números que o usuário vai informar. Todos os números lidos com valor inferior a 72 devem ser somados. Escreva o valor final da soma efetuada e também todos valores que o usuário informou. 

// var number1 = parseInt(prompt('Insira aqui o 1º número'))
// var number2 = parseInt(prompt('Insira aqui o 2º número'))
// var number3 = parseInt(prompt('Insira aqui o 3º número'))
// var number4 = parseInt(prompt('Insira aqui o 4º número'))
// var number5 = parseInt(prompt('Insira aqui o 5º número'))
// var number6 = parseInt(prompt('Insira aqui o 6º número'))

// var limite = (number1, number2, number3, number4, number5, number6) <= 72;

// var soma = (number1 + number2 + number3 + number4 + number5 + number6)


// alert(`O valor final da soma é: ${soma}, e os número informados foram:  ${number1}, ${number2}, ${number3}, ${number4}, ${number5}, ${number6}.`)



// 8. Escreva um programa que calcule a média de quatro números informados pelo usuário, mas somente se esses números forem maiores que 0 e menores que 10. No final, se a média for maior que cinco o usuário receberá uma mensagem "Você passou no teste". Em qualquer outra situação, ele receberá uma mensagem de "tente novamente" .

// alert('Informe 4 números, mas eles devem ser superiores 0 e inferiores a 10')

// var number1 = parseInt(prompt('Insira aqui o 1º número'))
// var number2 = parseInt(prompt('Insira aqui o 2º número'))
// var number3 = parseInt(prompt('Insira aqui o 3º número'))
// var number4 = parseInt(prompt('Insira aqui o 4º número'))

// var mediaNumber = (number1 + number2 + number3 + number4) / 4

// if (mediaNumber  >= 5){
//   alert(`Você passou no teste, sua nota é: ${mediaNumber})
// }else if(mediaNumber <= 4.9`) 
// alert(`Tente novamente, sua nota é: ${mediaNumber}`); 
// }

// 9. Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que ela nasceu).

// var ano = prompt('Insira aqui o ano em que você nasceu(não precisar inserir o mês)')

// var condicao = (ano)

// if (condicao <= 2007){
//   alert(`Parabéns! Você pode votar pois nasceu em: ${condicao}`)
// }else if (condicao >= 2008)
// alert(`Você infelizmente não tem idade suficiente para votar, mas não fique preocupado, na próxima eleição você conseguirá participar`);

// 10. Tendo como entrada a altura e o sexo (codificado da seguinte forma: 1: feminino 2: masculino) de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes fórmulas:

// var sexo = prompt('Qual seu gênero?');
//   var altura = parseFloat(prompt('Insira aqui a sua altura'));
//   var peso = parseFloat(prompt('Insira aqui seu peso'));
//   if (sexo == 'feminino') {
//     conta = peso * altura -44.7;
//      alert(`O peso ideal para o gênero feminino é: ${conta} `)
//   } else { conta = peso * altura -58; 
//     alert(`O peso ideal para o gênero masculino é: ${conta} `)}


// 11. Uma micro calculadora
// Escreva um programa para ler 2 valores inteiros informados pelo usuário e uma das seguintes operações a serem
// executadas (codificada da seguinte forma: 1.Adição, 2.Subtração, 3.Divisão, 4.Multiplicação).
// O programa deve calcular e escrever o resultado dessa operação sobre os dois valores lidos. Observação: Considere
// que só serão lidos os valores 1, 2, 3 ou 4 para as operações

// var valor1 = parseInt(prompt('Informe aqui o primeiro valor.'))
// var valor2 = parseInt(prompt('Informe aqui o segundo valor.'))
// var opera = parseInt(prompt('Informe a operação (1-Adição, 2-Subtração, 3-Multiplicação, 4-Divisão.'))

// if((opera != 1) && (opera != 2) && (opera != 3) && (opera != 4)){
//   alert(`Nós fazemos as seguintes operações: (1-Adição, 2-Subtração, 3-Multiplicação, 4-Divisão.`)

// }else if(opera === 1){
//   alert(valor1 + valor2)
// }else if(opera === 2){
//   alert(valor1 - valor2)
// }else if(opera === 3){
//   alert(valor1 * valor2)
// }else if(opera === 4){
//   alert(valor1 / valor2)
// }