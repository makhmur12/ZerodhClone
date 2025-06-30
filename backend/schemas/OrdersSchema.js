const {Schema} = require("mongoose");
const OrdersSchema = new Schema({
         name: String ,
      city: Number,
      price: Number,
      mode:String,
});
module.exports={OrdersSchema};