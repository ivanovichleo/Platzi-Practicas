

function area_cuadrado(lado){
    return lado*lado;
}
// formula perimetro cuadrado lado*4
function perimetro_cuadrado(lado){
    return lado*4;
}
// formula perimetro triangulo ladoa + lado b + lado c
function perimetro_triangulo(lado_a , lado_b,lado_c){
    return lado_a+lado_b+lado_c;
}
// area triangulo base * altura / 2
function area_triangulo(base,altura){

    return (base*altura)/2;
}

function perimetro_circurferencia(radio){
    return (radio*2)*Math.PI;
}
        
function area_circurferencia(radio){
    return (radio*radio)*Math.PI;
}

function calcular_area_cuadrado(){
    var lado = document.getElementById("input-lado");
    var area=area_cuadrado(lado.value);
    alert(area);
}

function calcular_perimetro_cuadrado(){
    const lado = document.getElementById("input-lado");
    var perimetro=perimetro_cuadrado(lado.value);
    alert(perimetro);
}

function calcular_area_triangulo(){
    input_a=document.getElementById("input_a");
    input_b=document.getElementById("input_b");
    input_c=document.getElementById("input_c");
    if(input_a.value === input_b.value){
        var final = Math.sqrt(((input_a.value*input_a.value)-(input_c.value*input_c.value)/4));
    }
    else if(input_a.value == input_c.value ){
        var final = Math.sqrt(((input_a.value*input_a.value)-((input_b.value*input_b.value)/4)));
        
    }
    else if(input_b-value === input_c.value){
        var final = Math.sqrt(((input_b.value*input_b.value)-((input_a.value*input_a.value)/4)));
        
    }
    alert(final);
}   