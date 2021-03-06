const express = require('express');
const router = express.Router();

const studentController = require('../controllers/StudentController');
const upload = require('../middlewares/upload.file');

router.get('/registerCourse/:id', studentController.registerCourse);
router.get('/getNotification', studentController.getNotification);
router.get('/', studentController.student);
router.get('/info', studentController.showInfo);
router.get('/courses/:slug', studentController.detailCourse);

router.put('/editInfo', upload.single('avatar'), studentController.editInfo);
router.put('/changePassword', studentController.changePassword);
router.post('/addComment', studentController.addComment);
router.post('/submitHomework', upload.single('file'), studentController.submitHomework);
router.get('/homework', studentController.homeWork);



module.exports = router;