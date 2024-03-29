class UserMemoryRepository {
    constructor() {
        this.users = [];
    }

    async save(user){
        this.users.push(user);
    }

    async getAll(){
        const users = this.users.map(({name, email, phone}) => {
            return {name, email, phone}
        });

        return users;
    }

    async get(email){
        return this.users.find(user =>  user.email === email);
    }
}

module.exports = UserMemoryRepository;