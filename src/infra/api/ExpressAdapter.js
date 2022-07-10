const express = require("express");

 class ExpressAdapter {

    constructor() {
        this.app = express();
        this.app.use(express.json());
    }

    on(method, url, callback) {
        this.app[method](url, async (req, res) => {
            const output = await callback(req.params, req.body);
            res.json(output);
        });
    }

    listen(port) {
        this.app.listen(port, () => {
            console.log("listening on port " + port);
        });
    }
}

module.exports = ExpressAdapter;