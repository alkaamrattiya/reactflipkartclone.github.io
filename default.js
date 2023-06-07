import { products } from "./constants/data.js"
import Product from "./model/product-schema.js";

const DefaultData = async()=>{
try{
 
  await Product.insertMany(products);
  console.log("Data imported");
}catch(error){
 console.log('Error ffail ',error.message);
}
}
export default DefaultData;