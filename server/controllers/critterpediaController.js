export const getCritterpedia = async (req, res) => {
    try {
        const db = req.app.get('db')
        const {user_id} = req.session.user

        const critterpedia = await db.critterpedia.get_exhibits(user_id)
        res.status(200).send(critterpedia)
        console.log(critterpedia)
    } catch (err) {
        console.log(err)
        res.sendStatus(400)
    }
}

export const editBugs = async (req, res) => {
    try {
        const db = req.app.get('db')
        const {critterArrType, critterArr} = req.body
        const {userId} = req.session.user

        const updatedArr = await db.critterpedia.edit_bugs([critterArrType, critterArr, userId])
        res.status(200).send(updatedArr)
        console.log(updatedArr)
    } catch (err) {
        console.log(err)
        res.sendStatus(400)
    }
}

export default getCritterpedia