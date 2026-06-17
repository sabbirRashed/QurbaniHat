"use client"
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import logo from '@/assets/QurbaniHat_logo.png'
import { useForm } from 'react-hook-form';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';

const SignUpPage = () => {

    const router = useRouter();
    const [isShowPassword, setIsShowPassword] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSignUpForm = async (data) => {
        const { name, photoURL, email, password } = data;

        console.log(name, photoURL, email, password, "user data");

        const { data: userData, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: photoURL,
        })

        if (userData) {
            toast.success('SignUp successfully', {
                autoClose: 2000
            })
            'hello'
            router.push('/');
        }
        else {
            toast.error(error.message, {
                autoClose: 2000
            })
        }
    }

    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center '>
            <div className='p-8 md:p-8 rounded-xl bg-white border border-[#1c2b4c3d] mx-4 w-sm shadow-xl'>
                <Image src={logo}
                    alt='logo'
                    width={70}
                    height={70}
                    className='mx-auto'></Image>
                <h2 className='font-bold text-xl text-center border-b border-b-base-300 pb-2  text-primary'>SingUp your account</h2>

                <form onSubmit={handleSubmit(handleSignUpForm)}
                    className='mt-6 space-y-6'>

                    <div className="">
                        <legend className="text-xs font-medium">Your Name</legend>
                        <input
                            type="text"
                            className="border pl-3 text-sm py-2 rounded-sm mt-2 w-full"
                            placeholder="Enter your full name"
                            {...register("name", { required: "Name is required" })} />
                        {errors.name && <p className='text-red-500 text-xs mt-0'>{errors.name.message}</p>}
                    </div>

                    <div className="">
                        <legend className="text-xs font-medium">Your Email</legend>
                        <input
                            type="email"
                            className="border pl-3 text-sm py-2 rounded-sm mt-2 w-full"
                            placeholder="Enter your email address"
                            {...register("email", { required: "Email is required" })} />
                        {errors.email && <p className='text-red-500 text-xs mt-0'>{errors.email.message}</p>}
                    </div>

                    <div className="">
                        <legend className="text-xs font-medium">Photo URL</legend>
                        <input
                            type="url"
                            className="border pl-3 text-sm py-2 rounded-sm mt-2 w-full"
                            placeholder="Enter your photo url"
                            {...register("photoURL", { required: "photoURL is required" })} />
                        {errors.photoURL && <p className='text-red-500 text-xs mt-0'>{errors.photoURL.message}</p>}
                    </div>

                    <div className="w-full relative">
                        <legend className="text-xs font-medium ">Password</legend>
                        <input
                            type={isShowPassword ? "text" : "password"}
                            className="border pl-3 text-sm py-2 rounded-sm mt-2 w-full"
                            placeholder="Enter your password"
                            {...register("password", { required: "Password is required" })} />
                        {
                            isShowPassword ? <FaEye
                                onClick={() => setIsShowPassword(!isShowPassword)}
                                className='absolute top-8.5 right-3 cursor-pointer' /> :
                                <FaEyeSlash
                                    onClick={() => setIsShowPassword(!isShowPassword)}
                                    className='absolute top-8.5 right-3 cursor-pointer' />
                        }

                        {errors.password && <p className='text-red-500 text-xs'>{errors.password.message}</p>}
                    </div>
                    {/* <button className='btn bg-slate-800 text-base-100 w-full'>Login</button> */}
                    <Button
                        type='submit'
                        className='bg-[#1C2B4C] text-base-100 w-full'>SignUp</Button>

                </form>

                <p className='text-center'>or</p>
                <Button 
                onClick={handleGoogleSignIn}
                className='bg-[#1C2B4C] text-base-100 w-full'><FcGoogle />Google</Button>
            </div>
        </div>
    );
};

export default SignUpPage;