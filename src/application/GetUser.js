class GetUser {
    constructor(userRepository){
        this.userRepository = userRepository;
    }

    async execute(email) {
        const user = await this.userRepository.get(email);
        return user;
    }
}

module.exports = GetUser;
