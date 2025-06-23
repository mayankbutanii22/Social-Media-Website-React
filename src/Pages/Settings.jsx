import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  toggleDarkMode,
  toggleNotifications,
  togglePrivateAccount,
  toggleAutoPlay,
  toggleEmailUpdates,
  updateProfile,
  changePassword,
} from '../Redux/settingsSlice';
import styles from './Settings.module.css';

function Settings() {
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.settings);

  const [username, setUsername] = useState(settings.username || '');
  const [email, setEmail] = useState(settings.email || '');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [changesMade, setChangesMade] = useState(false);

  useEffect(() => {
    setChangesMade(
      username !== settings.username ||
      email !== settings.email ||
      currentPassword !== '' ||
      newPassword !== '' ||
      confirmPassword !== ''
    );
  }, [username, email, currentPassword, newPassword, confirmPassword, settings]);

  const validatePasswords = () => {
    if (newPassword !== confirmPassword) {
      setPasswordError('New passwords do not match');
      return false;
    }
    if (newPassword && newPassword.length < 6) {
      setPasswordError('New password must be at least 6 characters');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const handleSave = () => {
    if (!validatePasswords()) return;

    setIsSaving(true);
    dispatch(updateProfile({ username, email }));

    if (currentPassword && newPassword) {
      dispatch(changePassword({ currentPassword, newPassword }));
    }

    setTimeout(() => {
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setIsSaving(false);
      setChangesMade(false);
      alert('Settings saved successfully!');
    }, 1000);
  };

  return (
    <div className={styles.settingsContainer}>
      <h2 className={styles.settingsHeading}>Settings</h2>

      {/* Profile Info */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Profile Information</h3>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Username</label>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className={styles.inputField}
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className={styles.inputField}
          />
        </div>
      </section>

      {/* Change Password */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Change Password</h3>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Current Password</label>
          <input
            type="password"
            value={currentPassword}
            onChange={e => setCurrentPassword(e.target.value)}
            className={styles.inputField}
            autoComplete="current-password"
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            className={styles.inputField}
            autoComplete="new-password"
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Confirm New Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            className={styles.inputField}
            autoComplete="new-password"
          />
        </div>
        {passwordError && <p className={styles.errorText}>{passwordError}</p>}
      </section>

      {/* Preferences Toggles */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Preferences</h3>

        <div className={styles.toggleItem}>
          <label className={styles.toggleLabel}>🌙 Dark Mode</label>
          <input
            type="checkbox"
            checked={settings.darkMode}
            onChange={() => dispatch(toggleDarkMode())}
            className={styles.toggleInput}
          />
        </div>

        <div className={styles.toggleItem}>
          <label className={styles.toggleLabel}>🔔 Notifications</label>
          <input
            type="checkbox"
            checked={settings.notificationsEnabled}
            onChange={() => dispatch(toggleNotifications())}
            className={styles.toggleInput}
          />
        </div>

        <div className={styles.toggleItem}>
          <label className={styles.toggleLabel}>🔒 Private Account</label>
          <input
            type="checkbox"
            checked={settings.privateAccount}
            onChange={() => dispatch(togglePrivateAccount())}
            className={styles.toggleInput}
          />
        </div>

        <div className={styles.toggleItem}>
          <label className={styles.toggleLabel}>▶️ Auto Play Reels</label>
          <input
            type="checkbox"
            checked={settings.autoPlay}
            onChange={() => dispatch(toggleAutoPlay())}
            className={styles.toggleInput}
          />
        </div>

        <div className={styles.toggleItem}>
          <label className={styles.toggleLabel}>📧 Email Updates</label>
          <input
            type="checkbox"
            checked={settings.emailUpdates}
            onChange={() => dispatch(toggleEmailUpdates())}
            className={styles.toggleInput}
          />
        </div>
      </section>

      <button
        className={styles.saveButton}
        disabled={!changesMade || isSaving}
        onClick={handleSave}
      >
        {isSaving ? 'Saving...' : 'Save Changes'}
      </button>
    </div>
  );
}

export default Settings;


