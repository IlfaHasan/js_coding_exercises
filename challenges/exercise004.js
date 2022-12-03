export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  const lessThanOne = nums.filter((num) => num<1);
  return lessThanOne; 
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  const startsWithArr = names.filter((name) => name.startsWith(char));
  return startsWithArr;
  
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  const verbArray = words.filter((word) => word.startsWith("to "));
  return verbArray;
  
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  const intArray = nums.filter( (num) => num > 0 && num % parseInt(num) === 0 );
  return intArray;
 }

export function getCities(users) {
  if (!users) throw new Error("users is required");
}
 

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  const sqrtArray= nums.map((num)=> Math.sqrt(num).toFixed(2));
  return sqrtArray;
  
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let maxSide=[];
  for(let i=0; i<triangles.length; i++)
  {
    maxSide.push(Math.max(...triangles[i]))
  }
    return maxSide;
  }
