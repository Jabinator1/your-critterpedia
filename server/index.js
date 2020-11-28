import dotenv from "dotenv"
import express from "express"
import massive from "massive"
import session from "express-session"
import authController from "./controllers/authController.js"
const app = express()
dotenv.config()

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env
const {loginUser, registerUser, logoutUser} = authController

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
app.post("/auth/logout", logoutUser)

//# User
// app.delete("/api/user")
// app.put("/api/user")
// app.get("/api/user")

//# Museum
// app.get("/api/exhibit")
// app.put("/api/exhibit")

//# Critterpedia

app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}.`))