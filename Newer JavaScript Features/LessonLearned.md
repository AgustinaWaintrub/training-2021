NEWER JAVASCRIPT FEATURES

Default Params 

Nos permite que los parametros a los que les pongamos un valor sean inicializados
con valores por default si los argumentos no son dados en la función 


Spread 
Expande algo iterable como un array, un string, etc, en una lista de argumentos 
(… )

Spread en object literals 
Copia propiedades de un objeto dentro de otro object literal
Suele usarse cuando queramos crear copias de un objeto 

Rest params
Rest usa tres puntos también … pero NO es lo mismo que Spread 
Obtiene todos los parametros que quedan en un array 

Destructuring array []
Podemos extraer valores de arrays u objetos 

tenemos un arrray 

const array = [8, 9, 10]

const [muy bien, muy muy bien, excelente] = array; 


Destructuring Objects {}

tenemos un objeto con un usuario y sus datos 
podemos extraer sus datos en una sola línea de esta manera: 

const user = {
	email: ‘blabla@hotmail.com, 
	firstName: ‘Bla’, 
	city: ‘Bla City’, 
	bio: ‘me gusta andar por la city’

}

const { email, firstName, city, bio } = user; 

