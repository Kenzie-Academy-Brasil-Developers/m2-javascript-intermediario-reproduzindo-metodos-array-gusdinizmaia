// Método Map ---------

const arrayMap = [1, 2, 3, 4, 5]; //esse é o array que você terá que iterar

function callbackMap(element, index, array) {
  return `Número ${element} no index: ${index}, veio desse array: ${array}`;
}

function map(array, callback) {
  let elemento = []
  for(let i=0;i<array.length;i++){
    elemento.push(callback(array[i],array.indexOf(array[i]),array))
  }
  return elemento
}

console.table(map(arrayMap, callbackMap));


//Método Filter ---------

const arrayFilter = [1, 2, 3, 4, 5]; //esse é o array que você terá que iterar

function callbackFilter(element, index, array) {
  if (element > 2 && index && array.length > 2) {
    return true;
  }
}

function filter(array, callback) {
  let elemento = []
  for(let i=0;i<array.length;i++){
    if((callback(array[i],array.indexOf(array[i]),array)==true)){
      elemento.push(array[i])
    }
  }
  return elemento
}




console.log(filter(arrayFilter, callbackFilter));

//Método Reduce ---------

const arrayReduce = [1, 2, 3, 4, 5];

function callbackReduce(acumulator, valorAtual) {
  return acumulator + valorAtual;
}

function reduce(array, callback, initialValue = array[0]) {
  let result = 0
  for(let i=0;i<array.length;i++){
    result = result + array[i]
  }
  return callback(result,initialValue)
}

console.log(reduce(arrayReduce, callbackReduce));
console.log(reduce(arrayReduce, callbackReduce, 50));
