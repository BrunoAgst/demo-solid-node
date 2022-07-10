const { jest: _jest } = require("@jest/globals");
const GetUsers = require("../../src/application/GetUsers.js"); 

describe("#GetUsers application", () => {
    test("should get users", async () => {

        const userRepository = {
            getAll: _jest.fn(() => {
                return [
                    {"name":"Bruno","password":"123456","email":"bruno@teste.com","phone":"11999992222"},
                    {"name":"Ana","password":"123456","email":"ana@teste.com","phone":"11999992222"}
                ]
            })
        };

        const expected = [
            {
              name: 'Bruno',
              password: '123456',
              email: 'bruno@teste.com',
              phone: '11999992222'
            },
            {
              name: 'Ana',
              password: '123456',
              email: 'ana@teste.com',
              phone: '11999992222'
            }
        ];
        
        const getUser = new GetUsers(userRepository);
        const result = await getUser.execute();

        expect(result).toStrictEqual(expected);

    });
});