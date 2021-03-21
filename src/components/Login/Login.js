import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import firebase from "firebase/app";
import "firebase/auth";
import './Login.css'
import firebaseConfig from '../../firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
   
    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const history = useHistory();
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } }
    const [logInUser, setLogInUser] = useContext(UserContext);
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
    const handleGoogleSignIn = () => {
    var GoogleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
  .signInWithPopup(GoogleProvider)
  .then((result) => {
    var credential = result.credential;
    var token = credential.accessToken;
    console.log(token)
    // var user = result.user;
    const {displayName, email} = result.user;
    const signedInUser = {name: displayName, email}
    setLogInUser(signedInUser)
    history.replace(from);
    // console.log(user,' token: ',token)
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage,errorCode)
  });
    }

    const { register,  errors } = useForm();
    const onSubmit = data => console.log(data);

    const handleSubmit = (e) => {
        if(user.email && user.email) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((user) => { 
                const newUserInfo = {...user}
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo)
                // setLogInUser(newUserInfo)
                history.replace(from);
                updateUserInfo(user.name)
                // var user = res.user;     
            })
            .catch((error) => {
                const newUserInfo = {...user};
                newUserInfo.success = false;
                newUserInfo.error = error.message;
                setUser(newUserInfo)
            });
        }
        e.preventDefault();
        if(!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((res) => {
                const newUserInfo = {...user}
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo)
                setLogInUser(newUserInfo)
                history.replace(from);
                // console.log('sign in user: ',res.user)
                // var user = res.user;
            })
            .catch((error) => {
                const newUserInfo = {...user};
                newUserInfo.success = false;
                newUserInfo.error = error.message;
                setUser(newUserInfo)
            });
        }
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
    const updateUserInfo = (name) => {
        var user = firebase.auth().currentUser;
        user.updateProfile({
        displayName: name,
        // photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(function() {
            console.log('user name updated successfully')
        }).catch(function(error) {
            console.log('error',error)
        });
    }
    return (
        <div className='login-form'>
            <div className='forms'>
            {newUser && <h2>Create An Account</h2>}
            {user && !newUser && <h2>login</h2>}
            <form className='' onSubmit={handleSubmit}>
                {newUser && <input name="name" onBlur={handleInputChange} placeholder='Enter Your Name' defaultValue="" ref={register} />}
                {errors.name && <span className='error'>name is required</span>}

                <input name="email" onBlur={handleInputChange} required placeholder='Enter Your Email' defaultValue="" ref={register} />
                {errors.email && <span className='error'>email is required</span>}

                <input name="password" onBlur={handleInputChange} required placeholder='Enter Your Password' defaultValue="" ref={register} />
                {errors.password && <span className='error'>password is required</span>}                
                {newUser && <input name="confirmPassword" required onBlur={handleInputChange} placeholder='Confirm Password' defaultValue="" ref={register} />}
                {errors.confirmPassword && <span className='error'>Confirm Password will be same</span>}

                <input style={{backgroundColor: 'orange'}} type="submit" value={newUser?'Sign Up': 'Login'} />

                {user && !newUser && <span style={{margin: '10px 115px'}}>Don't Have An Account?
                <p style={{cursor: 'pointer',margin: '0px 130px', textDecoration:'underline', color: 'blue' }} onClick={ createNewUser }>create new account</p></span> }

                {newUser && <span style={{margin: '10px 115px'}}>Already Have An Account?
                <strong style={{cursor: 'pointer',margin: '0px 180px', textDecoration:'underline', color: 'blue' }} onClick={ createNewUser }>Login</strong></span>}

            </form>
            <p style={{color: 'red'}}>{user.error}</p>
            {user.success && <p style={{color: 'green'}}>user {newUser?' created ' : 'logged In '} successfully</p>}
            </div>
            <div>
                <button onClick={handleGoogleSignIn} style={{margin: '0 110px',backgroundColor:'orange', border: 'none',  borderRadius: '2px', height: '35px'}}>  Continue With Google</button>
            </div>
        </div>
    );
};
export default Login;