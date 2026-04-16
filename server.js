const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API chal rahi hai");
});

app.get("/demo", (req, res) => {
  res.json({
    success: true,
    message: "Harsh ka demo API chal raha hai"
  });
});

app.post("/message", (req, res) => {
  const { text } = req.body || {};

  res.json({
    success: true,
    reply: text || "Message mila"
  });
});

app.listen(PORT, () => {
  console.log("Server chal gaya port " + PORT);
});
