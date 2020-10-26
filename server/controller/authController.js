const db = require("../model/user");

module.exports = {
  signup: async function (req, res) {
    const { name, email, password } = req.body;
    try {
      // const user = db.create(name, email, password);
      console.log({ name, email, password });
      res.json({ name: user.name });
    } catch (err) {
      console.error(err);
      res.json({ msg: "something went wrong here..." });
    }
  },
};
