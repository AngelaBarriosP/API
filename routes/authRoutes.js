const router = require('express').Router()
const {validator,valid,Register,Login, GetOrders} = require('../controllers/authControllers')
const validate = require("../middlewares/validate");
const isValidObjectId = require("../middlewares/isValidObjectId");


router.post('/login' , Login)
router.post('/register' , Register)
router.get('/ListOrder' , GetOrders)
router.post('/regOrder' , validator, validate )
router.put('/updOrder:id' , valid,isValidObjectId )

module.exports  = router
