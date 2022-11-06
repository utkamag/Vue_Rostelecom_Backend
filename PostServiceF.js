import PostF from "../Post/PostF.js";

class PostServiceF {
    async create(post) {
        const createdPost = await PostF.create(post)
        return createdPost;
    }

    async getAll(post) {
        const posts = await PostF.find()
        return posts;
    }

    async getOne(id) {
        if (!id) {
            throw new Error("Не указан id")
        }
        const post = await PostF.findById(id)
        return post;
    }

    async update(post) {

        if (!post._id) {
            throw new Error("В теле запроса не указан id")
        }

        const updatePost = await PostF.findByIdAndUpdate(post._id, post, {new: true})
        return updatePost;
    }

    async delete(id) {

        if (!id) {
            throw new Error("В запросе не указан id")
        }
        const deletePost = await PostF.findByIdAndDelete(id)
        return deletePost;

    }
}

export default new PostServiceF()