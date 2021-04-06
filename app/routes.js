const express = require('express')
const router = express.Router()

// Clear session data without confirmation
router.get('/prototype-admin/clear-data', function (req, res) {
  req.session.destroy()
  res.redirect('/')
})

// Grab the feature urls for the aside heroku links
router.use('/', (req, res, next) => {
  res.locals.feature = req.url
  next()
})

// Import routes from feature prototypes
router.use(/\/(.)*\/(.)*\/v([0-9]+)/, (req, res, next) => {
  return require(`./views/${req.originalUrl.split('/')[1]}/${req.originalUrl.split('/')[2]}/v${req.params[2]}/_routes`)(req, res, next);
})




// Add your routes above the module.exports line
module.exports = router
