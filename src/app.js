const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "apieng.onrender.com");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
    { key: "Access-Control-Allow-Credentials", value: "true" },
    { key: "Access-Control-Allow-Origin", value: "*" },
    {
      key: "Access-Control-Allow-Methods",
      value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
    },
    {
      key: "Access-Control-Allow-Headers",
      value:
        "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization",
    }
  );
  next();
});

//rotas importadas de router
app.use("/animais", require("./Routes/animalRoutes"));
app.use("/admin", require("./Routes/adminRoutes"));
app.use("/adotantes", require("./Routes/adotanteRoutes"));
app.use("/resgates", require("./Routes/resgateRoutes"));

const server = app.listen({ port, host: "0.0.0.0" }, function () {
  const host = server.address().address;
  console.log(`Servidor iniciado`);
});