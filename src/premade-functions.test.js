import { describe, expect, it, vi } from "vitest";
import {
  findLongestWord,
  charCount,
  mergeSortedArrays,
  flattenArray,
  groupBy,
  debounce,
} from "./premade-functions.js";
import { should } from "vitest";

describe("findLongestWord", () => {
  //this shouldnt work
  //   it("should recieve a string and return the longest word", () => {
  //     expect(findLongestWord("I like peperoni pizza")).toBe("like");
  //   });
  it("should recieve a string and return the longest word", () => {
    expect(findLongestWord("I like peperoni pizza")).toBe("peperoni");
  });

  it("should recieve a string and return the longest word", () => {
    expect(findLongestWord("I invite you to the tiktok riz party")).toBe(
      "invite",
      "tiktok"
    );
  });
});

describe("charCount", () => {
  //   //this should fail cause there is no t
  //   it("should how many characters are in a word", () => {
  //   expect(charCount("apple")).toEqual({ a: 1, p: 2, t: 2, e: 1, l: 1 });
  // });
  it("should how many characters are in a word", () => {
    expect(charCount("vitest")).toEqual({ v: 1, i: 1, t: 2, e: 1, s: 1 });
  });
});

describe("mergeSortedArrays", () => {
  // it should fail cause it is the wrong numbers
  // it("should get two arrays and meger them into only 1 array", () => {
  //     expect(mergeSortedArrays([1, 2], [2, 4])).toEqual([1, 2, 3, 4])
  // })

  it("should get two arrays and meger them into only 1 array", () => {
    expect(mergeSortedArrays([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
  });
});

describe("flattenArray", () => {
  //it should fail cause it ahs worng expect
  // it("should get a nested array and make it flat", () => {
  //     expect(flattenArray([1, 2, 3])).toEqual([1, 2, 3, 4])
  // })
  it("should get a nested array and make it flat", () => {
    expect(flattenArray([1, 2, [3, 4]])).toEqual([1, 2, 3, 4]);
  });
});
//
describe('groupBy', () => {
  const input = [
    { type: 'fruit', name: 'apple' },
    { type: 'vegetable', name: 'lettuce' },
    { type: 'fruit', name: 'banana' },
  ]
//   //it should fail it is in the wring order
//   it('groups objects by the specified property', () => {
//     expect(groupBy(input, 'type')).toEqual({
//       fruit: [
//           { type: 'fruit', name: 'banana' },
//         { type: 'fruit', name: 'apple' }
//       ],
//       vegetable: [{ type: 'vegetable', name: 'lettuce' }],
//     })
//   })
  it('groups objects by the specified property', () => {
    expect(groupBy(input, 'type')).toEqual({
      fruit: [
        { type: 'fruit', name: 'apple' },
        { type: 'fruit', name: 'banana' },
      ],
      vegetable: [{ type: 'vegetable', name: 'lettuce' }],
    })
  })
})



describe('debounce', () => {
   it('delays function execution until after delay', () => {
    vi.useFakeTimers()
    const mockFn = vi.fn()
    const debounced = debounce(mockFn, 200)

    debounced()
    debounced()
    debounced()

    expect(mockFn).not.toHaveBeenCalled()

    vi.advanceTimersByTime(200)

    expect(mockFn).toHaveBeenCalledTimes(1)

    vi.useRealTimers()
  })
})
