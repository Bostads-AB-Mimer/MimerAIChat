import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useLocation } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';
import styles from './UserOptions.module.css';

export default function UserOptions() {
  const { user, isAuthenticated } = useAuth0();
  const location = useLocation();
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const error = params.get('error');
    const errorDescription = params.get('error_description');

    if (error === 'unauthorized' && errorDescription) {
      setErrorMessage(decodeURIComponent(errorDescription));
    } else {
      setErrorMessage('');
    }
  }, [location]);

  return (
    <div className={styles['user-options']}>
      {errorMessage && (
        <div className={styles['error-message']}>{errorMessage}</div>
      )}
      {isAuthenticated && (
        <>
          <span className={styles['user-email']}>{user.email}</span>
          <LogoutButton />
        </>
      )}
      {!isAuthenticated && (
        <LoginButton clearError={() => setErrorMessage('')} />
      )}
    </div>
  );
}
