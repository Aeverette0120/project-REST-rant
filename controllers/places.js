const router = require('express').Router()

router.get('/new', (req, res) => {
  res.render('places/new')
})


// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'White-Tiger Thai',
        city: 'Philadelphia',
        state: 'PA',
        cuisines: 'Thai, Pan-Asian',
        pic: './Images/tigerPic.jpg'
      }, {
        name: 'Eclipse Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: './Images/eclipsePic.jpg'
      }]
      
      res.render('index', { places })
    })
  
module.exports = router