const subcommand = process.argv[2];
const fs = require('fs')

if (subcommand === 'read') {
  fs.readFile('./pets.json', "utf-8", (err, data) => {
    const parseData = JSON.parse(data)
    const index = process.argv[3];
    if (err) {
      throw err
    }
    if (index < 0 || index > parseData.length || !index) {
      console.error('Index is undefined')
      console.log(parseData)
    } else {
      console.log(parseData[index]);
      process.exit(1);
    }
  })
}


if (subcommand === 'create') {
  fs.readFile('./pets.json', "utf-8", (err, data) => {
    const parseData = JSON.parse(data)
    const index = process.argv[3];
    if (err) {
      throw err
    }
    const pets = JSON.parse(data)
    const age = Number.parseInt(process.argv[3]);
    const kind = process.argv[4];
    const name = process.argv[5];
    if (Number.isNaN(age) || !kind || !name) {
      console.error('Error')
    }
    const pet = { age, kind, name };
    pets.push(pet);
    const petsJSON = JSON.stringify(pets);

    fs.writeFile('./pets.json', petsJSON, (err, pet) => {
      if (err) {
        throw err
      }
      console.log(pet)
    })
  })
}