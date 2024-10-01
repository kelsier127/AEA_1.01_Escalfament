
function comparaNumeros(){
    let resultado = document.getElementById("resultado1")

    let numero1 = document.getElementById("num1").value
    let numero2 = document.getElementById("num2").value

    if(numero1 && numero2){
        console.log("ta bien")

        if(numero1>numero2){
            resultado.textContent = `El numero ${numero1} es mas grande`
        }else{
            resultado.textContent = `El numero ${numero2} es mas grande`
        }


    }else{
        resultado.textContent = "Has d'escollir ambdós numeros!!"
    }

    

}



function suma1a100(){
    let resultado = document.getElementById("resultado2");
    let stringResultado = "";


    let variable = 0;

    for(let i = 1;i<=100;i++){

        stringResultado+=`${i} `

        variable+=i

        console.log(variable)
        if(i!=100){
            stringResultado+="+ "
        }

    }

    console.log(variable)
    stringResultado+= `= ${variable}`
    resultado.textContent = stringResultado
}



function pedraPaper(){
    let resultado = document.getElementById("resultado3");
    let stringResultado = "";

    for(let n = 1; n<=20 ; n++){

        if(n%3==0 && n%5==0){

            stringResultado += `Tisores `;
    
        }else if(n%3!=0 && n%5==0){

            stringResultado += `Paper `;
    
        }else if(n%3==0 && n%5!=0){
    
            stringResultado += `Pedra `;
    
        }else{

            stringResultado += `${n} `;
    
        }

    }

    resultado.textContent = stringResultado

}


function esParell(){
    let resultado = document.getElementById("resultado4")

    let numero1 = document.getElementById("num3").value

    if(numero1){
        if(numero1%2==0){
            resultado.textContent = "Es parell"
        }else{
            resultado.textContent = "No es parell"
        }
    }

    

}


function revertirCadena(){

    let resultado = document.getElementById("resultado5")

    let revertirPalabra = document.getElementById("revertirPalabra").value

    let final = revertirPalabra.split("").reverse().join("")

    resultado.textContent = final

    console.log(final)

}

function factorial(){

    let factorialNum = document.getElementById("factorialNum")

    let resultado = document.getElementById("resultado1")

    let variable = 0

    for(let n = factorialNum-1; n>0 ; n--){
        variable*=n
    }
    console.log(variable)

    resultado.textContent = variable
    
}

function filtrarPositius(array){

    let resultado = document.getElementById("resultado7")

    let newArray = []
    for(let x of array){
        if(x>0){
            newArray.push(x)
        }
    }

    resultado.textContent = `El array original newArray`
    console.log(newArray)
}

