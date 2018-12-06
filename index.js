document.getElementById("botonUno").addEventListener("click", (evento) =>{
    evento.preventDefault();

    document.getElementById("divUno").style.display="none";
    document.getElementById("divDos").style.display="block";

})
             
     
 document.getElementById("cifrar").addEventListener("click",() =>{
   
    let texto= document.getElementById("mensaje").value;
    let offset= document.getElementById("offset").value;

    let result= window.cipher.encode(offset, texto);

    document.getElementById("resultado").innerHTML = result;
     
 }) 

 document.getElementById("descifrar").addEventListener("click",() =>{
   
    let texto= document.getElementById("mensaje").value;
    let offset= document.getElementById("offset").value;

    let result= window.cipher.decode(offset, texto);

    document.getElementById("resultado").innerHTML = result;
     
 }) 

 document.getElementById("borrar").addEventListener("click", () =>{
     document.getElementById("mensaje").value = "";
     document.getElementById("offset").value = "";
     document.getElementById("resultado").value = "";

 })
 








    
    //  //function cifrar(){
    //    // console.log("funciona");
    //     let texto= document.getElementById("mensaje").value;
    //     let offset= document.getElementById("offset").value;
    //    // console.log(offset);

    //     let result= window.cipher.encode(offset, texto);
    //     //console.log(result);

    //     document.getElementById("resultado").innerHTML = result;

    




//function descifrar(){
    //console.log("funcionadenuevo");
   // let texto= document.getElementById("mensaje").value;
   // let offset= document.getElementById("offset").value;
    
   // let result= window.cipher.decode(offset, texto);
    //console.log(result);

   // document.getElementById("resultado").innerHTML = result;




