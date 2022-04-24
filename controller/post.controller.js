class PostController {
    async createPost(req, res) {
        const {title, content} = req.body;
        const newPost = await db.query(`INSERT INTO post (title, content) VALUES ($1, $2) RETURNING *` ,[title, content])
        res.json(newPost.rows[0])
    }
    async getPostsByUser(req, res) {
        const id = req.query.id;
        const posts = await db.query(`SELECT * FROM post WHERE user_id = $1`, [id])
        res.json(posts.rows)
    }
}

module.exports = new PostController();