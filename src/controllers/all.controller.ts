import { Request, Response, NextFunction } from 'express'
import AllService from '../services/all.service'

const allService = new AllService()

class AllController {
    async signup(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await allService.signup(req.body)
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    async getAISuggestion(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await allService.getAISuggestion(req.body)
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    async updateTask(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await allService.updateTask(req.body)
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    async deleteTask(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await allService.deleteTask(req.params.id)
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    async setComplete(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await allService.setComplete(req.params.id)
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    async getTasksByUser(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await allService.getTasksByUser(req.params.username)
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await allService.login(req.body)
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    async createTask(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await allService.createTask(req.body)
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
}

export default AllController