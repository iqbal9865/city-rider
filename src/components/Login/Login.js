import React from 'react';
import { useForm } from 'react-hook-form';
import './Login.css'
const Login = () => {
    
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='login-form'>
            <div className='forms'>
            <h2>Create An Account</h2>
            <form className='' onSubmit={handleSubmit(onSubmit)}>
                <input name="name" placeholder='Enter Your Name' defaultValue="" ref={register} />
                {errors.name && <span className='error'>name is required</span>}

                <input name="email" placeholder='Enter Your Email' defaultValue="" ref={register} />
                {errors.email && <span className='error'>email is required</span>}

                <input name="password" placeholder='Enter Your Password' defaultValue="" ref={register} />
                {errors.password && <span className='error'>password is required</span>}

                <input name="confirmPassword" placeholder='Confirm Password' defaultValue="" ref={register} />
                {errors.confirmPassword && <span className='error'>Confirm Password will be same</span>}

                <input style={{backgroundColor: 'orange'}} type="submit" />

                <span style={{margin: '10px 100px'}}>Already have an account?<a href="#">Login</a></span> 
            </form>
            </div>
            <div>
                <button style={{margin: '10px 100px', borderRadius: '8px'}}>Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;