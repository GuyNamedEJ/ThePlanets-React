const express = require('express')
const app = express()
const data = require('./planets.json')
const router = express.Router()

app.use(express.json())
app.use(express.static('public'))


router.get('/planets/:name', (req, res) => {
    const planetName = req.params.name;
    const planet = data.find((planet) => planet.name.toLowerCase() === planetName.toLowerCase());
    
    if (!planet) {
      return res.status(404).json({ error: 'Planet not found' });
    }
    
    res.json(planet);
  });

  // Mount the router on the root path '/api'
app.use('/api', router);

const PORT = 3000;
app.listen(PORT, console.log("WE LIVE BABY! COMING AT YA FROM PORT: " + PORT))