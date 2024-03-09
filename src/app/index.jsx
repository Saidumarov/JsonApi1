import { useEffect, useState } from "react";
import Home from "../components/home";
import "./index.scss";
import axios from "axios";
import Header from "../components/header";
import { Route, Routes } from "react-router-dom";
import Todos from "../components/todos";
import Photos from "../components/photos";
import Comments from "../components/comments";
import Albums from "../components/albums";
import Posts from "../components/post";
function AppLayout() {
  const [user, setUser] = useState([]);
  const [todos, setTodos] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [comments, setComments] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [post, setPost] = useState([]);
  useEffect(() => {
    async function fetchData() {
      // user
      await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          setUser(res);
        });
      // todos
      await axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
          setTodos(res);
        });
      // photos
      await axios
        .get("https://jsonplaceholder.typicode.com/photos")
        .then((res) => {
          setPhotos(res);
        });
      // comments
      await axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((res) => {
          setComments(res);
        });
      // albums
      await axios
        .get("https://jsonplaceholder.typicode.com/albums")
        .then((res) => {
          setAlbums(res);
        });
      // post
      await axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          setPost(res);
        });
    }

    fetchData();
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home data={user} />} />
        <Route path="todos/:id" element={<Todos data={todos} />} />
        <Route path="photos/:id" element={<Photos data={photos} />} />
        <Route path="comments/:id" element={<Comments data={comments} />} />
        <Route path="albums/:id" element={<Albums data={albums} />} />
        <Route path="posts/:id" element={<Posts data={post} />} />
      </Routes>
    </>
  );
}

export default AppLayout;
