import { test, expect } from '@jest/globals';
import reverse from '../src/str.js';

// eslint-disable-next-line no-undef
test('reverse', () => {
  expect(reverse('hello')).toEqual('olleh');
  expect(reverse('')).toEqual('');
});
