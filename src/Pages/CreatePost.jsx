import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPost, editPost, deletePost } from '../Redux/createPostSlice';
import styles from './CreatePost.module.css';

function CreatePost() {
  const posts = useSelector(state => state.createPost.posts);
  const dispatch = useDispatch();

  const [content, setContent] = useState('');
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = () => {
    if (content.trim()) {
      if (editingId) {
        dispatch(editPost({ id: editingId, content }));
        setEditingId(null);
      } else {
        dispatch(addPost({ id: Date.now(), content }));
      }
      setContent('');
    }
  };

  const handleEdit = (post) => {
    setContent(post.content);
    setEditingId(post.id);
  };

  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };

  return (
    <div className={styles.container}>
      <h1>Create a Post</h1>
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Write something amazing..."
        className={styles.textarea}
      />
      <div className={styles.controls}>
        <button className={styles.postBtn} onClick={handleSubmit}>
          {editingId ? 'Update Post' : 'Post'}
        </button>
      </div>

      <div className={styles.posts}>
        <h2>Your Posts</h2>
        {posts.length === 0 && <p className={styles.empty}>No posts yet.</p>}
        <ul>
          {posts.map(p => (
            <li key={p.id} className={styles.postItem}>
              <span>{p.content}</span>
              <div className={styles.postActions}>
                <button onClick={() => handleEdit(p)} className={styles.editBtn}>Edit</button>
                <button onClick={() => handleDelete(p.id)} className={styles.deleteBtn}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CreatePost;

