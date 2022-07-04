import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { auth, signInWithEmailLink, isSignInWithEmailLink, createUserWithEmailAndPassword } from '../../firebaseAuth';
import { useNavigate } from "react-router-dom";



const RegisterComplete = ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState("");
  const nav = new useNavigate();

  useEffect(() => {
    setEmail(window.localStorage.getItem("emailForRegistration"));

    // console.log(window.location.href);
    // console.log(window.localStorage.getItem("emailForRegistration"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault()

    // validation
    if(!email || !password){
      toast.error("Email and password is required");
      return;
    }

    if(password.length < 6){
      toast.error("Password must be atleast 6 characters long");
      return;
    }

    try {
      console.log("hello");
      const result = await signInWithEmailLink(
        auth,
        email,
        window.location.href
      );

      console.log(result);

      if(isSignInWithEmailLink(auth, window.location.href)){
        // remove user email from local storage
        window.localStorage.removeItem("emailForRegistration");
        
        //get user id token
        let user = auth.currentUser;
        // await user.updatePassword(password);
        createUserWithEmailAndPassword(auth, email, password)

        const idTokenResult = await user.getIdToken();
        
        // redux store
        console.log("User", user, "IdTokenResult", idTokenResult);

        // redirect
        // history.push('/');
        nav('/');
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }



  };

  
  const completeRegistrationForm = () => (
    <form onSubmit={handleSubmit}>
      <input type='email' className='form-control' value={email} disabled />

      <input
        type='password'
        className='form-control'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
        autoFocus
      />

      <button type='submit' className='btn btn-raised'>
      Complete Registration 
      </button>
    </form>
  )

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <h3>Register Complete</h3>
          {completeRegistrationForm()}
        </div>
      </div>
    </div>
  );
}

export default RegisterComplete;
