const CreateUser = require("../../application/CreateUser.js");
const GetUsers = require("../../application/GetUsers.js");
const GetUser = require("../../application/GetUser.js");

class Router {
    constructor(httpServer, userRepository){
        this.httpServer = httpServer;
        this.userRepository = userRepository;
    }

    async init() {
        this.httpServer.on("get", "/users", async () => {
            const getUsers = new GetUsers(this.userRepository);
            return getUsers.execute();
        });

        this.httpServer.on("get", "/user/:email", async (params, body) => {
            const getUser = new GetUser(this.userRepository);
            return getUser.execute(params.email);
        });

        this.httpServer.on("post", "/user", async (params, body) => {
            const createUser = new CreateUser(this.userRepository);
            const user = createUser.execute(body);
            return user;
        });
    }
}

module.exports = Router;