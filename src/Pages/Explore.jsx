import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLike, addComment } from '../Redux/exploreSlice';
import styles from './Explore.module.css';

const Explore = () => {
  const exploreItems = useSelector(state => state.explore.exploreItems);
  const dispatch = useDispatch();
  const [commentInputs, setCommentInputs] = useState({});

  const handleLike = (id) => {
    dispatch(toggleLike(id));
  };

  const handleCommentChange = (id, value) => {
    setCommentInputs(prev => ({ ...prev, [id]: value }));
  };

  const handleAddComment = (id) => {
    if (commentInputs[id] && commentInputs[id].trim() !== '') {
      dispatch(addComment({ id, comment: commentInputs[id].trim() }));
      setCommentInputs(prev => ({ ...prev, [id]: '' }));
    }
  };

  return (
    <div className={styles.container}>
      {exploreItems.map(item => (
        <div key={item.id} className={styles.card}>
          {/* Content based on type */}
          {item.type === 'image' && (
            <img src={item.url} alt={`Explore item ${item.id}`} className={styles.image} />
          )}
          {item.type === 'reel' && (
            <video
              src={item.url}
              controls
              className={styles.video}
            />
          )}
          {item.type === 'post' && (
            <div>
              <p>{item.text}</p>
              <img src={item.url} alt={`Post ${item.id}`} className={styles.postImage} />
            </div>
          )}

          {/* Like Button */}
          <button
            onClick={() => handleLike(item.id)}
            className={`${styles.likeButton} ${item.liked ? styles.liked : ''}`}
          >
            {item.liked ? '❤️ Liked' : '🤍 Like'}
          </button>

          {/* Comments Section */}
          <div className={styles.commentsSection}>
            <strong>Comments:</strong>
            {item.comments.length > 0 ? (
              <ul className={styles.commentList}>
                {item.comments.map((comment, idx) => (
                  <li key={idx}>{comment}</li>
                ))}
              </ul>
            ) : (
              <p>No comments yet</p>
            )}

            {/* Add comment input */}
            <input
              type="text"
              placeholder="Add a comment..."
              value={commentInputs[item.id] || ''}
              onChange={e => handleCommentChange(item.id, e.target.value)}
              className={styles.commentInput}
            />
            <button
              onClick={() => handleAddComment(item.id)}
              className={styles.addCommentButton}
            >
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Explore;

