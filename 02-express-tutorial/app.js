const express = require('express')
const peopleRouter = require('./routes/people')
const app = express()

const people = require('./routes/people')
const auth = require('./routes/auth')
//let { products } = require('./data')
//Static assets
//app.use(express.static('./public'))
app.use(express.static('./methods-public'))
//parse form data
app.use(express.urlencoded({ extended: false}))
//parse json
app.use(express.json())
app.use('/api/people', people)
app.use('/login', auth)
app.use('/api/v1/people', peopleRouter)
// //logger
// const logger = require('./logger')
// app.use(logger)
// //Home
// app.get('/', logger, (req, res) => {
//     res.send('Home')
//   })
// //About
//   app.get('/about', logger, (req, res) => {
//     res.send('About')
//   })
// //Products 
// app.get('/api/v1/products', (req, res) => {
//   res.send(products)
// })
// //People
// //app.use(logger)
// //app.get('/api/v1/people', (req, res) => {
//     //res.send(people)
// //ProductsID
// app.get('/api/v1/products/:productID', (req, res) => {
//     const idToFind = parseInt(req.params.productID)
//     const product = products.find((p) => p.id = idToFind)
//     console.log(product)
//     if (!product) {
//         res.status(404).send('That product was not found.')
//     }
//     res.json(product) 
// })
// //Sorted Products
// app.get('/api/v1/query', (req, res) => {
//     const { search , limit, price } = req.query
//     let sortedProducts = [...products]
//     if(search) {
//         sortedProducts = sortedProducts.filter((product)=>{
//             return product.name.startsWith(search)
//         })
//     }
//     if(limit) {
//         sortedProducts = sortedProducts.slice(0, Number(limit))
//     }
//     if(sortedProducts.length < 1) {
//         res.status(200).send('No found products.  ')
//     }
//     res.status(200).json(sortedProducts)
// })
// app.get('/api/v1/test', (req, res) => {
//     res.json({message: 'It worked!'})
// })

// app.all('*', (req, res) => {
//    res.status(404).send("Page not found.")
// })
 
app.listen(3000, () => {
    console.log('Server is listening on Port 3000...')
})

