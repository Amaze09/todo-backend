import express from 'express'
import AllController from '../controllers/all.controller'
const router = express.Router()

const allController = new AllController()
router.post('/signup', allController.signup)
router.post('/login', allController.login)
router.post('/createTask', allController.createTask)
router.get('/tasksByUser/:username', allController.getTasksByUser)

export default router