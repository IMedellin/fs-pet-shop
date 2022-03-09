const express = require("express")
const app = express();
const fs = require('fs')


// app.get("/pets", (req, res) =>{
//   const index = req.params
//   fs.readFile('pets.json', 'utf-8', (err,data) =>{
//     const parsedData = JSON.parse(data);
//       if(req.url === `/pets/${index}`){
//         res.send(parsedData[index])
//       }
//     res.send(parsedData)
//   })
// })
