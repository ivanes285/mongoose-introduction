
require('../connection')
const Product = require('../models/Product')


async function deleteProduct(){
    
    //const result = await Product.find({})
    //const result = await Product.deleteMany({})
    //const result = await Product.deleteOne({})
    //const result = await Product.findOneAndDelete({name:'Laptop Huawei'})
    const result = await Product.findByIdAndDelete('5fcea300ada9402a249a2c63');
   return result
}
deleteProduct()
.then(result => console.log(`Data was deleted ${ result}`))
.catch(error => console.log(`there is an error ${error}` ))
