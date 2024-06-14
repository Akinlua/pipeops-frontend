const express = require('express')
const router = express.Router()
// const {authMiddleware, authAdmin, notAdmin} = require('../middleware/authentication.js')

const {
    home
} = require('../controllers/main.js')

router.get('/home', home)

module.exports = router

