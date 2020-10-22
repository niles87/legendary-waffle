const express = require("express");
const sequelize = require("./config/db.config");
const session = require("express-session");
const { ExpressOIDC } = require("@okta/oidc-middleware");
const path = require("path");
const app = express();
const PORT = 4000;
const routes = require("./routes");
require("dotenv").config({ path: path.join(__dirname, "/.env.auth") });

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static("views"));

app.use(
  session({
    secret: process.env.SESSIONS_SECRET,
    resave: true,
    saveUninitialized: false,
  })
);

const oidc = new ExpressOIDC({
  issuer: "https://dev-525216.okta.com",
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
  loginRedirectUri: "http://localhost:4000/authorization-code/callback",
  logoutRedirectUri: "http://localhost:4000",
  scope: "openid profile",
  appBaseUrl: "http://localhost:4000",
});

app.use(oidc.router);
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`app listening on port: ${PORT}`));
});
