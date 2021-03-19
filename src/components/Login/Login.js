import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import firebase from "firebase/app";
import "firebase/auth";
import './Login.css'
import firebaseConfig from '../../firebase.config';

const Login = () => {
    const [newUser, setNewUser] = useState(false)
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        success: false
    })

    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    var GoogleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth()
  .signInWithPopup(GoogleProvider)
  .then((result) => {
    var credential = result.credential;
    var token = credential.accessToken;
    var user = result.user;
    console.log(user)
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
  });
    }

    const { register,  errors } = useForm();
    const onSubmit = data => console.log(data);

    const handleSubmit = (e) => {
        if(user.email && user.email) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((userCredential) => { 
                const newUserInfo = {...user}
                newUserInfo.error = '';
                newUserInfo.success = true;
                var user = userCredential.user;
                setUser(newUserInfo)
            })
            .catch((error) => {
                const newUserInfo = {...user};
                newUserInfo.success = false;
                newUserInfo.error = error.message;
                setUser(newUserInfo)
                // var errorCode = error.code;
                // var errorMessage = error.message;
                // console.log(errorCode,errorMessage)
  });
        }
        e.preventDefault();
    }
    const handleInputChange = (event) => {
        let isFormValid = true;
        if(event.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(event.target.value)
            
        }
        if(event.target.name === 'password' || event.target.name === 'confirmPassword') {
            const isPasswordValid = event.target.value.length >= 6;
            const passwordHasNumber = /\d{1}/.test(event.target.value)
            isFormValid =  isPasswordValid && passwordHasNumber;
        }
        if(isFormValid){
            const newUserInfo = {...user}
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo) 
        }
    }
    const createNewUser = () => {
        setNewUser(!newUser)
    }

    return (
        <div className='login-form'>
            <div className='forms'>
            {newUser && <h2>Create An Account</h2>}
            {user && !newUser && <h2>login</h2>}
            <form className='' onSubmit={handleSubmit}>
                {newUser && <input name="name" placeholder='Enter Your Name' defaultValue="" ref={register} />}
                {errors.name && <span className='error'>name is required</span>}

                <input name="email" onBlur={handleInputChange} required placeholder='Enter Your Email' defaultValue="" ref={register} />
                {errors.email && <span className='error'>email is required</span>}

                <input name="password" onBlur={handleInputChange} required placeholder='Enter Your Password' defaultValue="" ref={register} />
                {errors.password && <span className='error'>password is required</span>}

                {newUser && <input name="confirmPassword" onBlur={handleInputChange} placeholder='Confirm Password' defaultValue="" ref={register} />}
                {errors.confirmPassword && <span className='error'>Confirm Password will be same</span>}

                <input style={{backgroundColor: 'orange'}} type="submit" value='submit' />

                {user && !newUser && <span style={{margin: '10px 115px'}}>Don't Have An Account?
                <p style={{cursor: 'pointer',margin: '0px 130px', textDecoration:'underline', color: 'blue' }} onClick={ createNewUser }>create new account</p></span> }

                {newUser && <span style={{margin: '10px 115px'}}>Already Have An Account?
                <p style={{cursor: 'pointer',margin: '0px 180px', textDecoration:'underline', color: 'blue' }} onClick={ createNewUser }>login</p></span>}

            </form>
            <p style={{color: 'red'}}>{user.error}</p>
            {user.success && <p style={{color: 'green'}}>user created successfully</p>}
            </div>
            <div>
                <button onClick={handleGoogleSignIn} style={{margin: '0 110px',backgroundColor:'orange',  borderRadius: '3px', height: 'px'}}>Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;