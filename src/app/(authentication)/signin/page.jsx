"use client"
import { Button, Input, Label, TextField } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import logo from '@/assets/QurbaniHat_logo.png'

const SigninPage = () => {

    const [isShowPassword, setIsShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLoginForm = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        console.log("form submited data:", formData, userData);
    }


    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center '>
            <div className='p-8 md:p-8 rounded-xl bg-white border border-[#1c2b4c3d] mx-4 w-sm '>
                <Image src={logo}
                    alt='logo'
                    width={70}
                    height={70}
                    className='mx-auto'></Image>
                <h2 className='font-bold text-xl text-center border-b border-b-base-300 pb-2  text-primary'>Login your account</h2>

                <form onSubmit={handleSubmit(handleLoginForm)}
                    className='mt-10 space-y-6'>


                    <div className="">
                        <legend className="text-xs font-medium">Your Email</legend>
                        <input
                            type="email"
                            className="border pl-3 text-sm py-2 rounded-sm mt-2 w-full"
                            placeholder="Enter your email address"
                            {...register("email", { required: "Email is required" })} />
                        {errors.email && <p className='text-red-500 text-xs mt-0'>{errors.email.message}</p>}
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
                        className='bg-[#1C2B4C] text-base-100 w-full'>Login</Button>

                </form>
                <p className='mt-4 text-sm text-center'>Don't have an account? <Link href={'/register'} className='text-red-500'>Register</Link></p>
            </div>
        </div>
    );
};

export default SigninPage;