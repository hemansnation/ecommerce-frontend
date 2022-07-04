import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { auth, sendPasswordResetEmail } from '../../firebaseAuth';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'


const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false);

  const nav = new useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const config = {
        url: process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT,
        handleCodeInApp: true
    }

    await sendPasswordResetEmail(auth, email, config)
            .then(() => {
                setEmail("");
                setLoading(false);
                toast.success("Check Your email fot password reset Link")
            })
            .catch((error) => {
                setLoading(false);
                toast.error(error.message);
                console.log(("Error", error));
            });
  }

  
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          {loading ? (
            <h3 className='text-danger'>Loading...</h3>
          ) : (
            <h3>Forgot Password</h3>
          )}
          
    <form onSubmit={handleSubmit}>
        <div className='form-group'>
            <input
            type='email'
            className='form-control'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            autoFocus
            />
        </div>
        <button className='btn btn-raised' disabled={!email}>
            Submit
        </button>
    </form>
      
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
