export const checkUser = (req, res, next) => {
    req.session.user.user_id ? next()
    : res.status(403).send("No user logged in")
}