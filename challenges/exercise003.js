export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map(x=>Math.pow(x,2));
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
  
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let totalSubjectsCount = 0;
  people.forEach(student => {
    totalSubjectsCount += student.subjects.length;
  });
  return totalSubjectsCount;  
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  return (menu.some(receipe => {
    return receipe.ingredients.some(i => {
      return i === ingredient;
    });
  }));
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  arr1 = arr1.filter(val => arr2.includes(val));
   arr1= arr1.sort();
   return [...new Set(arr1)];
  
}
