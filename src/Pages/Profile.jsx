import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile,} from '../Redux/profileSlice';
import styles from './Profile.module.css';

const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  const [formData, setFormData] = useState({
    fullName: profile.fullName || '',
    address: profile.address || '',
    phone: profile.phone || '',
    email: profile.email || '',
    password: '',
  });

  const [preview, setPreview] = useState(profile.profilePic || '');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
      dispatch(updateProfile({ profilePic: imageUrl }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile({ ...formData }));
    alert('Profile Updated!');
  };

  return (
    <div className={styles.container}>
      <h2>My Profile</h2>
      <div className={styles.profilePicWrapper}>
        {preview ? (
          <img src={preview} alt="Profile" className={styles.profilePic} />
        ) : (
          <div className={styles.profilePicPlaceholder}>No Image</div>
        )}
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <p>{profile.username}</p>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
        />
        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="New Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
