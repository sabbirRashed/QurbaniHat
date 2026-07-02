"use client"
import { authClient } from '@/lib/auth-client';
import { Avatar, Button, Card, Chip, Separator } from '@heroui/react';
import React from 'react';
import { CiEdit } from 'react-icons/ci';

const UserInfo = () => {

    const { data: session, isPending, } = authClient.useSession();

    const user = session?.user;

    if (user) {
        const { name, email, image, phone } = user;
        console.log(phone);
    }

    return (
        <div className='w-11/12 md:w-9/12 mx-auto py-12'>
            <h2 className='text-3xl font-bold text-primary'>My Profile</h2>

            <Card className='p-4 md:p-8 mt-6 rounded-xl space-y-6'>

                <div className='text-right'><Button className=' bg-secondary text-white'><CiEdit />Edit</Button></div>

                {
                    user ? <>
                        {/* header */}
                        <div className='flex flex-col md:flex-row  md:items-center md:gap-5 text-center md:text-left'>
                            <Avatar className='w-24 h-24 md:w-46 md:h-46 rounded-full md:rounded-xl mx-auto md:mx-0 relative'>
                                <Avatar.Image alt='Sabbir Rahman' src={user?.image} />
                                <Avatar.Fallback className='text-2xl font-bold  text-secondary'>SR</Avatar.Fallback>
                                <button className='absolute top-33 right-2 bg-white rounded-full p-2 border border-gray-300 cursor-pointer'><CiEdit className='text-2xl' /></button>
                            </Avatar>

                            <div className=''>
                                <h3 className='text-3xl font-bold text-primary mt-4'>{user?.name}</h3>
                                <p>{user?.email}</p>
                                <Chip
                                    color="success"
                                    className="mt-2"
                                >
                                    {user?.role}
                                </Chip>
                            </div>

                        </div>

                        <Separator className="my-4" />

                        <div>
                            <h2 className='text-2xl font-bold text-primary'>Personal Information</h2>
                            <div className='text-gray-500 space-y-4 grid grid-cols-1 md:grid-cols-2 md:not-only:gap-4 mt-6'>

                                <div>
                                    <h2 className='font-bold text-primary'>First Name</h2>
                                    <p>---</p>
                                </div>

                                <div>
                                    <h2 className='font-bold text-primary'>Last Name</h2>
                                    <p>---</p>
                                </div>

                                <div>
                                    <h2 className='font-bold text-primary'>Email</h2>
                                    <p>{user?.email}</p>
                                </div>

                                <div>
                                    <h2 className='font-bold text-primary'>Mobile Number</h2>
                                    <p>017xxxxxxx</p>
                                </div>

                                <div>
                                    <h2 className='font-bold text-primary'>Date of birth</h2>
                                    <p>---</p>
                                </div>

                                <div>
                                    <h2 className='font-bold text-primary'>Gender</h2>
                                    <p>---</p>
                                </div>
                            </div>
                        </div>
                    </> : ""
                }


            </Card>
        </div>
    );
};

export default UserInfo;