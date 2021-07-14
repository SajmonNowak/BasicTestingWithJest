const { expect } = require('@jest/globals')
const CaesarCipher = require('../code/CaesarCipher.js')

test("test1", () => {
    expect(CaesarCipher("sajmon", 3)).toBe("vdmprq")
})

test("test2", () =>{
    expect(CaesarCipher("sajmon likes peanutbutter", 22)).toBe("owfikj hegao lawjqpxqppan")
})

test("test3", () => {
    expect(CaesarCipher("He also likes dogs!!!", 30)).toBe("li epws pmoiw hskw!!!")
})