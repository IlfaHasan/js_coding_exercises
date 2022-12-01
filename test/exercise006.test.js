import {
    isValidDNA,
        } from "../challenges/exercise006";

    describe("isValidDNA", () => {
        test("returns the next number after the given number in the array", () => {
          expect(isValidDNA("CCAGT")).toBe(true);
          expect(isValidDNA("BSCCGTA")).toBe(false);
        });
      
        test("if the string has only the valid DNA alphabets", () => {
          expect(isValidDNA("GCAAAT")).toBe(true);
        });
      
        test("if the input string has letters not valid in a DNA sequence", () => {
          expect(isValidDNA("BSGCATTA")).toBe(false);
        });
            });
      