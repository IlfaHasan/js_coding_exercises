import {
    isValidDNA,
    getComplementaryDNA,
    createMatrix,
    isItPrime,
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
        test("returns an n dimensional array with all value fill", () => {
          expect(createMatrix(2, "wow")).toEqual([
            ["wow", "wow"]
            ["wow", "wow"]]);
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