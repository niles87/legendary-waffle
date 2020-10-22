const Sequelize = require("sequelize");
const sequelize = require("../config/db.config");

const EndUser = sequelize.define("EndUser", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
console.log(EndUser === sequelize.models.EndUser);
module.exports = EndUser;
