const express = require("express");
const app = express();
const fs = require('fs');
const { Pool } = require('pg');

const pool = new Pool({
  database: "petshop"
})


app.use(express.json());

app.get("/pets/:index", (req, res) => {
  const index = req.params.index;
  if (index !== undefined) {
    pool.query("SELECT * FROM pets WHERE id = $1", [index], (err, result) => {
      res.send(result.rows[0])
    })
  } else {
    pool.query("SELECT * FROM pets", (err, results) => {
      res.send(result.rows)
    })
  }
})

app.post("/pets", (req, res) => {
  const newPet = { age, kind, name } = req.body;
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
  const query = `
  UPDATE pets SET
  age = COALESCE($1, age),
  name = COALESCE($2, name),
  kind = COALESCE($3, kind)
  WHERE id = $4
  RETURNING *
  `;
})

app.delete("/pets/:index", (req, res) => {
  const index = req.params.indes;
  if (index !== undefined) {
    pool.query("DELETE FROM pets WHERE id = $1", [index], (err, result) => {
      res.send(`${index}`)
    })
  }
})

app.listen(4000)