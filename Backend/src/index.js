import express from 'express';
import cors from 'cors'

const app = express()
const port = 3000 

app.use(cors())
app.use(express.json())

app.get('/calculator', (req, res) => {
    let a = parseInt(req.query.a)
    let b = parseInt(req.query.b)

    let zbroj = a + b
    let razlika = a - b
    let umnozak = a * b
    let kolicnik = a / b
    
    res.json(`Zbrajanje: ` + `${zbroj}    ` + `Oduzimanje: ` + `${razlika}    ` + `Umnozak: ` + `${umnozak}    ` + `Kolicnik: ` + `${kolicnik}     `)
})
app.listen(port, () => console.log(`Slušam na portu ${port}!`))