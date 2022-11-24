function ordenarDatos(dato){
    const respuesta= Object.keys(dato).sort().reduce( (nuevoObjeto, posicion) => {
        nuevoObjeto[posicion] = dato[posicion];
        return nuevoObjeto;
      },  {});;
    
    return respuesta;
}

function KYV(obj){
    
    let keys = Object.keys(obj);
    let values= Object.values(obj);
    
    return [keys, values];
}

 const dato1={b:2,c:3,a:1};
 const dato2={a:"Apple",b:"Microsoft",c:"Google"};
 const dato3={key1:"True",key2:"False",key3:"Undefined"};
 ordenarDatos(dato1);
 const dato_ordenado1=ordenarDatos(dato1);
 ordenarDatos(dato2);
 const dato_ordenado2=ordenarDatos(dato2);
 ordenarDatos(dato3);
 const dato_ordenado3=ordenarDatos(dato3);
 
let Keys_Values1=[KYV(dato_ordenado1)];
let Keys_Values2=[KYV(dato_ordenado2)];
let Keys_Values3=[KYV(dato_ordenado3)];

console.log("****Resultado****");
console.log("{a:1,b:2,c:3}");
console.log(Keys_Values1);
console.log("{a:Apple, b:Microsoft, c:Google}");
console.log(Keys_Values2);
console.log("{key1:True, key2:False, key3:Undefined}");
console.log(Keys_Values3);
