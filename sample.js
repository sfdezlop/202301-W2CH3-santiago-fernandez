const obj = { name: 'pepe', age: { name: 'luis', apell: 'navas' } };
console.log(JSON.stringify(obj)); //serialización o stringificación de un objeto (type of es string)
//Devuelve {"name":"pepe","age":{"name":"luis","apell":"navas"}}
console.log(JSON.parse(JSON.stringify(obj))); //objetiviza el string
//Devuelve { name: 'pepe', age: { name: 'luis', apell: 'navas' } }

//comentarios
