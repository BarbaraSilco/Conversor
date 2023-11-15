/** habilitar tipo de dado para decimal **/

function type_binario(e){
    var tecla=(window.event)?event.keyCode:e.which;
    if((tecla==48 || tecla==49)) return true;
    else {
        return false;
    }
}

/** habilitar tipo de dado para binário **/

function type_decimal(e){
    var tecla=(window.event)?event.keyCode:e.which;
    if((tecla >=48 && tecla <=57)) return true;
    else {
        return false;
    }
}

/** habilitar tipo de dado para octal **/

function type_octal(e){
    var tecla=(window.event)?event.keyCode:e.which;
    if((tecla >=48 && tecla <=55)) return true;
    else {
        return false;
    }
}

/** habilitar tipo de dado para hexadecimal **/

function type_hexadecimal(e){
    var tecla=(window.event)?event.keyCode:e.which;
    if((tecla >=48 && tecla <=57 || tecla >=65 && tecla <=70 || tecla >=97 && tecla <=102 )) return true;
    else {
        return false;
    }
}


/** Habi/Desabi INPUT **/

function habi_desabi(value){

    /* Habitilar apenas caso for decimal */

    if(value == 10) {
        ipt_decimal.disabled = false;}
    else
    if(value != 10) {
        ipt_decimal.disabled = true;
    }
    

    /* Habitilar apenas caso for binário */

    if(value == 2) {
        ipt_binario.disabled = false;}
    else
    if(value != 2) {
        ipt_binario.disabled = true;
    }

    /* Habitilar apenas caso for octal */

    if(value == 8) {
        ipt_octal.disabled = false;}
    else
    if(value != 8) {
        ipt_octal.disabled = true;
    }

      /* Habitilar apenas caso for octal */

      if(value == 16) {
        ipt_hexadecimal.disabled = false;}
    else
    if(value != 16) {
        ipt_hexadecimal.disabled = true;
    }
    }

/** INÍCIO dos cálcuos para conversão **/

    /* FROM Decimal*/

    function convert_decimal() {
        var decimal =
        parseInt(document.getElementById('ipt_decimal').value, 10)

            document.getElementById("ipt_binario").value = decimal.toString(2);
            document.getElementById("ipt_octal").value = decimal.toString(8);
            document.getElementById("ipt_hexadecimal").value = decimal.toString(16);
    }


     /* FROM Binário*/

     function convert_binario() {
        var binario =
        parseInt(document.getElementById('ipt_binario').value, 10)

            document.getElementById("ipt_decimal").value = parseInt(binario, 2);
            document.getElementById("ipt_octal").value = parseInt(binario, 2).toString(8);
            document.getElementById("ipt_hexadecimal").value = parseInt(binario, 2).toString(16);
    }


    /*FROM Octal*/

    function convert_octal() {
        var octal =
        parseInt(document.getElementById('ipt_octal').value, 10)
    
        document.getElementById("ipt_decimal").value = parseInt(octal, 8);
        document.getElementById("ipt_binario").value = parseInt(octal, 8).toString(2);
        document.getElementById("ipt_hexadecimal").value = parseInt(octal, 8).toString(16);
    }

    /*FROM Hexadecimal*/

    function convert_hexadecimal() {
        var hexadecimal =
       document.getElementById('ipt_hexadecimal').value
    
       document.getElementById("ipt_decimal").value = parseInt(hexadecimal, 16);
       document.getElementById("ipt_binario").value = parseInt(hexadecimal, 16).toString(2);
       document.getElementById("ipt_octal").value = parseInt(hexadecimal, 16).toString(8);
    }   


    /** CÁLCULO **/

function chamar_calculo () {
    if (tipos_bases.value == 10 ) {
        convert_decimal ();
    }

    if (tipos_bases.value == 2 ) {
        convert_binario ();
    }

    if (tipos_bases.value == 8 ) {
        convert_octal ();
    }

    if (tipos_bases.value == 16 ) {
        convert_hexadecimal ();
    
    }
}