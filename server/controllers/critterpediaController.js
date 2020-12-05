export const getCritterpedia = async (req, res) => {
    try {
        const db = req.app.get('db')
        const {user_id} = req.session.user

        const [critterpedia] = await db.critterpedia.get_critterpedia(user_id)
        res.status(200).send(critterpedia)
    } catch (err) {
        console.log(err)
        res.sendStatus(400)
    }
}

export const editCritterpedia = async (req, res) => {
    try {
        const db = req.app.get('db')
        //# bug_arr, fish_arr, sea_arr
        const {critterArrType, critterArr} = req.body
        const {user_id} = req.session.user

        await db.critterpedia.edit_critterpedia([user_id, critterArrType, critterArr])
        res.sendStatus(200)
    } catch (err) {
        console.log("Database error on editBugs Function", err)
        res.sendStatus(400)
    }
}

export default getCritterpedia