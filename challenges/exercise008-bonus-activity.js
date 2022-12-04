// Spread Syntax Bonus activity

export function printColours(colours) {
  if (!colours) throw new Error("colour is required");
   const [...rest]=colours;
   return rest;
 }

export function shoppingList(list, newItem) {
  if (!list) throw new Error("list is required");
  if (!newItem) throw new Error("newItem is required");
  const updatedShoppingList=list.concat(newItem);
  return updatedShoppingList;
}

export function highestNumber(numbers) {
  if (!numbers) throw new Error("numbers are required");
  return Math.max(...numbers);
}

export function splitThatString(string) {
  if (!string) throw new Error("string is required");
  const splitArray=string.split("");
  return splitArray;
  }

// Optional Chaining Bonus activity!

export function addressLookUp(user) {
  if (!user) throw new Error("user is required");
    const postcodePresent=user.address?user.address.postcode:undefined;
    return postcodePresent;
  }
