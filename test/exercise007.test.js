import {
    createRange,
    sumDigits,
    hexToRGB,
    getScreentimeAlertList,
     } from "../challenges/exercise007";
        
    describe("createRange", () => {
    test("returns array of numbers staring with start and ending with end and gap between the numbers as step", () => {
      expect(createRange(3, 11, 2)).toStrictEqual([3,5,7,9,11]);      
    });
  
    test("if the step is passed to the function,increment the array numbers by step", () => {
      expect(createRange(4,12,2)).toStrictEqual([4,6,8,10,12]);
    });

    test("if the step is not passed to the function,increment the array numbers by 1", () => {
        expect(createRange(4,8)).toStrictEqual([4,5,6,7,8]);
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
  describe("hexToRGB", () => {
    test("returns RGB format of the hexadecimal format", () => {
      expect(hexToRGB('1502BE')).toEqual([21, 2, 190]);      
    });  
      
  });

  describe("getScreentimeAlertList", () => {
    test('it throws an error if not passed users or date ', () => {
        const users = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
        ];
        expect(() => {
            getScreentimeAlertList();
        }).toThrow("users is required");
        expect(() => {
            getScreentimeAlertList(users);
        }).toThrow("date is required");
    });

    test('return empty array if date not found in user array  or no user exceed limit usage time in this date', () => {
        const users = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-06-04", usage: { twitter: 10, instagram: 20, facebook: 70 } },
                ]
            },
            {
                username: "Ilfa_1234",
                name: "Ilfa",
                screenTime: [
                    { date: "2019-06-01", usage: { twitter: 34, instagram: 8, facebook: 40 } },
                    { date: "2019-06-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-06-03", usage: { twitter: 12, instagram: 0, facebook: 19 } },
                    { date: "2019-06-04", usage: { twitter: 10, instagram: 40, facebook: 10 } },
                ]
            }
        ];
        expect(getScreentimeAlertList(users, '2019-06-07')).toStrictEqual([]);
        expect(getScreentimeAlertList(users, '2019-06-04')).toStrictEqual([]);
    });
    test('return all users in array if usage record are above 100 min in given date', () => {
        const users = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-06-01", usage: { twitter: 34, instagram: 22, facebook: 60 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
            {
                username: "Ilfa_1234",
                name: "Ilfa ",
                screenTime: [
                    { date: "2019-06-01", usage: { twitter: 34, instagram: 60, facebook: 40 } },
                    { date: "2019-06-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-06-03", usage: { twitter: 12, instagram: 0, facebook: 19 } },
                    { date: "2019-06-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            }
        ];
        expect(getScreentimeAlertList(users, '2019-06-01')).toStrictEqual(["beth_1234", "Ilfa_1234"]);
    });
});