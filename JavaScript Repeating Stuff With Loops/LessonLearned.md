JAVASCRIPT LOOPS 

Nos permite repetir funcionalidades (código)

Hay muchos tipos de loops: 
for loop

For ( 
     [initialExpression];
     [condition];
     [incrementExpression];
)

La sintaxis tene tres expresiones, primero la variable y muy común usar i en una variable de for loop, la segunda parte es una expresión de booleanos y mientras de true va a seguir corriendo. LA tercera parte es la expresión de incremento (i++) le añadimos uno 

For (let i = 1; I <= 10; I ++) {
 	console.log(i);
}

Loops infinitos


while loop
for… of loop
for… in loop

Nested loops  ejemplo: 

Let str = ‘LOL’; 
For (let i = 0; i <= 4; I++) {
	console.log(“outer:”, i); 
	for (let j = 0; j < str.lenght; j++) {
		console.log(‘   Inner: ‘, str[j]; 
	}
}

While loop: mientras esta condición sea real, el loop seguirá corriendo 
si le condición es falsa, el loop no corre 

The break keyword —> es más comunmente usada en los while loops 

For… Of loop 

For (variable of iteradle) { 
	statement 
}

El For Of generalmente es usado con arrays, es una manera de iterar sobre ellos 
Y la sintaxis es bastante más compacta y sencilla 