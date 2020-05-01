import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHeartbeat} from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {getUser} from '../auth/userauth';

import './sign-in.styles.scss';


const SignIn = () => {
  const [userCreds, setUserCreds] = useState({
      username : '',
      password : ''
  });

  const {username, password} = userCreds;

const history = useHistory();

const handleSubmit = event => {
     event.preventDefault()

     if(username === 'vera' && password === '1234'){
         console.log(username);
         getUser(username, password); 
        
         setUserCreds({username : '', password : ''}); 
         
         setTimeout(()=> {
          history.push("/proposal");
         }, 1000);
         
     }
     else{

         alert('OOPS..! You\'re Not Permitted !!!');
         return;
     }
     
     
  };

const  handleChange = event => {
    const {value, name} = event.target;

    setUserCreds({...userCreds, [name] : value});
  }
 
  return(
    <div className='signinCont'>
     <div className='sign-in'>
     <h2>Sign in with your name</h2>

     <form onSubmit={handleSubmit}>
       <FormInput 
         name='username'
         type='text'
         handleChange={handleChange}
         value={username}
         label='username'
         required      
       />
         <FormInput
            name='password'
            type='password'
            value={password}
            handleChange={handleChange}
            label='password'
            required
          />

          <div className='buttons'>
          <CustomButton type='submit'>
            Sign In
          </CustomButton>
          </div>
      </form>
    </div>
    <div className='icon'>
       <p>Made with <FontAwesomeIcon icon={faHeartbeat}/> by EmmySteve</p> 
      </div>
  </div>
  )
 }

export default SignIn;