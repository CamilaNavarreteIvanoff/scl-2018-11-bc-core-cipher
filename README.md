# EnClave
***

## descripción
***
Es una pagina web que ofrece enviar mensajes amorosos entre personas que ya tienen una relación, entregando seguridad al usuario de que sus mensajes no serán leido por su pareja o una tercera persona, ya que ocupa el sistema de cifrado César que codifica por sustitución, reemplazando las letras originales de sus mensajes por otras de más adelante,colocandole un numero de desplazamiento.

### Qué es
### Cómo funciona
### Donde puedo obtenerla


## investigación
***
Se tomo como punto de inicio la situación de los <b>mensajes</b> secretos para parejas, estas personas que ocupan páginas web o apps para conocer gente, se pueden dividir en dos grupos los que buscan conocer gente estando solteros y los que buscan ya estando en  una relación.

Para los que estan solteros no es tan importante que los mensajes sean secretos, sino que tienen otros problemas como que hablar con alguien que no es quien dice ser, que los estafen o los acosen.

<b>Mientras  los que ya estan en una relación su principal problema es mantener la confidencialidad de los mensajes.</b><br>
-Según una encuesta entregada por Adimark el 30% de las mujeres afirma haber sido infiel y un 46% los hombres.<br>
-La página Ashley Madison que su servicio es conocer gente para tener aventuras,reveló que Chile es el segundo pais que más ocupa su página, en primer lugar esta Estados Unidos.

![research](digitalizaciones/1.png)


## Definición usuario
***
Los usuarios para los cuales esta enfocado esta página son mujeres y hombres entre los 25 y 45 años de edad, que ya tienen mas de tres años en una relación,son profesionales, activos profesionalmente, dedican mucho tiempo a las redes sociales y estan abierto a la opción de la "infidelidad virtual".

![user](digitalizaciones/2.png) 

## Problemática
***
La necesidad de nuestro usuario es <b>enviar información delicada a otro con total garantía que no sera accesible a otro</b>, proteger su privacidad.<br>

Actualmente existen páginas web y apps para conocer gente que ya tiene una relación, el problema es la seguridad de los mensajes.<br>

<b>Es por eso que se diseño una página web que codifica mensajes para mantener la privacidad y luego que el mensaje está codificado se puede mandar a través de las páginas existentes.</b>

![problema/solucion](digitalizaciones/3.png)

 ## Interfaz
 ***
En el desarrollo de la interfaz con el usuario primero se planificó los pasos para ocupar el cifrado, como se vé en la imagen el segundo orden es el que se ocupó:
- 1.Se inserte un mensaje.<br>
- 2.Se elija un desplazamiento.<br>
- 3.Se elija cifrar o descifrar.<br>
- 4.Se vea el mensaje cifrado o descifrado.<br>

![flujo](digitalizaciones/5.png)

## Flujo 
***
Una vez ya teniendo claro los pasos para el cifrado, se desarrollo el flujo del recorrido del usuario:<br>
- 1.Se entra a la página.<br>
- 2.Se explica el servicio de la página.<br>
- 3.Se da la opción para que el usuario pueda continuar en la página.<br>
- 4.Se ven pequeños parrafos con las instrucciones para ocupar el cifrado con las pasos anteriores.<br>
- 5.Una vez terminado, tiene la opción de borrar el mensaje.

![flujo](digitalizaciones/4.png)

## Desiciones de diseño
***
Se trabajó con dos pantallas, en la primera se presenta el servico al usuario y en la segunda puede acceder al servicio, se hace esto porque el usuario especpifico de esta página necesita que sea discreto que no llame la atención y no revele altiro el cifrado, los colores de la página tambien reflejan un lugar tranquilo, que entregue seguridad a través de los tonos celestes, blancos y en menor proporción negro.

![sketches](digitalizaciones/6.png)
![sketches](digitalizaciones/7.png)



 

 


### Parte Obligatoria
* [ ] `README.md` incluye info sobre proceso y decisiones de diseño.
* [ ] `README.md` explica claramente quiénes son los usuarios y su relación con
  el producto.
* [ ] `README.md` explica claramente cómo el producto soluciona los
  problemas/necesidades de los usuarios.
* [ ] Usa VanillaJS.
* [ ] No utiliza `this`.
* [ ] Implementa `cipher.encode`.
* [ ] Implementa `cipher.decode`.
* [ ] Pasa linter con configuración provista.
* [ ] Pasa pruebas unitarias.
* [ ] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un
  mínimo del 50% de _branches_.
* [ ] Interfaz permite elegir el `offset` o _desplazamiento_ a usar en el
  cifrado/descifrado.
* [ ] Interfaz permite escribir un texto para ser cifrado.
* [ ] Interfaz muestra el resultado del cifrado correctamente.
* [ ] Interfaz permite escribir un texto para ser descifrado.
* [ ] Interfaz muestra el resultado del descifrado correctamente.

### Parte Opcional: "Hacker edition"
* [ ] Cifra/descifra minúsculas
* [ ] Cifra/descifra _otros_ caracteres (espacios, puntuación, `ñ`, `á`, ...)
* [ ] Permite usar un `offset` negativo.
