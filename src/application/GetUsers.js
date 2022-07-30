const UserDTO = require('../dto/UserDTO');

class GetUsers {
    constructor(userRepository){
        this.userRepository = userRepository;
    }

    async execute() {
        const data = await this.userRepository.getAll();
        return data.map(item => UserDTO.response(item));
    }
}

module.exports = GetUsers;
