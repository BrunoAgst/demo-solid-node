const UserDTO = require('../dto/UserDto');

class GetUser {
    constructor(userRepository){
        this.userRepository = userRepository;
    }

    async execute(email) {
        const data = await this.userRepository.get(email);
        return UserDTO.response(data[0]);
    }
}

module.exports = GetUser;
