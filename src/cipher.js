window.cipher = {

  encode: (offset,texto) => {
    let resultado = '';
    offset= parseInt(offset);    // para traer el valor como numero y no string
    if (offset <0){
     offset= offset *-1 ;}

  for (let i=0; i<texto.length; i++){ //para recorrer el string-lenght para saber su longitud
    let letraAscii=texto[i].charCodeAt(); //devuelve la posición de cada letra
        
     //if (letraAscii >= 160 && letraAscii <= 255 ) {
     // let letraConvertida=(letraAscii-160+offset)%26+160; 
     // resultado += String.fromCharCode(letraConvertida);}

    if (letraAscii >= 65 && letraAscii <= 90 ) { //formula para obtener el codigo ascii
        let letraConvertida=(letraAscii-65+ offset )%26+65;
        resultado += String.fromCharCode(letraConvertida);}//me devuelve la cadena completa de texto
     
    else if (letraAscii >= 97 && letraAscii <= 122 ) {
        let letraConvertida=(letraAscii-97+offset)%26+97; 
        resultado += String.fromCharCode(letraConvertida);}
      
      //else if (letraAscii === 164 ) {
      //  let letraConvertida=(letraAscii+offset); 
      //  resultado += String.fromCharCode(letraConvertida);}
    
     else{
      resultado += texto[i]//+= trae la cadena completa del texto
    }
    
    }
    return resultado;
    
  },

  decode: (offset,texto) => {
    let resultado = '';
    offset= parseInt(offset);
    if (offset <0){
      offset= offset *-1 ;}

  for (let i=0; i<texto.length; i++){
    let letraAscii=texto[i].charCodeAt();

    //if (letraAscii >= 160 && letraAscii <= 255 ) {
    //  let letraConvertida=(letraAscii-160-offset)%26+160;
    //  if (letraConvertida<160){
    //    letraConvertida+=96;
    //  }
    //  resultado += String.fromCharCode(letraConvertida);



    if (letraAscii >= 65 && letraAscii <= 90 ) {
      let letraConvertida=(letraAscii-65-offset)%26+65;
      if (letraConvertida<65){
        letraConvertida+=26;
      }
      resultado += String.fromCharCode(letraConvertida);
    }else if (letraAscii >= 97 && letraAscii <= 122 ) {
      let letraConvertida=(letraAscii-97-offset)%26+97;
      if (letraConvertida<97){
        letraConvertida+=26;
      }
      resultado += String.fromCharCode(letraConvertida);
    }else{
      resultado += texto[i]
    }
    
    }
    return resultado;
    /* Acá va tu código */
  }
};
