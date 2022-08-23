
  
  const mongoose = require('mongoose')

  const placeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    pic: {type: String},
    cuisines: { type: String, required: true },
    city: { type: String, default: 'Anytown' },
    state: { type: String, default: 'USA' },
    founded: Number
  })
  
  placeSchema.methods.showEstablished = function() {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
  }  

  module.exports = mongoose.model('Place', placeSchema)
  
  
  //let places = [
    //{
      //name: "White-Tiger Thai",
      //city: "Philadelphia",
      //state: "PA",
      //cuisines: "Thai, Pan-Asian",
      //pic: "/Images/tigerPic.jpg",
    //},
    //{
      //name: "Eclipse Cafe",
      //city: "Phoenix",
      //state: "AZ",
      //cuisines: "Coffee, Bakery",
      //pic: "/Images/eclipsePic.jpg",
    //},
  //];

 // module.exports = places
