import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { auth, signInWithEmailAndPassword } from '../../firebaseAuth';
import { Button } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const [email, setEmail] = useState('himanshuramchandani08@gmail.com')
  const [password, setPassword] = useState('123456');
  const [loading, setLoading] = useState(false);

  let dispatch = useDispatch();

  const nav = new useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);    
    // console.table(email, password);

    try{
      const result = await signInWithEmailAndPassword(auth, email, password);
      // console.log(result);

      const { user } = result;
      const idTokenResult = await user.getIdToken();

      dispatch({
        type: "LOGGED_IN_USER",
        payload: {
          email: user.email,
          token: idTokenResult.token,
        }
      });

      nav('/');
      
    } catch(error){
      console.log(error);
      toast.error(error.message);
      setLoading(false);
    }
  }


  const loginForm = () => (
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

      <div className='form-group'>
        <input
          type='password'
          className='form-control'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your Password"
        />
      </div>
      <br />

      <Button
        onClick={handleSubmit}
        type="primary"
        className='mb-3'
        block
        shape='round'
        icon={<MailOutlined />}
        size='large'
        disabled={!email || password.length < 6}
      >
        Login with Email/Password
      </Button>
    </form>
  )

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <h3>Login</h3>
          {loginForm()}
        </div>
      </div>
    </div>
  );
}

export default Login;
