import bcrypt from 'bcrypt'
import ISignup from '../utils/interfaces/ISignup'
import { UserModel } from '../utils/schema/user.schema'
import ICreateTask from '../utils/interfaces/ICreateTask'
import { TaskModel } from '../utils/schema/task.schema'
import ILogin from '../utils/interfaces/ILogin'
import { v4 as uuidv4 } from 'uuid';


class AllService {
    async signup(payload: ISignup) {
        const { username, email, password } = payload
        const hashedPassword = await bcrypt.hash(password, 10)
        try {
            const data = await UserModel.create({
                username,
                email,
                password: hashedPassword
            })
            return data
        } catch (error) {
            return error
        }
    }

    async login(payload: ILogin) {
        const { username, password } = payload
        try {
            const data = await UserModel.findOne({ username })
            if (data) {
                const isMatch = await bcrypt.compare(password, data.password)
                if (isMatch) {
                    return data
                } else {
                    return null
                }
            } else {
                return null
            }
        } catch (error) {
            return error
        }
    }

    async getTasksByUser(username: string) {
        try {
            const data = await UserModel.findOne({ username })
            const tasks = await TaskModel.find({id : {$in: data?.taskIds } })
            return tasks
        } catch (error) {
            return error
        }
    }

    async createTask(task: ICreateTask) {
        try {
            const _id = uuidv4()
            const data = await TaskModel.create({
                id: _id,
                title: task.title,
                description: task.description,
                priority: task.priority,
                deadline: task.deadline
            })
            await UserModel.updateOne({ username: task.username }, { $push: { taskIds: _id } })
            return data
        } catch (error) {
            return error
        }
    }

}

export default AllService
