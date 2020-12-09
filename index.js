 require('./connection');
 const Product = require('./models/Product');


async function main (){

 const product = new Product({
      name: 'Laptop Huawei',
      description:'Laptop matebook 13 pulgadas', 
      price: 899.99
    })

   const productSave = await product.save();
   return productSave

}

main()
.then(productSave => console.log(productSave))
.catch(err => console.log(err))