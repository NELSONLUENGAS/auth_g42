const { registerController, loginController } = require('../controllers');
const { registerMiddleware, loginMiddleware } = require('../middlewares/auth');
const {
	registerRequestMiddleware,
	loginRequestMiddleware,
} = require('../middlewares/request');

const router = require('express').Router();

router.post(
	'/register',
	registerRequestMiddleware,
	registerMiddleware,
	registerController
);

router.post('/login', loginRequestMiddleware, loginMiddleware, loginController);

router.get('/users', (req, res, next) => {
	console.log('Todos lños usarios');
});

module.exports = router;
