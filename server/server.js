const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    user: 'bofv3727_julesadmin',
    host: 'localhost',
    password: '#1!i&05U7$k@',
    database: 'bofv3727_medisource',
});

// GET QUERY
// get systeme list
app.get('/systeme', (req, res) => {
    db.query('SELECT * FROM systeme', (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

// get systeme desc 
app.get('/systemeDesc/:systeme', (req, res) => {
    const name_systeme = req.params.systeme
    console.log(name_systeme)
    db.query('SELECT * FROM systeme WHERE name_systeme = ?', name_systeme, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})






app.listen(3001, () => {
    console.log('Server is running on port 3001')
})