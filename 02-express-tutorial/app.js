console.log('Express Tutorial')
const { products } = require('./data')

const express = require('express')

const app = express()

app.use(express.static('./public'))

app.get("/api/v1/products", (req, res) => {
res.json(products)
})
app.get("/api/v1/products/:productID", (req, res) => {
    const idToFind = parseInt(req.params.productID)
    const product = products.find((p) => p.id = idToFind)
    console.log(product)
    if (!product) {
        res.status(404).send('That product was not found.')
    }
    res.json(product) 
})
app.get("/api/v1/query", (req, res) => {
    const { search , limit, price } = req.query
    let sortedProducts = [...products]
    if(search) {
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if(sortedProducts.length < 1) {
        res.status(200).send('No found products.')
    }
    res.status(200).json(sortedProducts)
})
app.get("/api/v1/test", (req, res) => {
    res.json({message: 'It worked!'})
})

app.all('*', (req, res) => {
    res.status(404).send("Page not found.")
})
app.listen(3000, () => {
    console.log('Server is listening on Port 3000...')
})






/*The require statement for express
Creation of the app as returned from express()
app.use statements for the middleware. You’ll eventually use many kinds of middleware, but for now the only middleware we are using is express.static().
app.get and app.post statements for the routes you will handle. Eventually these will be refactored into router modules, but for now you can put them inline.
An app.all statement after these to handle page not found conditions.
An app.listen statement */