// const db = require("../model/user");

module.exports = {
  signup: async function (req, res) {
    const { name, email, password } = req.body;
    // try {
    //   const user = db.create(name, email, password);
    //   console.log(user);
    //   res.json({ name: user.name });
    // } catch (err) {
    //   console.error(err);
    //   res.json({ msg: "something went wrong here..." });
    // }
  },
  login: async function (req, res) {},
};
