    var objetos = Array();

    function adicionar(){
        entrada = document.getElementById('entrada').value
        
        // verificar se palavra já existe dentro do Array
        if(entrada !== ''){

            if(objetos.indexOf(entrada) !== -1 ){ // verificar se palavra já existe dentro da Array
                
                alert('Palavra já inserida dentro da Array')

            }
            else{
                objetos.push(entrada);{ // Adicionando palavra dentro da array
                    console.log(objetos)

                    document.getElementById('entrada').value = '' //limpa o campo a inserir uma palavra

                }
            }
        }
        else{
            alert('Insira uma palavra')
        }

    }
    function ordenar(){
        objetos.sort()
        console.log(objetos)
        // crinado uma string com objetos ordenados
        var ordenados = objetos.join(', ') // adicionando espaço e virgula entre eles

        var resultadoElemento = document.getElementById('resultado')
        resultadoElemento.innerHTML = "Objetos ordenados: "+ordenados
    }
    

