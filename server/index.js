const express = require("express");
const app = express();
app.use(express.json());

let basket = [];

app.get("/basket", (req, res) => res.json(basket));
app.post("/basket", (req, res) => {
  basket.push(req.body);
  res.sendStatus(200);
});
app.delete("/basket/:id", (req, res) => {
  basket = basket.filter(item => item.id != req.params.id);
  res.sendStatus(200);
});

app.listen(3001, () => console.log("Server running on port 3001"));
