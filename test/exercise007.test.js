import {
    createRange,
    sumDigits,
     } from "../challenges/exercise007";
        
    describe("createRange", () => {
    test("returns array of numbers staring with start and ending with end and gap between the numbers as step", () => {
      expect(createRange(3,11,2)).toEqual([3,5,7,9,11]);      
    });
  
    test("if the step is not specified increment the array numbers by 1", () => {
      expect(createRange(3,11)).toEqual([3,4,5,6,7,8,9,10,11]);
    });
  
    test("if the step is passed to the function,increment the array numbers by step", () => {
      expect(createRange(4,12,2)).toBe([4,6,8,10,12]);
    });
  });

  describe("sumDigits", () => {
    test("returns the sum of digits of the input number", () => {
      expect(sumDigits(32)).toBe(5);      
    });
  
    test("returns the sum of digits of the input number", () => {
      expect(sumDigits(100)).toBe(1);
    });
  
  });