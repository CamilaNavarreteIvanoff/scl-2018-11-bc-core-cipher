window.cipher = {

  encode: (offset,texto) => {
    let resultado = '';
    offset= parseInt(offset);

  for (let i=0; i<texto.length; i++){
    let letraAscii=texto[i].charCodeAt();
    if (letraAscii >= 65 && letraAscii <= 90 ) {
      let letraConvertida=(letraAscii-65+ offset)%26+65;
      console.log(letraAscii);
      console.log(offset);
      resultado += String.fromCharCode(letraConvertida);
     

         }else if (letraAscii >= 97 && letraAscii <= 122 ) {
      let letraConvertida=(letraAscii-97+offset)%26+97; 
      resultado += String.fromCharCode(letraConvertida);
    }else{
      resultado += texto[i]
    }
    
    }
    return resultado;
    
  },

  decode: (offset,texto) => {
    let resultado = '';
    offset= parseInt(offset);

  for (let i=0; i<texto.length; i++){
    let letraAscii=texto[i].charCodeAt();
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
