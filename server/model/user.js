const { Model, Datatypes } = require("sequelize");
const sequelize = require("../config/db.config");

class EndUser extends Model {}

EndUser.init(
  {
    name: Datatypes.STRING,
    email: Datatypes.STRING,
    password: Datatypes.STRING,
  },
  { sequelize }
);

module.exports = EndUser;
