import { test, expect } from '@jest/globals';
import * as functions from '../src/functions.js';

test('reverseNumber', async () => {
  if (functions.reverseNumber) {
    expect(functions.reverseNumber(11)).toBe(11);
    expect(functions.reverseNumber(12345)).toBe(54321);
    expect(functions.reverseNumber(9876)).toBe(6789);
    expect(functions.reverseNumber(0)).toBe(0);
    expect(functions.reverseNumber(123)).toBe(321);
    expect(functions.reverseNumber(1001)).toBe(1001);
    expect(functions.reverseNumber(211)).toBe(112);
  } else {
    expect().toThrowError();
  }
});

test('isPerfectSquare', async () => {
  if (functions.isPerfectSquare) {
    expect(functions.isPerfectSquare(16)).toBeTruthy();
    expect(functions.isPerfectSquare(9)).toBeTruthy();
    expect(functions.isPerfectSquare(0)).toBeTruthy();
    expect(functions.isPerfectSquare(25)).toBeTruthy();
    expect(functions.isPerfectSquare(121)).toBeTruthy();
    expect(functions.isPerfectSquare(-1)).toBeFalsy();
    expect(functions.isPerfectSquare(-4)).toBeFalsy();
    expect(functions.isPerfectSquare(9.99)).toBeFalsy();
    expect(functions.isPerfectSquare(-25)).toBeFalsy();
  } else {
    expect().toThrowError();
  }
});

test('factorial', async () => {
  if (functions.factorial) {
    expect(functions.factorial(0)).toBe(1);
    expect(functions.factorial(1)).toBe(1);
    expect(functions.factorial(3)).toBe(6);
    expect(functions.factorial(4)).toBe(24);
    expect(functions.factorial(5)).toBe(120);
  } else {
    expect().toThrowError();
  }
});

test('findGCD', async () => {
  if (functions.findGCD) {
    expect(functions.findGCD(48, 18)).toBe(6);
    expect(functions.findGCD(27, 14)).toBe(1);
    expect(functions.findGCD(25, 5)).toBe(5);
    expect(functions.findGCD(10, 11)).toBe(1);
    expect(functions.findGCD(44, 11)).toBe(11);
  } else {
    expect().toThrowError();
  }
});

test('mergeStrings', async () => {
  if (functions.mergeStrings) {

    expect(functions.mergeStrings('Hello', 'World', 'JavaScript', 'Open', 'ii')).toEqual('HelloWorldJavaScriptOpenii');
    expect(functions.mergeStrings()).toEqual('');
    expect(functions.mergeStrings('Hello', 'World')).toEqual('HelloWorld');
    expect(functions.mergeStrings('Hello', 'JavaScript', '!',)).toEqual('HelloJavaScript!');
    expect(functions.mergeStrings('qwerty')).toEqual('qwerty');
    expect(functions.mergeStrings('a', 'b')).toEqual('ab');
    expect(functions.mergeStrings('a', 'C', '!')).toEqual('aC!');
  } else {
    expect().toThrowError();
  }
});
