import { describe, expect, it, vi } from "vitest";
import { findLongestWord, charCount, mergeSortedArrays, flattenArray, groupBy, debounce } from "./premade-functions.js";

describe("findLongestWord", () => {

    it("should recieve a string and return the longest word", () => {
        // TODO
        // expect(...)
        expect(findLongestWord("en to tre træ")).toBe("tre", "træ")
    });


    // this should fail because "to" is not the longest word

    // it("should recieve a string and return the longest word", () => {
    //     // TODO
    //     // expect(...)
    //     expect(findLongestWord("en to tre træ")).toBe("to")
    // });

});

// Lav selv tests for de andre functions...

describe("charcount", () => {

    it("should count how many of each characters there are", () => {
        expect(charCount("vitest")).toEqual({
            v: 1, i: 1, t: 2, e: 1, s: 1
        })
    })

    // this should fail because there is 2 t's, not 1

    // it("should count how many of each characters there are", () => {
    //     expect(charCount("vitest")).toEqual({
    //         v:1, i:1, t:1, e:1, s:1
    //     })
    // })
})

describe("mergeSortedArrays", () => {

    it("should test if merged is equal to i +j", () => {
        expect(mergeSortedArrays([1, 2], [3, 4])).toEqual([1, 2, 3, 4])
    })

    // this should fail because the arrays merged isnt 1, 2, 3, 4

    // it("should test if merged is equal to i +j", () => {
    //     expect(mergeSortedArrays([1, 2], [1, 2])).toEqual([1, 2, 3, 4])
    // })
})

describe("flattenArray", () => {

    it("should test that the array is flatten out, so no more nested arrays", () => {
        expect(flattenArray([1, [2, 3], 4, [5, [6, 7]], 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
    })

    // this should fail because there is still a nested array

    // it("should test that the array is flatten out, so no more nested arrays", () => {
    //     expect(flattenArray([1, [2, 3], 4, [5, [6, 7]], 8])).toEqual([1, 2, 3, 4, 5, 6, [7, 8]])
    // })
})

describe("groupBy", () => {

    const input = [
        { type: 'fruit', name: 'banana' },
        { type: 'notFruit', name: 'tacos' },
        { type: 'fruit', name: 'apple' },
        { type: 'notFruit', name: 'salsa' }
    ]

    it("should group the obj's together with other obj's that have the same key", () => {
        expect(groupBy(input, 'type')).toEqual({
            fruit: [
                { type: 'fruit', name: 'banana' },
                { type: 'fruit', name: 'apple' }
            ],
            notFruit: [
                { type: 'notFruit', name: 'tacos' },
                { type: 'notFruit', name: 'salsa' }
            ]
        })
    })
})

describe("debounce", () => {

    it("should run the function x amount of time after its called", () => {
        vi.useFakeTimers();

        const func = vi.fn();
        const debounced = debounce(func, 500);

        debounced();
        debounced();
        debounced();

        expect(func).not.toHaveBeenCalled();

        vi.advanceTimersByTime(499);
        expect(func).not.toHaveBeenCalled();

        vi.advanceTimersByTime(1);
        expect(func).toHaveBeenCalledTimes(1);

        vi.useRealTimers();
    })
})