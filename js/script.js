 let b_circulo = document.getElementById("formas_circulo");
 let b_cuadrado = document.getElementById("formas_cuadrado");
 let b_triangulo = document.getElementById("formas_triangulo");
 let texto = document.getElementById("texto_formas_pantalla");
 let b_reset = document.getElementById("reset");
 let formas_resultado = "";
 let formas_requerido = numero_aleatorio("3")+numero_aleatorio("3")+numero_aleatorio("3")+numero_aleatorio("3")+numero_aleatorio("3")+numero_aleatorio("3");
 let arr = formas_requerido.split('');
 let i1 = document.getElementById("i_p_1");
 let i2 = document.getElementById("i_p_2");
 let i3 = document.getElementById("i_p_3");
 let i4 = document.getElementById("i_p_4");
 let i5 = document.getElementById("i_p_5");
 let i6 = document.getElementById("i_p_6");
 let auto_delete;

function formas_usuario(e) {
    let forma = formas_resultado.split('')
    console.log(forma)
    if (forma[0] === "0") {
        i1.setAttribute("src","img/Formas de memoria/Circulo.svg");
    }else if (forma[0] === "1") {
        i1.setAttribute("src","img/Formas de memoria/Cuadrado.svg");
    }else if (forma[0] === "2") {
        i1.setAttribute("src","img/Formas de memoria/Triangulo.svg");
    }

    if (forma[2] === "0") {
        i2.setAttribute("src","img/Formas de memoria/Circulo.svg");
    }else if (forma[2] === "1") {
        i2.setAttribute("src","img/Formas de memoria/Cuadrado.svg");
    }else if (forma[2] === "2") {
        i2.setAttribute("src","img/Formas de memoria/Triangulo.svg");
    }

    if (forma[4] === "0") {
        i3.setAttribute("src","img/Formas de memoria/Circulo.svg");
    }else if (forma[4] === "1") {
        i3.setAttribute("src","img/Formas de memoria/Cuadrado.svg");
    }else if (forma[4] === "2") {
        i3.setAttribute("src","img/Formas de memoria/Triangulo.svg");
    }

    if (forma[6] === "0") {
        i4.setAttribute("src","img/Formas de memoria/Circulo.svg");
    }else if (forma[6] === "1") {
        i4.setAttribute("src","img/Formas de memoria/Cuadrado.svg");
    }else if (forma[6] === "2") {
        i4.setAttribute("src","img/Formas de memoria/Triangulo.svg");
    }

    if (forma[8] === "0") {
        i5.setAttribute("src","img/Formas de memoria/Circulo.svg");
    }else if (forma[8] === "1") {
        i5.setAttribute("src","img/Formas de memoria/Cuadrado.svg");
    }else if (forma[8] === "2") {
        i5.setAttribute("src","img/Formas de memoria/Triangulo.svg");
    }

    if (forma[10] === "0") {
        i6.setAttribute("src","img/Formas de memoria/Circulo.svg");
        comprobar(this);
    }else if (forma[10] === "1") {
        i6.setAttribute("src","img/Formas de memoria/Cuadrado.svg");
        comprobar(this);
    }else if (forma[10] === "2") {
        i6.setAttribute("src","img/Formas de memoria/Triangulo.svg");
        comprobar(this);
    }

}

