// const router = require('express').Router()
// const paymentCtrl = require('../controllers/paymentCtrl')
// const auth = require('../middleware/auth')
// const authAdmin = require('../middleware/authAdmin')


// router.route('/payment')
//     .get(auth, authAdmin, paymentCtrl.getPayments)
//     .post(auth, paymentCtrl.createPayment)


// module.exports = router
const router = require('express').Router()
const checkout=require('../controllers/paymentCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')


// router.route('/checkout')
//     .get(auth, authAdmin, paymentCtrl.getPayments)
//     .post(auth, paymentCtrl.createPayment)

router.route("/checkout",checkout).post(checkout);


module.exports = router