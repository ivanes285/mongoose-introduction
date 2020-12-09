require('../connection')

const Product = require('../models/Product')

const newproduct = async()=>{
   const product = new Product({
    name: 'Laptop Alienware',
    description: 'the laptop is the best on the store',
    price: 2155.58
   })
  const result= await product.save()
  return result
}

newproduct()
.then(result => console.log(result))
.catch(error => console.log(error))


