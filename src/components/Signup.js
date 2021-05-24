
import React, {useContext} from 'react';
import {firebaseAuth} from '../provider/AuthProvider';
import {withRouter} from 'react-router-dom';

const Signup = (props) => {

  const {handleSignup, inputs, setInputs, errors} = useContext(firebaseAuth)
    console.log(handleSignup) 

    const handleSubmit = async (e) => {
      e.preventDefault()
      console.log('handleSubmit')
      //wait to signup 
      await handleSignup()
      //push home
      props.history.push('/')
    }
    
    const handleChange = e => {
      const {name, value} = e.target
      console.log(inputs)
      setInputs(prev => ({...prev, [name]: value}))
    }

  return (
    
<form method='POST' onSubmit={handleSubmit}>
      {/* replace the div tags with a form tag */}
      <h2>Signup</h2>
      {/* make inputs  */}
      <input type='email' onChange={handleChange} name="email" placeholder='email' value={inputs.email} required/> <br/>
      <input type='password' onChange={handleChange} name="password" placeholder='password' value={inputs.password} required /><br/>
      <button type='submit'>signup</button>
      {errors.length > 0 ? errors.map(error => <p style={{color: 'red'}}>{error}</p> ) : null}
</form>
    
  );
};

export default withRouter(Signup);
