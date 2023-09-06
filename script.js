// operadores selecciono:
    const operadores=document.querySelectorAll(".oper1");
    const igual=document.querySelector(".igu");
    const reiniciar=document.querySelector(".reiniciar")
//selecciono numeros:
    const botonesN=document.querySelectorAll(".botonesN")
//seleciono pantalla:
    const numeros= document.querySelector(".numeros")
    const resultado=document.querySelector(".resultado")
//defino variables:
    let operador="";
    let numeroA="";
    let numeroB="";
    let operacion=""
    let mostrar=""
// defino funcion:
    const resolver = ()=>{
        if(operador == "+"){
            return resultado.innerHTML=(numeroA + numeroB)
        } if(operador == "-"){
            return resultado.innerHTML=(numeroA - numeroB)
        } if(operador == "/"){
            return resultado.innerHTML=(numeroA / numeroB)
        } if(operador == "x"){
            return resultado.innerHTML=(numeroA * numeroB)
        }else{
            return resultado.innerHTML="error"
        }
    }
//escucho numeros:
    botonesN.forEach((boton)=>{
        boton.addEventListener("click",()=>{
            operacion += boton.value
            mostrar +=boton.value
            numeros.textContent = mostrar
        })
    })
//escuhco operadores:
    operadores.forEach((oper)=>{
        oper.addEventListener("click",()=>{
            operador = oper.value
            mostrar += oper.value
            numeroA=parseFloat(operacion);
            numeros.innerHTML= mostrar
            operacion=""
        })
    })
    igual.addEventListener("click",(e)=>{
        numeroB=parseFloat(operacion);
        resolver();
        numeroA=""
        numeroB=""
    })
    reiniciar.addEventListener("click",()=>{
        numeros.innerHTML=""
        resultado.innerHTML=""
        operacion=""
        mostrar=""
    })
