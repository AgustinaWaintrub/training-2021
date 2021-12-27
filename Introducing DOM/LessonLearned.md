Introducing the DOM 

Document Object Model 
Son objetos con los cuales podemos interactuar via JS 

getElementById es un método del DOM, que cuando lo llamamos, le pasamos un string y ese string debe corresponder a un ID de un elemento. Si no hay un ID que exista nos va a retornar NULL 

getElementsByTagName es plural porque selecciona más de un elemento a la vez y si todo está correcto, nos retorna algo que se llama HTMLCollection
(se parece un array pero NO es un array) 
Con tags nos referimos a etiquetas, ejemplo —> getElementsByTagName(‘p’) 
Nos va a retornar todos los párrafos (p)

HTMLCollections --> contienen Elements 

getElementsByClassName 
En vez de seleccionar por ID, seleccionar por clases 
Si no encuentra una clase, en este caso, no nos devuelve NULL sino una HTMLCollection vacía 

querySelector
document.querySelector(‘p’) 
Podemos seleccionar por clase, id o por tagname 

querySelectorAll
Es lo mismo pero nos devuelve una colección de elementos

.textContent
.innerText —> nos da el texto, ignora las etiquetas 
.innerHTML —> nos devuelve todo el contenido incluido los tagnames, todo lo que está dentro de los tags

.getAttribute
.setAttribute 

.classList —> es un objeto con el que podemos interacutar para controlar las clases en un elemento y para retornarlas también 
Podemos usar métodos como remove() o add() en classList

.parentElement para ver el elemento padre de otro elemento 
.children
.nextSibling
.previousSibling

.nextElementSibling
.previosElementSibling 

.append nos permite insertar más de un elemento a la vez, a diferencia de .appendChild, pero nos inserta lo que queramos al final de todo


.remove
.removeChild

Es más común y cómodo usar el método .remove, .removeChild nos quita algo en base a su parent