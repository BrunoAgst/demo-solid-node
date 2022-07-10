class User {
    constructor({name, password, email, phone}) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.phone = phone;
    }
    generateUser() {
        return {
            name: this.name,
            email: this.email,
            password: this.password,
            phone: this.phone
        }
    }
}

module.exports = User;