import { compareSync } from 'bcrypt'

export const editUser = async (req, res) => {
    const db = req.app.get('db')
    const {user} = req.session
    
    try {
        user = {...user, ...req.body}

        await db.user.edit_user(user)
        res.status(200).send(user)
    } catch (err) {
        res.status(304).send(err)
        console.log("Database error on editUser: ", err)
    }
}

export const editUserPass = async (req, res) => {
    const db = req.app.get('db')
    const {email, user_id} = req.session.user
    const {oldPass, newPass} = req.body

    try {
        const [storedPass] = await db.shared.get_user_pass(email)

        const passCheck = compareSync(oldPass, storedPass)
        if (!passCheck) return res.status(400).send("Incorrect Password")

        await db.user.edit_user_pass([user_id, newPass])
        res.sendStatus(200)
    } catch (err) {
        res.status(400).send(err)
        console.log("Database error on editUserPass: ", err)
    }
}

export const deleteUser = async (req, res) => {
    const db = req.app.get('db')
    const {user_id} = req.session.user

    try {
        await db.user.delete_user(user_id)
        res.status(200).send("Successfully deleted user")
    } catch (err) {
        res.status(400).send("Please log in")
        console.log("Database error on deleteUser: ", err)
    }
}