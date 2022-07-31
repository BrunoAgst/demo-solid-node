const { jest: _jest } = require("@jest/globals");
const UserDTO = require("../../src/dto/UserDTO.js"); 

describe("#UserDTO", () => {
    test("should return User filter", () => {

        const paylaod = {
            name: "Bruno",
            pass: "123456",
            email: "bruno@teste.com",
            phone: "11999992222"
        };

        const expected = { name: "Bruno", email: "bruno@teste.com", phone: "11999992222" };

        const result = UserDTO.response(paylaod);
        expect(result).toStrictEqual(expected);
        
    });
});