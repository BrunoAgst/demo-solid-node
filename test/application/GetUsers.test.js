const { jest: _jest } = require("@jest/globals");
const GetUsers = require("../../src/application/GetUsers.js"); 

describe("#GetUsers application", () => {
    test("should get users", async () => {

        const userRepository = {
            getAll: _jest.fn(() => {
                return [
                    {"name":"Bruno","pass":"123456","email":"bruno@teste.com","phone":"11999992222"},
                    {"name":"Ana","pass":"123456","email":"ana@teste.com","phone":"11999992222"}
                ]
            })
        };

        const expected = [
            {
              name: 'Bruno',
              email: 'bruno@teste.com',
              phone: '11999992222'
            },
            {
              name: 'Ana',
              email: 'ana@teste.com',
              phone: '11999992222'
            }
        ];
        
        const getUser = new GetUsers(userRepository);
        const result = await getUser.execute();

        expect(result).toStrictEqual(expected);

    });
});