const express = require('express');
const router = express.Router();
const { sendOtp, verifyOtp, getMe, register, adminLogin, guestLogin } = require('../controllers/authController');
const { protect } = require('../middleware/auth');

router.post('/register', register);
router.post('/send-otp', sendOtp);
router.post('/verify-otp', verifyOtp);
router.post('/admin-login', adminLogin);
router.post('/guest-login', guestLogin);
router.get('/me', protect, getMe);

module.exports = router;

