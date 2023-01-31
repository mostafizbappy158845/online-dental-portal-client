import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    const {register,handleSubmit, formState:{errors}} = useForm();
    const {createUser, updateUser} = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('')

    const navigate = useNavigate();
    const handleSignUp = data =>{
        setSignUpError('');
        createUser(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            toast('User Created Successfully')
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
            .then(() =>{
                // navigate('/')
                saveUser(data.name, data.email);
            })
            
            .catch(error => console.log(error))
        })
        .catch(error => {
            console.log(error)
            setSignUpError(error.message)
        });
    }
    const saveUser = (name,email) =>{
        const user = {name,email};
        fetch('http://localhost:5000/users', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            getUserToken(email);
        })
    }

    const getUserToken = email =>{
        fetch(`http://localhost:5000/jwt?email=${email}`)
        .then(res=> res.json())
        .then(data=>{
            if(data.accessToken){
                localStorage.setItem('accessToken',data.accessToken);
                navigate('/');
            }
        })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center font-bold'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text" {...register("name", 
                        {required: 'name is required*'}
                        )} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" {...register("email",
                        {required: 'email is required*',}
                        )} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password",
                        {required: 'password is required*',
                         minLength: {value:6, message:'password must be 6 character or more*'},
                         pattern: {value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/, message:'at least one uppercase,one lowercase and one number*'}
                        }
                        )} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full mt-4' value="Sign Up" type="submit" />
                    {
                        signUpError && <p className='text-red-500'>{signUpError}</p>
                    }
                </form>
                <p>Already have an account? <Link className='text-secondary' to='/login'>Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;