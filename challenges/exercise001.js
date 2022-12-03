// Note: Be sure to check out all the exercises corresponding .md files (in docs)! 📘 👍

export function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.substring(0,1).toUpperCase() + word.substring(1, word.length);
}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase();
}

export function addVAT(originalPrice, vatRate) {
    if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  
    let vatPrice= originalPrice+(originalPrice*(vatRate/100));
    
    return vatPrice;
  // Add your code here!
}

export function getSalePrice(originalPrice, reduction) {

  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  let SalePrice=originalPrice-(originalPrice*(reduction/100)).toFixed(2);
    return SalePrice;
  // Add your code here!
}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  return str.substr(Math.ceil(str.length / 2 - 1), str.length % 2 === 0 ? 2 : 1);
  
  // Add your code here!
}

export function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
 var newWord="";
 var i;
 for(i=word.length-1;i>=0;i--)
 {
  newWord+=word[i];
 }
 return newWord;
  // Add your code here!
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  return words.map(item => item.split('').reverse().join(''));
  //let reverseWordArr = words.split(" ").map(word => word.split("").reverse().join(""));
 
  }
  // Add your code here!


export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  return users.filter(e => e.type === 'Linux').length;
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
 let sum=0;
  
  for(let number of scores)
  {
    sum+=number;
  }
   let meanScore=sum/scores.length;
   if(meanScore - Math.floor(meanScore) != 0)
   {
    meanScore=parseFloat(meanScore.toFixed(2));
   }
  return meanScore;

  // Add your code here!
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  let result="";
  if(n%3===0)
  {
    result="fizz";
  }
  if(n%5===0)
  {
    result="buzz"
  }
  if(n%3!==0 && n%5!==0)
  {
    result=n;
  }
  if(n%3===0 && n%5===0)
  {
    result="fizzbuzz";
  }
  return result;
  // Add your code here!
}
