/* *********************************************************************************

* Objetivo: Cacular médias escolares
* Data: 29/01/2026
* Autor: Pedro
* Versão: 1.0

**********************************************************************************/




/*
Existe, 3 formas de Criacao de Variaveis

var - Permite a Cricao de um espaco na memoria do tipo variavel.
    Foi utilizado muito em projetos antigos.
    RECOMENDACAO: Caso voce queira utilizar, Recomenda-se na cricao de variavel globais (inicio do Codigo) 

let - Permite a Criacao de um espaço na memoria. Do tipo Variavel.
    A utilização deste padrao é para a criacão dentro de blocos de programacao { }.
    Essa variavel nasce e morre dentro deste bloco
    RECOMENDADO: Não e recomendado a sua utilizacao em escopo Global

const - Permite a Criacao de um espaco na memoria onde Nao sofrera alteracoes durante o codigo. A const pode ser utilizada dentro e fora de bloco { }.
    RECOMENDACAO: caso voce queira diferenciar uma const, um var ou um let
    A const voce pode criar com letras maiuscula.
    
    */

   //Importe da biblioteca
    const readline = require('readline')

    const entradaDeDados = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    entradaDeDados.question('Digite o nome do Aluno:', function(nome){
        //Recebe o nome do aluno que foi digitado
        let nomeAluno = nome

        //nota numero 1
        entradaDeDados.question('digite a nota 1:', function(valor1){
            let nota1 = valor1
            
            //nota numero 2
            entradaDeDados.question('digite a nota 2:', function(valor2){
                let nota2 = valor2

                //nota numero 3
                entradaDeDados.question('digite a nota 3:', function(valor3){
                    let nota3 = valor3

                    //nota numero 4
                    entradaDeDados.question('digite a nota 4:', function(valor4){
                        let nota4 = valor4

                        /*
                        == - perimite comparar a igualdade de dois conteudos
                        < - perimite Comparar valores menores
                        > - Permite comparar valores maiores
                        >= - Permite comparar valores maiores ou iguais
                        <= - Permite comparar valores menores ou iguais
                        != - permite comparar a diferença entre conteudos
                        == - Permite comparar a igualdade de conteudo e a dipagem de dados
                        !== - Permite comparar a diferenca de conteudo e a igualdade de tipos de dados
                        ==! - Permite comparar a igualdade de conteudos e a diferença de tipos de dados
                        !=! - Permite comparar a diferenca de conteudos e a diferenca de tipo de dados
                        

                        Operadores Logicos
                        E - AND, &&
                        OU - OR, |
                        NAO - NOT, !
                        */
                        
                        
                        //Validacao de entrada vazia                    
                         if(nomeAluno == '' || nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
                         console.log('ERRO: é obrigatorio o prenchimento de todos os dados')
                        
                        }else if(nota1 < '0' || nota1 > 100 || nota2 < '0' || nota2 > 100 || nota3 < '0' || nota3 > 100 || nota4 < '0' || nota4 > 100){
                            console.log('ERRO: Por favor menor que 100 e Maior que 0')
                            // validacao para entradas de letras nas notas
                            //isNaN() - permite vlaidar seo conteudo da varaivel tem algum caracter ao inves de numero
                            //validacao para a entrada
                            
                        }else if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4) ){
                            console.log ('nao e possivel validar colocando letra, por favor coloque numero ao invez de letra na nota do aluno') 


                        }else{
                            

                            //Conversoes de tipos de dados
                            // parseInt() - permite converter uma String para um numero inteiro
                            // parseFloat() - pemrite conveter uma String para numero DECIMAL
                            // Number() - Permite converter uma String para NUMERO (Inteiro ou Decimal)
                            // String() - permite converter o conteudo para String
                            // Boolean() - permite converter um conteudo para Booleano
                            // typeof() - permite verificar o tipo de dados de uma variavel

                            
                            let n1 = 50
                            console.log(typeof(n1))
                            console.log(n1)
                            
                            let statusAluno
                            // calculo da media
                            let media = Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)
                            console.log(`O aluno(a) ${nomeAluno} ficou com a média ${media.toFixed(2)}`)
                            
                            // Validação de status de aprovacao do aluno
                            if(media < 50){
                            statusAluno ='Aluno Reprovaodo'

                            }else if(media >= 50 && media <= 70){
                                statusAluno = 'Aluno em Recuperacao'

                            }else if(media > 70){
                                statusAluno = 'Aluno Aprovado'
                            }
                            // saida do boletim do aluno
                            console.log(`aluno ${nomeAluno} \n media final ${media.toFixed(2)} e esta: ${statusAluno}`)
                                
     
                                
                        }

                    }) //fecha numero 4

                }) // fecha numero 3

            }) //fecha numeor 2

        }) // fecha numero 1

    }) // Fecha Nome