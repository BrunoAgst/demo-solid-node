require('dotenv').config();

const ExpressAdapter = require("./infra/api/ExpressAdapter");
const Router = require("./infra/api/Router");
/*
 Select your repository
*/
//const UserMemoryRepository = require("./infra/repository/UserMemoryRepository");
const UserSQLRepository = require("./infra/repository/UserSQLRepository");

const httpServer = new ExpressAdapter();
const userSQLRepository = new UserSQLRepository();

const router = new Router(httpServer, userSQLRepository);
router.init();
httpServer.listen(process.env.PORT || 3000);