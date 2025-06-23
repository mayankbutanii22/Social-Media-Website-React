import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, addPost, deletePost, likePost,disLikePost,updatePost } from '../Redux/homeFeedSlice';
import { GrUpdate } from "react-icons/gr";
import { BiDislike } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import styles from './HomeFeed.module.css';

const HomeFeed = () => {
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state) => state.homeFeed);
  const [yourUsername , setYourUsername] = useState('');
  const [newPost, setNewPost] = useState('');
  const [editPostId, setEditPostId] = useState(null);
  const [editContent, setEditContent] = useState('');

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleAddPost = () => {
    if (newPost.trim()) {
      const post = {
        id: Date.now(),
        username: yourUsername,
        content: newPost,
        likes: 0,
      };
      dispatch(addPost(post));
      setYourUsername('');
      setNewPost('');
    }
  };

  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };

  const handleLike = (id) => {
    dispatch(likePost(id));
  };

  const handleDislike = (id) => {
    dispatch(disLikePost(id));
  };

  const handleEdit = (id, content) => {
    setEditPostId(id);
    setEditContent(content);
  };

  const handleUpdate = () => {
    if (editContent.trim()) {
      dispatch(updatePost({ id: editPostId, content: editContent }));
      setEditPostId(null);
      setEditContent('');
    }
  };

  return (
    <div className={styles['home-feed']}>
      <h2>Home Feed</h2>

      <div className={styles['post-creator']}>
        <input 
        placeholder="Username" 
        value={yourUsername}
        onChange={(e) => setYourUsername(e.target.value)}
        />
         <textarea
          placeholder="Content"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button onClick={handleAddPost}>Post</button>
      </div>

      {status === 'loading' && <p>Loading posts...</p>}
      {status === 'failed' && <p>Error: {error}</p>}

      <ul className={styles['post-list']}>
        {posts.map((post) => (
          <li key={post.id} className={styles['post-item']}>
            <strong>@{post.username}</strong>
            {editPostId === post.id ? (
              <>
                <textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                />
                <button className={styles['update-button']} onClick={handleUpdate}><GrUpdate /></button>
              </>
            ) : (
              <p>{post.content}</p>
               
            )}
            <div className={styles['post-actions']}>
             <span>Likes: {post.likes}</span>
              <button className={styles['like-button']} onClick={() => handleLike(post.id)}><BiLike /></button>
              <button className={styles['disLike-button']} onClick={() => handleDislike(post.id)}><BiDislike /></button>
              <button className={styles['edit-button']} onClick={() => handleEdit(post.id,post.content)}><MdEdit /></button>
              <button className={styles['delete-button']} onClick={() => handleDelete(post.id)}><MdDelete /></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeFeed;