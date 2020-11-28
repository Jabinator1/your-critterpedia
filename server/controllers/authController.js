import bcrypt, { hashSync } from 'bcrypt'

export default {
    loginUser: async (req, res) => {
        const db = req.app.get('db')
        const {email, password} = req.body

        try {
            const [foundUser] = await db.auth.check_email(email)

            if (!foundUser) return res.status(401).send("Invalid email or password.")

            const passwordCheck = bcrypt.compareSync(password, foundUser.password)

            if (passwordCheck) {
                delete foundUser.password
                req.session.user = foundUser
                res.status(200).send(req.session.user)
            } else {
                return res.status(401).send("Invalid email or password.")
            }
            
        } catch (err) {
            console.log("Database error on login function", err)
        }

    },
    registerUser: async (req, res) => {
        const db = req.app.get('db')
        
        const {email, username, password} = req.body

        try {
            const [foundEmail] = await db.auth.check_email(email)
            const [foundUsername] = await db.auth.check_username(username)

            if (!foundUsername) {
                if (!foundEmail) {
                    const salt = bcrypt.genSaltSync(10)
                    const hash = bcrypt.hashSync(password, salt)

                    req.body.password = hash
                    const [newUser] = db.auth.register_user(req.body)

                    req.session.user = newUser
                    res.status(200).send(req.session.user)
                } else {
                    return res.status(401).send("Email already in use")
                }
            } else {
                return res.status(401).send("Username already in use")
            }
        } catch (err) {
            console.log("Database error on register function", err)
        }
    },
    logoutUser: async (req, res) => {
        const db = req.app.get('db')
        
    }
}