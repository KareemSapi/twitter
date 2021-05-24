
import React, {useContext} from 'react';
import {firebaseAuth} from '../provider/AuthProvider';
import '../css/Signin.css';

const Signin = () => {

  const {handleSignin, inputs, setInputs, errors} = useContext(firebaseAuth)
    console.log(handleSignin) 

    const handleSubmit = (e) => {
      e.preventDefault()
      console.log('handleSubmit')
      
      handleSignin()
  
    }
    const handleChange = e => {
      const {name, value} = e.target
      console.log(inputs)
      setInputs(prev => ({...prev, [name]: value}))
    }

  return (
    <div className='container'>
      
      <form method='POST' onSubmit={handleSubmit}>

      <div className='header'>
          <h2>Login</h2>
      </div>
      <div className='email'>
          <input type='email' onChange={handleChange} name="email" placeholder='email' value={inputs.email} /> <br/>
      </div>
      <div className='pwd'>
          <input type='password' onChange={handleChange} name="password" placeholder='password' value={inputs.password} /><br/>
      </div>
      <div className='btn'>
          <button type='submit'>signin</button>
      </div>
      <div className='msg'>
          {errors.length > 0 ? errors.map(error => <p style={{color: 'red'}}>{error}</p> ) : null}
      </div>
      </form>
      
      
    </div>
    
  );
};

export default Signin;