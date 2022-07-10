const { jest: _jest } = require("@jest/globals");
const CreateUser = require("../../src/application/CreateUser.js"); 

describe("#CreateUser application", () => {
    test("should created user", async () => {

        const paylaod = {
            "name": "Bruno",
            "password": "123456",
            "email": "bruno@teste.com",
            "phone": "11999992222",
            "teste": "teste"
        };

        const userRepository = {
            save: _jest.fn()
        }
        
        const createUser = new CreateUser(userRepository);
        const result = await createUser.execute(paylaod);
        expect(result).toStrictEqual({"message": 'created successfully'});
    });
});