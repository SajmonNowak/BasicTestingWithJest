const capitalize = require('../code/capitalize.js');

test('test1', () => {
    expect(capitalize('sajmon')).toBe('Sajmon')
})

test('test2', () => {
    expect(capitalize('sajmon likes PEANUTBUTTER')).toBe("Sajmon likes PEANUTBUTTER")
})

test('test3', () => {
    expect(capitalize("peanut'But!er")).toBe("Peanut'But!er")
})