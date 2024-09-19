// sum.test.ts
import {describe, expect, test} from '@jest/globals';
import {sum} from './sum';

describe('sum module', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
});

describe('wrong module', () => {
    test('adds 1 + 1 to equal 3', () => {
        expect(sum(1, 1)).toBe(3);
    });
});
