import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const ApiDemo = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [postId, setPostId] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    // GET
    try {
      const response = await axios.get(API_URL);
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const createPost = async () => {
    // POST
    try {
      const response = await axios.post(
        API_URL,
        { title: title, body: body }
        // {
        //   Authorization: `Bearer ${token}`,
        //   Content: "application/json",
        // }
      );
      setPosts([...posts, response.data]);
      setTitle("");
      setBody("");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const updatePost = async () => {
    // UPDATE
    try {
      const response = await axios.put(`${API_URL}/${postId}`, { title, body });
      setPosts(
        posts.map((post) => (post.id === postId ? response.data : post))
      );
      setTitle("");
      setBody("");
      setPostId(null);
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const deletePost = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handleEdit = (post) => {
    setTitle(post.title);
    setBody(post.body);
    setPostId(post.id);
  };

  useEffect(() => {
    console.log(posts.sort((a, b) => b.id - a.id));
  }, [posts]);

  return (
    <div>
      <h1>CRUD Operations with JSONPlaceholder</h1>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button onClick={postId ? updatePost : createPost}>
          {postId ? "Update" : "Create"} Post
        </button>
      </div>
      <ul>
        {posts
          .sort((a, b) => b.id - a.id)
          .map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <button onClick={() => handleEdit(post)}>Edit</button>
              <button onClick={() => deletePost(post.id)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ApiDemo;
