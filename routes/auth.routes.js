const { Router } = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');
const User = require('../models/User');
const router = Router();

// /api/auth/register
router.post(
    '/register',
    [
        check('email', 'Server: Not correct email.').isEmail(),
        check('password', ' Server: Too short password.').isLength({min: 2}),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);

            if(!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Incorrect data on loading'
                })
            }
            const {email, password} = req.body;

            const candidate = await User.findOne({ email });

            if (candidate) {
                return  res.status(400).json({message: 'The user exists'})
            }

            const hashedPassword = await bcrypt.hash(password, 12);
            const user = new User({email, password: hashedPassword});

            await user.save();

            res.status(201).json({message: 'User is created'})

        } catch (e) {
            res.status(500).json({message: 'Smth went wrong!'})
        }
});

// /api/auth/login
router.post(
    '/login',
    [
        check('email', 'Type correct email.').normalizeEmail().isEmail(),
        check('password', 'Enter password.').exists(),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);

            if(!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Incorrect data on entering in system'
                })
            }

            const {email, password} = req.body;

            const user = await User.findOne({ email });

            if (!user) {
                return  res.status(400).json({message: "The user doesn't exist"})
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return  res.status(400).json({message: "The password is wrong."})
            }

            const token = jwt.sign(
                { userId: user.id },
                config.get('jwtSecret'),
                { expiresIn: '1h'}
            )

            res.json({ token, userId: user.id });  // status by default is 200

        } catch (e) {
            res.status(500).json({message: 'Smth went wrong!'})
        }
})

module.exports = router;