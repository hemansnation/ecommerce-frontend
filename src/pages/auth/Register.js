import React, { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = () => {
    //
  }


  const registerForm = () => (
    <form>
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
