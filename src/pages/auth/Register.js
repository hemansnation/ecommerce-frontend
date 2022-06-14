import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { auth, sendSignInLinkToEmail } from '../../firebaseAuth';


const Register = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('ENV --->', process.env.REACT_APP_REGISTER_REDIRECT_URL);
    
    // config
    const config = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true
    }

    // auth signin link
    // await auth.sendSignInLinkToEmail(email, config);

    await sendSignInLinkToEmail(auth, email, config)
    .then(() => {
      // The link was successfully sent. Inform the user.
      // Save the email locally so you don't need to ask the user for it again
      // if they open the link on the same device.
      window.localStorage.setItem('emailForRegistration', email);
      // ...
    })
    .catch((error) => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // ...
      console.log(error);
    });

    toast.success(
      `Email is sent to ${email}. Click the link to complete your Registration.`
    );

    // save email in local storage
    // window.localStorage.setItem("emailForRegistration", email);

    // set state
    setEmail("");
  }


  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type='email'
        className='form-control'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoFocus
      />

      <button type='submit' className='btn btn-raised'>
        Register
      </button>
    </form>
  )

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <h3>Register</h3>
          {registerForm()}
        </div>
      </div>
    </div>
  );
}

export default Register;
