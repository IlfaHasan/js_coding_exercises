export function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
  // Your code here!
}

export function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  var isManchester= false;
  if(person.city==='Manchester')
  {
    isManchester=true;
  }
  return isManchester;
  // Your code here!
}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  let result=Math.ceil(people/40);
  return result;
  // Your code here!
}

export function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  return arr.filter(x => x=='sheep').length;
  // Your code here!
}

export function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  var hasPostCode=false;
  if(person.address.postCode.substring(0,1)=='M' && person.address.city==='Manchester')
  {
    hasPostCode=true;
  }
  return hasPostCode;
  // Your code here!
}
