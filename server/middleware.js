export const checkUser = (req, res, next) => {
    try {
        req.session.user.user_id ? next() : null
    } catch (err) {
        res.status(403).send("No user logged in")
    }
}