function reset_formas(e) {
    i1.setAttribute("src","");
    i2.setAttribute("src","");
    i3.setAttribute("src","");
    i4.setAttribute("src","");
    i5.setAttribute("src","");
    i6.setAttribute("src","");
}


 b_reset.addEventListener("click", () => {
    formas_resultado = "";
    texto.innerHTML = "";
    reset_formas(this);
})
 b_circulo.addEventListener("click", () => {
    formas_resultado += "0 "
    if (formas_resultado !== formas_requerido) {
        formas_usuario(this);
      
    }
    else if (formas_resultado === formas_requerido){
        texto.innerHTML = "¡Completado!";
        formas_resultado = "";
        reset_formas(this);
        
    }

    if (auto_delete === "y") {
        texto.innerHTML = "";
        auto_delete = "n"
    }else{}
 })

 b_cuadrado.addEventListener("click", () => {
    formas_resultado += "1 "
    if (formas_resultado !== formas_requerido) {
        formas_usuario(this);
        
    }
    else if (formas_resultado === formas_requerido){
        texto.innerHTML = "¡Completado!";
        formas_resultado = "";
        reset_formas(this);
    }
    if (auto_delete === "y") {
        texto.innerHTML = "";
        auto_delete = "n"
    }else{}
 })

 b_triangulo.addEventListener("click", () => {
    formas_resultado += "2 "
    if (formas_resultado !== formas_requerido) {
        formas_usuario(this);
        
    }
    else if (formas_resultado === formas_requerido){
        texto.innerHTML = "¡Completado!";
        formas_resultado = "";
        reset_formas(this);
    }
    if (auto_delete === "y") {
        texto.innerHTML = "";
        auto_delete = "n"
    }else{}
 })

 function numero_aleatorio(cantidad) {
    let n;
    n = Math.floor(Math.random() * cantidad);
    return n+" ";
}

 function dar_pasos(formas_requerido) {

   
    let res;
    console.log(arr);
     setTimeout(() => {
        i1.setAttribute("src",dar_formas(arr[0]))
        auto_delete = "y"
     }, 1000);
     setTimeout(() => {
        i2.setAttribute("src",dar_formas(arr[2]))
        auto_delete = "y"
     }, 1500);
     setTimeout(() => {
        i3.setAttribute("src",dar_formas(arr[4]))
        auto_delete = "y"
     }, 2000);
     setTimeout(() => {
        i4.setAttribute("src",dar_formas(arr[6]))
        auto_delete = "y"
     }, 2500);
     setTimeout(() => {
        i5.setAttribute("src",dar_formas(arr[8]))
        auto_delete = "y"
     }, 3000);
     setTimeout(() => {
        i6.setAttribute("src",dar_formas(arr[10]))
        auto_delete = "y" 
     }, 3500);

     
     
     
     setTimeout(() => {
      texto.innerHTML = "¡Empieza!"
      reset_formas(this);
      formas_resultado = "";
     }, 7000);
 }

 
 
 function dar_formas(arr) {
     let sopa
     if (arr === "0") {
         sopa = "img/Formas de memoria/Circulo.svg";
        }else if (arr === "1"){
            sopa = "img/Formas de memoria/Cuadrado.svg";
        }else if (arr === "2") {
            sopa = "img/Formas de memoria/Triangulo.svg";
        }
        return sopa;
    }
    dar_pasos(formas_requerido)

    function comprobar(e) {
        let forma = formas_resultado.split('')
        if (forma[0] !== arr[0]) {
            reset_formas(this);
            texto.innerHTML = "Perdiste";
        }else if (forma[0] === undefined) {
            
        }
        
        else if (forma[2] !== arr[2]) {
            reset_formas(this);
            texto.innerHTML = "Perdiste";
        }else if (forma[2] === undefined) {
            
        }
        
        else if (forma[4] !== arr[4]){
            reset_formas(this);
            texto.innerHTML = "Perdiste";
        }else if (forma[4] === undefined) {
            
        }
        
        else if (forma[6] !== arr[6]){
            reset_formas(this);
            texto.innerHTML = "Perdiste";
        }else if (forma[6] === undefined) {
            
        }
        
        else if (forma[8] !== arr[8]){
            reset_formas(this);
            texto.innerHTML = "Perdiste";
        }else if (forma[8] === undefined) {
            
        }
        
        else if (forma[10] !== arr[10]){
            reset_formas(this);
            texto.innerHTML = "Perdiste";
        }else if (forma[10] === undefined) {
            
        }
        
        else{

        }


    }