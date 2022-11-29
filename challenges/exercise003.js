export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map(x=>Math.pow(x,2));
  // Your code here!
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let result="";
  for(let i=0,length=words.length;i<length;i++)
  {
    let currentWord=words[i];
    let tempWord=currentWord.toLowerCase();
    if(i!=0)
    {
      tempWord=tempWord.substring(0,1).toUpperCase()+tempWord.substring(1);
      
    }
    result+= tempWord;
  }
  return result;
  // Your code here!
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  const subArray=people.map((x)=>x.subjects);
  return subArray.length;

 /* var i;
  var count=0;
  for(i=0;i<people.legth;i++)
  {
    if(people[i].subjects.length==0)
    {
      var count=0;
    }
    else
    {
      count+=people[i].subjects.length;
    }

  }
   return count;*/

  // Your code here!
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  var ingredientFound=false;
  if (menu.filter(e => e.ingredients == ingredient).length > 0)
  {
    ingredientFound= true;
  }
   
  return ingredientFound;
  // Your code here!
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  arr1 = arr1.filter(val => arr2.includes(val));
   arr1= arr1.sort();
   return [...new Set(arr1)];
  // Your code here!
}
