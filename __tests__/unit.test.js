// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//phone numbers

test('(198) 123-456-7890 is valid', () => {
    expect(functions.isPhoneNumber('(198) 123-456-7890')).toBe(true);
  }); 
  test('(111) 222-333-4444 is valid', () => {
    expect(functions.isPhoneNumber('((111) 222-333-4444')).toBe(true);
  }); 
  test('12345 is invalid', () => {
    expect(functions.isPhoneNumber('12345')).toBe(false);
  }); 
  test('34457890 is invalid', () => {
    expect(functions.isPhoneNumber('34457890')).toBe(false);
  }); 

//emails
test('abc@gmail.com is valid', () => {
    expect(functions.isEmail('abc@gmail.com')).toBe(true);
  });
  test('email@yahoo.co is valid', () => {
    expect(functions.isEmail('email@yahoo.co')).toBe(true);
  });
  test('abc@@gmail.com is invalid', () => {
    expect(functions.isEmail('abc@@gmail.com')).toBe(false);
  });
  test('@gmail.com is invalid', () => {
    expect(functions.isEmail('@gmail.com')).toBe(false);
  });

//passwords
test('ABC123__ is valid', () => {
    expect(functions.isStrongPassword('ABC123__')).toBe(true);
  });
  test('Password1234567 is valid', () => {
    expect(functions.isStrongPassword('Password1234567')).toBe(true);
  });
  test('5fUbd9jdg is invalid', () => {
    expect(functions.isStrongPassword('5fUbd9jdg')).toBe(false);
  });
  test('abc is invalid', () => {
    expect(functions.isStrongPassword('abc')).toBe(false);
  });

  //dates
  test('02062001 is invalid', () => {
    expect(functions.isDate('02062001')).toBe(false);
  });
  test('2/6/2001 is valid', () => {
    expect(functions.isDate('2/6/2001')).toBe(true);
  });
  test('12/13/1995 is valid', () => {
    expect(functions.isDate('12/13/1995')).toBe(true);
  });
  test('-5/-5/4000 is invalid', () => {
    expect(functions.isDate('-5/-5/4000')).toBe(false);
  });



  //hex colors
  test('2abada is valid', () => {
    expect(functions.isHexColor('2abada')).toBe(true);
  });
  test('ffffff is valid', () => {
    expect(functions.isHexColor('ffffff')).toBe(true);
  });
  test('a is invalid', () => {
    expect(functions.isHexColor('a')).toBe(false);
  });
  test('7777777 is invalid', () => {
    expect(functions.isHexColor('7777777')).toBe(false);
  });
