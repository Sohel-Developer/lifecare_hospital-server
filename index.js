const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
require('dotenv').config()
const cors = require('cors');
const port = process.env.PORT || 5000;


/*  */
app.use(cors())
app.use(express.json())


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gooryv8.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



async function run() {
    try {
        const servicesCollections = client.db("lifeCareInformation").collection("services");

        /* Banner Info Card Get */
        app.get('/services', async (req, res) => {
            const query = {}
            const result = servicesCollections.find(query);
            const data = await result.toArray()
            res.send(data)
        })


        /* Banner Info Card Get */
        app.get('/se', async (req, res) => {
            const query = {}
            const result = bannerInfoCollections.find(query);
            const data = await result.toArray()
            res.send(data)
        })




    } finally {
    }
}
run().catch(console.dir);





app.get('/', (req, res) => {
    res.send('Lifecare Server running ')
})

app.listen(port, () => {
    console.log(`Lifecare server running on port ${port}`)
})