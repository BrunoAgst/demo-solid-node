const User = require("../../../src/domain/entity/User"); 

describe("#User entity", () => {
    test("should return User", () => {

        const paylaod = {
            "name": "Bruno",
            "password": "123456",
            "email": "bruno@teste.com",
            "phone": "11999992222",
            "teste": "teste"
        };

        const user = new User(paylaod);
        const result = user.generateUser();

        expect(result.name).toBe("Bruno");
        expect(result.password).toBe("123456");
        expect(result.email).toBe("bruno@teste.com");
        expect(result.phone).toBe("11999992222");
        
    });
});