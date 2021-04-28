/* initialise express.js */
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')


app.use(cors())

/* application  */
app.get('/evenement', (req, res) => {
  res.json ([{
        id: "abc1",
        scene: "1",
        titre: "Titre exemple 1",
        dateHeureDebut: "15, 04, 2021",
        dateHeureFin: new Date(),
        details: "Ce matin toute les séances seront en pleine air"
    },
    {
        
        id: "ztp2",
        scene: "2",
        titre: "Titre exemple 2",
        dateHeureDebut: "30, 04, 2021",
        dateHeureFin: new Date(),
        details: "Ce soir toute les séances seront en pleine air"
    }]);

});

app.delete('/evenement/:id', (req, res) => {
  res.send()
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
