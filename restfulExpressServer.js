const express = require("express")
const app = express();
const fs = require('fs')

app.use(express.json());

app.get("/pets", (req, res) => {
  fs.readFile('pets.json', 'utf-8', (err, data) => {
    res.send(data);
  })
})

app.post("/pets", (req, res) => {
  const newPet = { age, kind, name } = req.body;
  if (!age || !kind || !name) {
    res.statusCode(400).send('Bad Request');
    return
  }
  fs.readFile('pets.json', 'utf-8', (err, data) => {
    const parsedData = JSON.parse(data);
    parsedData.push(newPet);
    fs.writeFile('pets.json', JSON.stringify(parsedData), (err) => {
      if (err) {
        res.status(500).send();
      } else {
        res.status(201).send(newPet);
      }
    })
    res.send(data)
  })
})

app.patch('/pets', (req, res) => {

})




app.listen(4000)