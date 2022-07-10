const User = require("../domain/entity/User");

class CreateUser {
    constructor(userRepository){
        this.userRepository = userRepository;
    }

    async execute(payload) {
        const user = new User(payload);
        await this.userRepository.save(user);
        return { message: "created successfully" };
    }
}

module.exports = CreateUser;
