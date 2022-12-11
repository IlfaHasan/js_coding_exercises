import {
    isValidDNA,
    getComplementaryDNA,
    createMatrix,
    isItPrime,
    sumMultiples,
    areWeCovered,
        } from "../challenges/exercise006";

    describe("isValidDNA", () => {
        test("returns true for a valid DNA string", () => {
          expect(isValidDNA("CCAGT")).toBe(true);
          expect(isValidDNA("BSCCGTA")).toBe(false);
        });
      
        test("if the string has only the valid DNA alphabets", () => {
          expect(isValidDNA("GCAAAT")).toBe(true);
        });
      
        test("if the input string has letters not valid in a DNA sequence", () => {
          expect(isValidDNA("PQGCATTA")).toBe(false);
        });
      });
      
      describe("getComplementaryDNA", () => {
        test("returns the complementary pair of the DNA string", () => {
          expect(getComplementaryDNA("CCAGT")).toBe("GGTCA");
          expect(getComplementaryDNA("AATTCG")).toBe("TTAAGC");
        });
      
        test("returns complementary pair of the DNA input string", () => {
          expect(getComplementaryDNA("GCAAAT")).toBe("CGTTTA");
        });
      
       });

       describe("createMatrix", () => {
        test('it throws an error if not pass parameters ', () => {
            expect(() => {
                createMatrix();
            }).toThrow("n is required");
            expect(() => {
                createMatrix(5);
            }).toThrow("fill is required");
        });
        test('should return matrix ', () => {
            
            expect(createMatrix(3, 'fn')).toStrictEqual([['fn', 'fn', 'fn'], ['fn', 'fn', 'fn'], ['fn', 'fn', 'fn']]);
        });
    });
       describe("isItPrime", () => {
        test("returns true for a prime number", () => {
          expect(isItPrime(7)).toBe(true);
          expect(isItPrime(8)).toBe(false);
        });
      
        test("if the input number is prime nu,ber return true", () => {
          expect(isItPrime(3)).toBe(true);
        });
      
        test("if the input number is not prime return false", () => {
          expect(isItPrime(8)).toBe(false);
        });
      });

      describe("sumMultiples", () => {
        test("returns sum of numbers in the array which are multiples of both 3 and 5", () => {
          expect(sumMultiples([2,5,15,7,30])).toBe(45);
        });
      
        test("returns sum of numbers which are multiples of 3 and 5", () => {
          expect(sumMultiples([2,6,8,9,12,15])).toBe(15);
        });
        test("returns sum of numbers which are multiples of 3 and 5", () => {
            expect(sumMultiples([15,14,10,30,60])).toBe(105);
          });
      
       });

       describe("areWeCovered", () => {
        test('it throws error send undefined staff or day', () => {
            expect(() => {
                areWeCovered(areWeCovered());
            }).toThrow("staff is required");
            expect(() => {
                areWeCovered(([{ name: "ilfa", rota: ["Monday", "Wednesday"] }]));
            }).toThrow("day is required");
    
    
        });
        test('it returns false , if  there are no  staff', () => {
            expect(areWeCovered([], 'Saturday')).toBe(false);
        });
        test('it returns false , if  there are  staff but not schedual to work ', () => {
            const staff = [
                { name: "ilfa", rota: ["Monday", "Wednesday"] },
                { name: "sarah", rota: ["Monday", "Wednesday"] },
                { name: "Norah", rota: ["Monday", "Wednesday"] },
                { name: "maryam", rota: ["Monday", "Wednesday"] }
            ];
            expect(areWeCovered(staff, 'Saturday')).toStrictEqual(false);
        });
        test('it returns true , if  there are more than 3 staff  ', () => {
            const staff = [
                { name: "ilfa", rota: ["Monday", "Wednesday"] },
                { name: "sarah", rota: ["Monday", "Wednesday"] },
                { name: "Norah", rota: ["Monday", "Wednesday"] },
                { name: "maryam", rota: ["Monday", "Wednesday"] }
            ];
            expect(areWeCovered(staff, 'Monday')).toBe(true);
        });
    });