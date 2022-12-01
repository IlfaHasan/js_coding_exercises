export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  var i=null;
  if(nums.includes(n) && nums.indexOf(n)!==nums.length-1)
  {
    let i=nums.indexOf(n);
    return nums[i+1];
  } 
  else{
return i;
  }
  // Your code here!
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  let i=str.replace(/[^1]/g, "").length;
  let j=str.replace(/[^0]/g, "").length;
      return ({
    1:i,
    0:j
    });
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  let r = n.toString().split('').reverse().join('');
  return Math.sign(n) * parseInt(r);
  // Your code here!
};

export const sumArrays = (arrs) => {
  var sum=0;
    for(var a=0;a<arrs.length;a++){ 
        if(typeof arrs[a]=="number"){
            sum+=arrs[a];
        }else if(arrs[a] instanceof Array){
            sum+=sumArrays(arrs[a]);
        }
    }
    return sum;
  // Your code here!
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  let newArr=[];
  if(arr.length<2)
  {return arr;}
  else{
        [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
    return arr;
  }
  

  // Your code here!
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  let newArray= Object.values(haystack);
  const lowerCaseHaystack= newArray.map(value=>value.toLowerCase());
  return lowerCaseHaystack.includes(searchTerm);


  /*haystack = Object.fromEntries(
    Object.entries(haystack).map(([key, value]) => [key, value.toLowerCase()])
  );
   let exists = Object.values(haystack).includes(searchTerm.toLowerCase());
  return exists;*/
    
    // Your code here!
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  str=str.toLowerCase();
  var words = str.replace(/[^a-z ]/g, "").split(/\s/);
    var freqMap = {};
    words.forEach(function(w) {
        if (!freqMap[w]) {
            freqMap[w] = 0;
        }
        freqMap[w] += 1;
        });
                return freqMap;
  // Your code here!
};
