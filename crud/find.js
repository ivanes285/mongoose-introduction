require('../connection')

const Product= require('../models/Product')

async function findproducts (){
 
    const products = await Product.find()
    return products
}

findproducts()
.then(products => console.log(products))
.catch(err => console.log(err))