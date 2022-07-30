class UserDTO {
    response({ name, email, phone }){
        return {
            name,
            email,
            phone
        }
    }
}

module.exports = new UserDTO()