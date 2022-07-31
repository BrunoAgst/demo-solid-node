class UserDTO {
    response(paylaod){
        const { name, email, phone } = paylaod;

        return {
            name,
            email,
            phone
        }
    }
}

module.exports = new UserDTO();