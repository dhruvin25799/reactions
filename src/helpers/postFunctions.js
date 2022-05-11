import axios from "axios";

export const likePost = async(postId, token) => {
    const response = await axios.post("/api/posts/like/"+postId, {
        headers: {
            authorization: token,
        }
    })
    return response.data;
}