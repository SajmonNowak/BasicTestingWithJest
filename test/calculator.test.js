const { add, subtract, multiply, divide } = require('../code/calculator')


test('add 1 and 2', () => {
    expect(add(1,2)).toBe(3)
})

test('add -1 and 2', () => {
    expect(add(-1,2)).toBe(1)
})

test('subtract 1 and 2', () => {
    expect(subtract(1,2)).toBe(-1)
})

test('multiply 1 and 9', () => {
    expect(multiply(1,9)).toBe(9)
})


test('multiply 0 and 9', () => {
    expect(multiply(0,9)).toBe(0)
})

test('multiply -2 and 9', () => {
    expect(multiply(-2,9)).toBe(-18)
})

test('multiply 0.35 and 0.67', () => {
    expect(multiply(0.35,0.67)).toBeCloseTo(0.2345)
})

test('multiply 0.35 and 0', () => {
    expect(multiply(0.35,0)).toBe(0)
})

test('divide 0.35 by 0.67', () => {
    expect(divide(0.35,0.67)).toBeCloseTo(0.5223880597014925)
})

test('divide 10 by 0', () => {
    expect(divide(10, 0)).toBeUndefined()
})

test('divide 0 by 10', () => {
    expect(divide(0, 10)).toBe(0)
})