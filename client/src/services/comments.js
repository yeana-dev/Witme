import api from "./config";

export const getAllComments = async () => {
  const resp = await api.get("/comments");
  return resp.data;
};

export const getOnePostsComments = async (postId) => {
  const resp = await api.get(`/posts/${postId}/comments`);
  return resp.data;
};

export const getOneComment = async (id) => {
  const resp = await api.get(`/comments/${id}`);
  return resp.data;
};

export const createComment = async (commentData, postId) => {
  const resp = await api.post(`/posts/${postId}/comments`, {
    comment: commentData,
  });
  return resp.data;
};

export const updateComment = async (id, commentData) => {
  const resp = await api.put(`/comments/${id}`, { comment: commentData });
  return resp.data;
};

export const deleteComment = async (id) => {
  const resp = await api.delete(`/comments/${id}`);
  return resp.data;
};
