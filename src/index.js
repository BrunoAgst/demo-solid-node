const ExpressAdapter = require("./infra/api/ExpressAdapter");
const UserMemoryRepository = require("./infra/repository/UserMemoryRepository");
const Router = require("./infra/api/Router");

const httpServer = new ExpressAdapter();
const userMemoryRepository = new UserMemoryRepository();
const router = new Router(httpServer, userMemoryRepository);
router.init();
httpServer.listen(3000);