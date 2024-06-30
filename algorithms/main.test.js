import {expect, test} from 'vitest';

import { cumSum } from './cum_sum'
import { search } from './binary_search'

test('cumulative sum of an array', () => {
    expect(cumSum([1, 3, 5, 7])).toBe(16);
    expect(cumSum([-2, -4, -8])).toBe(-14);
});

test('binary search of an array', () => {
    expect(search(['a', 'b', 'c', 'x', 'y', 'z'], 'b')).toBe(1)
    expect(search(['a', 'b', 'c', 'x', 'y', 'z'], 'z')).toBe(5)
});

