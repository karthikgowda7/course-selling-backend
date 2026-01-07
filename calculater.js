import express from "express";

const app = express();

app.get("/calc", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  const op = req.query.op;

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: "a and b must be numbers" });
  }

  let result;

  switch (op) {
    case "add":
      result = a + b;
      break;
    case "sub":
      result = a - b;
      break;
    case "mul":
      result = a * b;
      break;
    case "div":
      if (b === 0) return res.status(400).json({ error: "Division by zero" });
      result = a / b;
      break;
    default:
      return res.status(400).json({ error: "Invalid operation" });
  }

  res.json({ result });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
