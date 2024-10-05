import express from "express"
import { Request ,Response } from "express"
import { User } from "../model/user.model"
import { UserID, UserModel } from "../types/model.type"

const userRoute = express.Router()

// Get all user
userRoute.get("/" ,async(request: Request ,response: Response) => {
    try {
        const user = await User.findAll()
        response.json(user)
    } catch (error) {
        response.sendStatus(404)
    }
})

// Get user with user id
userRoute.get("/:id" ,async(request: Request ,response: Response) => {
    const userId: UserID = parseInt(request.params.id)
    try {
        const user = await User.findAll({
            where: {
                user_id: userId
            }
        })
        response.json(user)
    } catch (error) {
        response.sendStatus(404)
    }
})

// insert new user
userRoute.post("/create" ,async(request: Request ,response: Response) => {
    const {
        username,
        password,
        role,
    }: UserModel = request.body

    try {
        const user = await User.create({
            user_username: username,
            user_password: password,
            user_role: role,
            user_createAt: new Date()
        })
        response.sendStatus(201)
    } catch (error) {
        console.error(error);
        response.sendStatus(500)
    }
})

// update user with user id
userRoute.put("/:id" ,async(request: Request ,response: Response) => {
    const userId: UserID = parseInt(request.params.id)
    const {
        username,
        password,
        role,
    }: UserModel = request.body

    try {
        const user = await User.update({
            user_username: username,
            user_password: password,
            user_role: role
        }, {
            where: {
                user_id: userId
            }
        })
        response.sendStatus(201)
    } catch (error) {
        response.sendStatus(500)
    }
})

// delete user with user id
userRoute.delete("/:id" ,async(request: Request ,response: Response) => {
    const userId: UserID = parseInt(request.params.id)
    try {
        const user = await User.destroy({
            where: {
                user_id: userId
            }
        })
        response.sendStatus(200)
    } catch (error) {
        response.sendStatus(500)
    }
})

export {userRoute}