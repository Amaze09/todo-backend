import express from 'express'
import AllController from '../controllers/all.controller'
const router = express.Router()

const allController = new AllController()
router.post('/signup', allController.signup)
router.post('/login', allController.login)
router.post('/createTask', allController.createTask)
router.post('/updateTask', allController.updateTask)
router.get('/tasksByUser/:username', allController.getTasksByUser)
router.delete('/deleteTask/:id', allController.deleteTask)
router.post('/setComplete/:id', allController.setComplete)
router.post('/getAISuggestion', allController.getAISuggestion)

export default router