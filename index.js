const connectTomongo = require("./db")
const express = require('express')
connectTomongo()


const axios = require('axios');

async function fetchData() {
  try {
    const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
    console.log('Data:',typeof response.data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

fetchData();









var cors = require('cors')
var app = express()

app.use(cors())

const port = 5000

app.use(express.json())


app.use('/addcustomer',require('./routes/Customer'))
app.use('/tranfermoney',require('./routes/Transfer'))
app.get('/', (req, res) => {
  res.send('Hello World! aditya')
})

app.listen(port, () => {
  console.log(` listening on port ${port}`)
})
