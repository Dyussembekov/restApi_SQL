const db = require('../db')

class UserController {
    async createUser(req, res) {
        const {fname, lname} = req.body
        const newPerson = await db.query(`INSERT INTO person (fname, lname) VALUES ($1, $2) RETURNING *`, [fname, lname])
        res.json(newPerson.rows[0])
    }
    async getUser(req, res) {
        const users = await db.query(`SELECT * FROM person`)
        res.json(users.rows)
    }
    async getOneUser(req, res) {
        const id = req.params.id
        const users = await db.query(`SELECT * FROM person WHERE id = $1`, [id])
        res.json(users.rows[0])
    }
    async updateUser(req, res) {
        const {id, fname, lname} = req.body
        const user = await db.query(`UPDATE person SET fname = $1, lname = $2 WHERE id = $3 RETURNING *`, [fname, lname, id])
        res.json(user.rows[0])
    }
    async deleteUser(req, res) {
        const id = req.params.id
        const users = await db.query(`DELETE FROM person id = $1`, [id])
        res.json(users.rows[0])
    }
}

module.exports = new UserController()