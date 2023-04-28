import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styles from './LoginButton.module.css';

const LoginButton = ({ clearError }) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className={styles.loginButton}
      onClick={() => {
        clearError();
        loginWithRedirect();
      }}
    >
      Logga in
    </button>
  );
};

export default LoginButton;
