// const db = require('../database/config');
// const { verifyPostExist } = require('../querys');
// const { checkSchema } = require('express-validator');

// const updatePostMiddleware = async (req, res, next) => {
// 	// const { id } = req.params;
// 	try {
// 		if (id) {
// 			const values = [id];
// 			const query_result = await db.query(verifyPostExist, values);
// 			const post = query_result.rows[0];

// 			if (!post) {
// 				return res.status(400).json({
// 					status: 'Bad Request',
// 					msg: 'El ID no existe',
// 				});
// 			} else {
// 				req.data = {
// 					postExist: true,
// 					post,
// 				};
// 				next();
// 			}
// 		} else {
// 			return res.status(400).json({
// 				status: 'Bad Request',
// 				msg: 'El ID es requerido',
// 			});
// 		}
// 	} catch (error) {
// 		next(error);
// 	}
// };

// const handleGetMiddleware = async (req, res, next) => {
// 	try {
// 		const validationSchema = await checkSchema(
// 			{
// 				limits: {
// 					isNumeric: {
// 						errorMessage: 'Debe ser Numerico',
// 					},
// 					isInt: {
// 						options: {
// 							min: 0,
// 						},
// 						errorMessage: 'Debe ser Entero Positivo',
// 					},
// 					// custom: {
// 					// 	options: (value) => (value < 0 ? false : true),
// 					// 	bail: true,
// 					// 	errorMessage: 'Debe ser Entero Positivo',
// 					// },
// 				},
// 			},
// 			['query']
// 		).run(req);

// 		if (validationSchema.length) {
// 			const errors = validationSchema[0].errors;
// 			if (errors.length) {
// 				const validations = {};
// 				errors.forEach((error) => {
// 					const key = error.path;
// 					const msg = error.msg;
// 					const value = error.value;
// 					switch (key) {
// 						case 'limits':
// 							if (Array.isArray(validations['limits'])) {
// 								validations['limits'] = [
// 									...validations['limits'],
// 									{
// 										value,
// 										msg,
// 									},
// 								];
// 							} else {
// 								validations['limits'] = [
// 									{
// 										value,
// 										msg,
// 									},
// 								];
// 							}
// 							break;
// 						default:
// 							break;
// 					}
// 				});
// 				res.status(400).send({
// 					status: 'Bad Request',
// 					data: validations,
// 				});
// 			} else {
// 				next();
// 			}
// 		}
// 	} catch (error) {
// 		console.log(error);
// 		res.status(500).send({
// 			status: 'Server error',
// 			msg: error,
// 		});
// 	}
// };

// module.exports = {
// 	updatePostMiddleware,
// 	handleGetMiddleware,
// };
