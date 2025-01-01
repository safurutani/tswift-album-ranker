import React, { useState, useEffect } from 'react';
import { auth } from './firebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';
import { useAuth } from './AuthContext';
const AuthModal = ({ show, onClose, mode }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegister, setIsRegister] = useState(mode);
    const [verificationSent, setVerificationSent] = useState(false);
    const {logout} = useAuth();

    useEffect(() => {
      setIsRegister(mode);
    }, [mode]);

    // Reset fields when switching between login and register
    const handleSwitch = () => {
      setEmail('');
      setPassword('');
      setIsRegister(!isRegister);
      setVerificationSent(false);
    };

    // Email authentication
    const handleAuth = async () => {
    // Check for empty fields
    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }
    try {
      if (isRegister) {
        // Create new account via email
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await sendEmailVerification(user);
        alert('Account created successfully. Please verify your email to save your rankings.');
        logout();
        setIsRegister(false);
      } 
      else {
        // Log in via email
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        // Check if user has verified their email
        if (!user.emailVerified) {
          alert('Please verify your email before logging in.');
          setVerificationSent(true);
          return;
        } else {
          console.log('User logged in successfully!');
          alert('Welcome back!');
        }
      }
      onClose();
    } catch (error) {  
        alert(error.message);
      }
  };

  // Google authentication
  const handleGoogleAuth = async () => {
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
      onClose();
    } catch (error) {
      alert(error.message);
    }
  };

  const resendVerificationEmail = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        await sendEmailVerification(user);
        alert('Verification email sent!');
      }
    } catch (error) {
        alert(error.message);
    }
  };

  if (!show) return null;
  return (
    show && (
      <div className="modal-overlay">
        <div className="modal-content">
        <button className='close-button' onClick={onClose}>X</button>
          <h3 className='modal-title'>{isRegister ? 'Register a new account' : 'Log in to an existing account'}</h3>
          <div className='account-input-container'>
            <input
                className='account-input'
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {isRegister && <h3 className='modal-title'>Create new password</h3>}
            <input
                className='account-input'
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {isRegister && <p className='password-requirement'>Password must contain 8 characters</p>}
          <div className='account-button-container'>
            <button className='submit-account' onClick={handleAuth}>{isRegister ? 'Register' : 'Login'}</button>
            <br/>
            {verificationSent && (
              <div className='resend-verification-container'>
                <button className='resend-verification' onClick={resendVerificationEmail}>
                  Resend Verification Email
                </button>
                <br/>
                <br/>
            </div>
          )}
            <button className="google-auth" onClick={handleGoogleAuth}>
                <img className='google-icon' src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google logo" />
            {isRegister ? 'Sign up with Google' : 'Login with Google'}
          </button>
            <button className='switch-modal switch' onClick={handleSwitch}>
                {isRegister ? 'Have an account? Go to login' : 'Create account'}
            </button>
          </div>
          
        </div>
      </div>
    )
  );
};

export default AuthModal;
