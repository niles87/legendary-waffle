const router = require("express").Router();
const api = require("./api");
const path = require("path");

router.use("/api", api);

router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../views/index.html"))
);

module.exports = router;
