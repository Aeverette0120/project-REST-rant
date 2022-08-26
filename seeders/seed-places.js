const db = require('../models')



db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/h-thai-ml-tables.jpg',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/coffee-cat.jpg',
    founded: 2020
}, {
     name: "White-Tiger Buffet",
      city: "Philadelphia",
      state: "PA",
      cuisines: "Asain, Buffet",
      pic: "/Images/tigerPic.jpg",
      founded: 2010
}, {
    name: "Eclipse Cafe",
      city: "Los Vegas",
      state: "NV",
      cuisines: "Coffee, Bakery",
      pic: "/Images/eclipsePic.jpg",
    
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})