const mongodb = require('mongodb')
const MongoCLient = mongodb.MongoClient

const mongoConnect = (callback) =>{
  MongoCLient.connect('mongodb+srv://samiya90mohsin:P8ysB0wmOHONxuoj@cluster0.tnku2xi.mongodb.net/')
  .then(client=> { 
    console.log('connected')
    callback(client)
  })
  .catch(err=>console.log(err))
}

module.exports = mongoConnect 

