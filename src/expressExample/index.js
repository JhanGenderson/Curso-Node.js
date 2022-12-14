const express = require("express");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT;

app.use(morgan("dev"));

const fooMiddleware = (req, res, next) => {
  req.foo = "bar";
  next();
};

app.get("/", fooMiddleware, (req, res) => {
  console.log("req.foo", req.foo);
  res.send({
    message: "Hola mundo desde express",
    method: "GET",
    foo: req.foo,
  });
});

app.post("/", (req, res) => {
  console.log("req.foo", req.foo);
  res.send({
    message: "Hola mundo desde express",
    method: "POST",
    foo: req.foo,
  });
});

app.listen(PORT, () => {
  console.log(`Server running at por ${PORT}`);
});
