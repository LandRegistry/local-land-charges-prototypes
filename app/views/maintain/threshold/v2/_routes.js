const express = require('express')
const router = new express.Router()

// Set variables
router.get('*', function(req, res, next){
  res.locals['serviceName'] = 'Maintain LLC'
  res.locals['serviceUrl'] = '/'+req.originalUrl.split('/')[1]+'/'+req.originalUrl.split('/')[2]+'/'
  res.locals['signedIn'] = true

  next()
})


router.post('/set-amendment-threshold/select-la', function (req, res) {
  res.redirect('thresholds')
})

router.post('/set-amendment-threshold/thresholds', function (req, res) {
  res.redirect('confirmation')
})

router.get('/dashboard', function (req, res, next) {
  req.session.destroy()
  next()
})





// Add your routes above the module.exports line
module.exports = router
