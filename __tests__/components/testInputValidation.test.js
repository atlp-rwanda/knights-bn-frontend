import React from 'react';
import { regexPatterns, validateInput } from '../../src/utils/validations/validateInputs';

describe('Test ResetPassword', () => {

  it('testing validation', () => {
    const testInvalid = {
      value: 'eukigali',
    };
    const testvalid = {
      value: 'eukigali@gmail.com',
    };

    expect(validateInput(testInvalid, regexPatterns.email)).toEqual('invalid');
    expect(validateInput(testvalid, regexPatterns.email)).toEqual('valid');
  });
});
