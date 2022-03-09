const express = require("express");
const app = express();
const fs = require('fs');
const { Pool } = require('pg');

const pool = new Pool({
  database: "petshop"
})
pool.query('SELECT * FROM pets', (err, result) => {
  console.log(result.rows)
})

app.use(express.json());

app.get("/pets", (req, res) => {
  fs.readFile('pets.json', 'utf-8', (err, data) => {
    res.send(data);
  })
})

app.post("/pets", (req, res) => {
  const newPet = { age, kind, name } = req.body;
  pool.query('INSERT INTO pets(age,name,kind) VALUES ($1, $2, $3)', (err, result) => {
    console.log(result)
  })
  if (!age || !kind || !name) {
    res.status(400).send('Bad Request');
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

app.patch('/pets/:id', (req, res) => {
  const { age, kind, name } = req.body;
  const { id } = req.params;

})



app.listen(4000)