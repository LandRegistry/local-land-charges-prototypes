const express = require('express')
const router = new express.Router()

// Set variables
router.get('*', function(req, res, next){
  res.locals['serviceName'] = 'Search for local land charges'
  res.locals['serviceUrl'] = '/'+req.originalUrl.split('/')[1]+'/'+req.originalUrl.split('/')[2]+'/'
  res.locals['signedIn'] = true

  next()
})

router.post('/search', function (req, res) {
  res.redirect('results')
})






// Add your routes above the module.exports line
module.exports = router
