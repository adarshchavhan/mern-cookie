const router = require('express').Router();

// SIGNUP
router.post('/signup', async(req, res, next)=>{
    try {
        res.cookie('user',req.body, {
            maxAge: 30*24*60*60*1000,
            secure: true,
            sameSite: 'none'
        }).send({
            success: true,
            user: req.body,
            message: 'signup successfully'
        })
        
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Internal server error'
        })
    }
})

// LOGOUT
router.post('/logout', async(req, res, next)=>{
    try {
        res.cookie('user', null, {
            maxAge: 0,
            secure: true,
            sameSite: 'none'
        }).send({
            success: true,
            message: 'logout successfully'
        });
        
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Internal server error'
        })
    }
})

// MY PROFILE
router.get('/me', async(req, res, next)=>{
    try {
        const {user} = req.cookies;
        if(!user){
            return res.status(401).send({
                success: false,
                message: 'user not logged'
            });
        }

        res.send({
            success: true,
            user
        });
        
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Internal server error'
        })
    }
})

module.exports = router;