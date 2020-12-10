import dotenv from "dotenv"
import express from "express"
import massive from "massive"
import session from "express-session"
import path from "path"
import { loginUser, registerUser, logoutUser, getUser } from "./controllers/authController.js"
import { editUser, editUserPass, deleteUser } from "./controllers/userController.js"
import { checkUser } from "./middleware.js"
import { getCritterpedia, editCritterpedia } from "./controllers/critterpediaController.js"
const app = express()
dotenv.config()

const __dirname = path.resolve(path.dirname(''))
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

app.use(express.static(`${__dirname}/build`))
app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))

massive({connectionString: CONNECTION_STRING, ssl: {rejectUnauthorized: false}})
.then(db => {app.set("db", db); console.log("Connected to database!")})
.catch(err => console.log(err))

//# Auth
app.post("/auth/login", loginUser)
app.post("/auth/register", registerUser)
app.post("/auth/logout", checkUser, logoutUser)
app.get("/auth/user-session", checkUser, getUser)

//# User
app.put("/api/user", checkUser, editUser)
app.delete("/api/user", checkUser, deleteUser)
app.put("/api/user/password", checkUser, editUserPass)

//# Critterpedia
app.get("/api/critterpedia", checkUser, getCritterpedia)
app.put("/api/critterpedia", checkUser, editCritterpedia)

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/build/index.html"))
})

app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}.`))