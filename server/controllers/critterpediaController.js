export const getCritterpedia = async (req, res) => {
    try {
        const db = req.app.get('db')
        const {user_id} = req.session.user

        const [critterpedia] = await db.critterpedia.get_exhibits(user_id)
        res.status(200).send(critterpedia)
    } catch (err) {
        console.log(err)
        res.sendStatus(400)
    }
}

export const editBugs = async (req, res) => {
    try {
        const db = req.app.get('db')
        //# bug_arr, fish_arr, sea_arr
        const {critterArrType, critterArr} = req.body
        const {userId} = req.session.user

        const [updatedArr] = await db.critterpedia.edit_bugs([userId, critterArr])
        console.log(updatedArr)
        res.status(200).send(updatedArr)
    } catch (err) {
        console.log(err)
        res.sendStatus(400)
    }
}

export default getCritterpedia