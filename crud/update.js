 require('../connection')
 const Product = require('../models/Product')


 const functionUpdate = async ()=>{
 const result = await Product.findOneAndUpdate({_id:'5fcea300ada9402a249a2c63'},{name:'Mackbook Air 13pg'}, {new: true}) 
 return result
 }

 functionUpdate()
.then(result => console.log('data was updated:', result))
.catch(error => console.log('hos ocurred an error ', error))


/*This is another way to update a data */
//  const anotherFunctionUpdate = async()=>{
//   const product = await Product.findOne({_id:'5fcea300ada9402a249a2c63'},{new: true})
//    product.description = 'Laptop macbook air 13 pg full hd gforce';
//    product.save()
//    console.log(product)

//  }
// anotherFunctionUpdate()
