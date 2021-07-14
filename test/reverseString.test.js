reverseString = require('../code/reverseString');

test('reverse1', () => {
    expect(reverseString('sajmon')).toBe('nomjas');
})

test('reverse1', () => {
    expect(reverseString('sajmon likes peanutbutter')).toBe('rettubtunaep sekil nomjas');
})
