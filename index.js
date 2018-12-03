function myfunction(){
    document.getElementById("uno").innerHTML = `
         <div >
         <textarea type="text" id="mensaje" placeholder="escribe tu mensaje"></textarea>
       </div>
   
       <div>
         <input type="text" placeholder="offset" id=offset>
       </div>
   
       <button onclick="cifrar()">cifrar</button>
       <button onclick="descifrar()">descifrar</button>
   
       <div >
           <textarea type="text" id="resultado" rows="10" cols="50" placeholder="resultado"></textarea>
         </div>
        `; }
     
     
         



function cifrar(){
    //console.log("funciona");
    let texto= document.getElementById("mensaje").value;
    let offset= document.getElementById("offset").value;
    
    let result= window.cipher.encode(offset, texto);
    //console.log(result);

    document.getElementById("resultado").innerHTML = result;

};

function descifrar(){
    //console.log("funcionadenuevo");
    let texto= document.getElementById("mensaje").value;
    let offset= document.getElementById("offset").value;
    
    let result= window.cipher.decode(offset, texto);
    console.log(result);

    document.getElementById("resultado").innerHTML = result;

};


