
const router = require('express').Router()
const db = require('../models')


// GET /places
router.get('/', (req, res) => {
       db.Place.find().then((foundPlaces) => {
        res.render('index', {places:  foundPlaces} )
       })
       .catch (err => {
        console.log(err)
        res.render('error404')
       })

})

router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})



router.get('/new', (req, res) => {
  res.render('places/new')
})

  router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .then(place => {
        res.render('places/show', { place })
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
  })


router.delete('/:id', (req, res) => {
console.log('req.params.id')
  db.Place.findByIdAndDelete(req.params.id).then(place =>{
  //res.render('DELETE /places/ :id stub')
  res.redirect('/places')
})

})


 router.get('/:id/edit', (req, res) => {
  
  db.Place.findById(req.params.id)
    .then(place => {
      console.log('THis is place for edit form', place)
        res.render('places/edit', { place })
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
}) 


router.put('/:id', (req, res) => {
  console.log('body in put route', req.body)
  console.log('id in put route', req.params)
  req.body.name = req.body.name.join('')
  db.Place.findByIdAndUpdate(req.params.id, req.body)
  .then(place => {
    res.redirect('/places/' + place.id)
})
.catch(err => {
    console.log('err', err)
    res.render('error404')
})
});

module.exports = router