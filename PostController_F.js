import PostServiceF from "./PostServiceF.js";

class PostController_F {
    async create(req, res) {
        try {
            const post = await PostServiceF.create(req.body)
            res.json(post)
        }catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try{
            const posts = await PostServiceF.getAll()
            return res.json(posts)

        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const post = await PostServiceF.getOne(req.params.id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        try {
            const updatePost = await PostServiceF.update(req.body)
            return res.json(updatePost)

        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async delete(req, res) {
        try {
            const deletePost = await PostServiceF.delete(req.params.id)
            return res.json(deletePost)

        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new PostController_F()