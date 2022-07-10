class GetUsers {
    constructor(userRepository){
        this.userRepository = userRepository;
    }

    async execute() {
        const users = await this.userRepository.getAll();
        return users;
    }
}

module.exports = GetUsers;
