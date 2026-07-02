"use client"
import { Button, Input, Label, TextArea } from '@heroui/react';
import React from 'react';
import { BsTelephone } from 'react-icons/bs';
import { IoMdStopwatch } from 'react-icons/io';
import { IoLocationOutline, IoLogoWhatsapp } from 'react-icons/io5';
import { TfiEmail } from 'react-icons/tfi';
import { toast } from 'react-toastify';

const ContactPage = () => {

    const handleContactInfo = (e)=>{
        e.preventDefault();

        const form = e.currentTarget
        const formData = new FormData(form);
        const userData = Object.fromEntries(formData.entries());

        // console.log(userData, "contactInfo");
        form.reset();

        toast.success("send successfully",{
            autoClose: 2000
        })
    }
    return (
        <div className='min-h-[80vh] w-11/12 md:w-9/12 mx-auto mt-10 md:mt-20 flex flex-col md:flex-row justify-between gap-10 md:gap-25 flex-1 '>
            <div className='flex-1'>
                <h2 className='text-2xl md:text-3xl font-bold text-primary'>Contact Us</h2>
                <h3 className='text-lg md:text-xl font-semibold text-primary mt-4 '>We're Here to Help</h3>
                <p className='mt-2 text-sm md:max-w-120'>Have questions about buying cattle, becoming a seller, booking a visit, or placing an order? Our support team is ready to assist you.</p>

                <div className='mt-6'>
                    <h2 className='text-lg md:text-xl font-bold text-primary'>Contact Information</h2>
                    <div className='space-y-4 md:space-y-6 mt-2'>
                        <div className='space-y-1'>
                            <h2 className='font-bold text-primary flex items-center'><IoLocationOutline className='text-xl' />Address</h2>
                            <p className=''>Sirajgonj, Bangladesh</p>
                        </div>

                        <div className='space-y-1'>
                            <h2 className='font-bold text-primary flex items-center gap-1'><BsTelephone className='text-lg' />Phone</h2>
                            <p>+88017XXXXXXXX</p>
                        </div>

                        <div className='space-y-1'>
                            <h2 className='font-bold text-primary flex items-center gap-1'><TfiEmail className='text-lg' />Email</h2>
                            <p>qurbanihat@gmail.com</p>
                        </div>

                        <div className='space-y-1'>
                            <h2 className='font-bold text-primary flex items-center'><IoLogoWhatsapp className='text-xl' />WhatsApp</h2>
                            <p>+88017XXXXXXXX</p>
                        </div>

                        <div className='space-y-1'>
                            <h2 className='font-bold text-primary flex items-center'><IoMdStopwatch className='text-xl' />Support Hours</h2>
                            <p className='text-sm md:text-base'>Saturday : Thursday: 9:00 AM - 9:00 PM</p>
                            <p className='text-sm md:text-base'>Friday : 3:00 PM - 9:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>

            <form 
            onSubmit={handleContactInfo}
            className="flex justify-center  flex-col gap-4  h-150 border border-gray-300 bg-[#e0ceb6] p-6 xl:p-20 rounded-3xl  shadow-2xl flex-1 ">
                <div className='space-y-4 md:space-y-6'>
                    <div className='flex md:flex-col xl:flex-row justify-between items-center gap-6 xl:gap-10'>
                        <div className="flex flex-col flex-1 gap-1 md:w-full">
                            <Label htmlFor="first_name">First name</Label>
                            <Input id="first_name" name='first_name' placeholder="John " type="text" className="w-full text-xs md:text-sm" required />
                        </div>

                        <div className="flex flex-col flex-1 gap-1 md:w-full">
                            <Label htmlFor="last_name">Last name</Label>
                            <Input id="last_name" name='last_name' placeholder="Carter" type="text" className="w-full text-xs md:text-sm" required />
                        </div>

                    </div>

                    <div className='flex md:flex-col xl:flex-row justify-between items-center gap-6 xl:gap-10'>
                        <div className="flex flex-col gap-1 w-full">
                            <Label htmlFor="input-type-email">Email</Label>
                            <Input id="input-type-email" name='email' placeholder="jane@example.com" type="email"
                                className="w-full text-xs md:text-sm" />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <Label htmlFor="phone">Phone</Label>
                            <Input id="phone" name='number' placeholder='+88017XXXXXXXX' type="tel"
                                className="w-full text-xs md:text-sm" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <Label htmlFor="input-type-password">Message</Label>
                        <TextArea
                            aria-label="Quick project update"
                            className="h-32 w-full text-xs md:text-sm"
                            placeholder="write your message here"
                            name='message'
                        />
                    </div>
                    <Button type='submit' className='w-full bg-secondary '>Send</Button>

                </div>
            </form>
        </div>
    );
};

export default ContactPage;