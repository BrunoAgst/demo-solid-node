const { jest: _jest } = require("@jest/globals");
const GetUser = require("../../src/application/GetUser.js"); 

describe("#GetUser application", () => {
    test("should get user", async () => {

        const paylaod = {
            "email": "bruno@teste.com"
        };

        const userRepository = {
            get: _jest.fn(() => {
                return {"name":"Bruno","password":"123456","email":"bruno@teste.com","phone":"11999992222"}
            })
        };
        
        const getUser = new GetUser(userRepository);
        const result = await getUser.execute(paylaod);

        expect(result.name).toBe("Bruno");
        expect(result.password).toBe("123456");
        expect(result.email).toBe("bruno@teste.com");
        expect(result.phone).toBe("11999992222");
    });
});