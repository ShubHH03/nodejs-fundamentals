const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

//middleware
app.use(express.urlencoded({ extended: false }));

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    const id = Number(req.params.id);
    const userIndex = users.findIndex((user) => user.id === id);
    const body = req.body;
    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], ...body };
    }
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), () => {
      return res.json({ status: "success" });
    });
  })
  .delete((req, res) => {
    const id = Number(req.params.id)
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
      users.splice(userIndex, 1);
    }
        fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), () => {
      return res.json({ status: "success" });
    });
  });

app.get("/api/users/name/:first_name", (req, res) => {
  const first_name = req.params.first_name;
  const user = users.find((user) => user.first_name === first_name);
  return res.json(user);
});

app.post("/api/users", (req, res) => {
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "success", id: users.length });
  });
});

app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}\n`);
});
