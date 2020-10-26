const router = require("express").Router();
const api = require("./api");
const path = require("path");

router.use("/api", api);

router.route("/", (req, res) => {
  console.log("index route");
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

module.exports = router;
