import React from 'react';
import { BsTelephone } from 'react-icons/bs';
import { IoMdStopwatch } from 'react-icons/io';
import { IoLocationOutline, IoLogoWhatsapp } from 'react-icons/io5';
import { TfiEmail } from 'react-icons/tfi';

const ContactPage = () => {
    return (
        <div className='min-h-[80vh] w-11/12 md:w-9/12 mx-auto mt-10 md:mt-20'>
            <h2 className='text-2xl md:text-3xl font-bold text-primary'>Contact Us</h2>
            <h3 className='text-lg md:text-xl font-semibold text-primary mt-4'>We're Here to Help</h3>
            <p className='mt-2 text-sm md:text-base'>Have questions about buying cattle, becoming a seller, booking a visit, or placing an order? Our support team is ready to assist you.</p>

            <div className='mt-6'>
                <h2 className='text-lg md:text-xl font-bold text-primary'>Contact Information</h2>
                <div className='space-y-4 mt-2'>
                    <div>
                        <h2 className='font-bold text-primary flex items-center'><IoLocationOutline className='text-xl' />Address</h2>
                        <p className=''>Sirajgonj, Bangladesh</p>
                    </div>

                    <div>
                        <h2 className='font-bold text-primary flex items-center gap-1'><BsTelephone className='text-lg' />Phone</h2>
                        <p>+88017XXXXXXXX</p>
                    </div>

                    <div>
                        <h2 className='font-bold text-primary flex items-center gap-1'><TfiEmail className='text-lg' />Email</h2>
                        <p>qurbanihat@gmail.com</p>
                    </div>

                    <div>
                        <h2 className='font-bold text-primary flex items-center'><IoLogoWhatsapp className='text-xl' />WhatsApp</h2>
                        <p>+88017XXXXXXXX</p>
                    </div>

                    <div>
                        <h2 className='font-bold text-primary flex items-center'><IoMdStopwatch className='text-xl' />Support Hours</h2>
                        <p className='text-sm md:text-base'>Saturday : Thursday: 9:00 AM - 9:00 PM</p>
                        <p className='text-sm md:text-base'>Friday : 3:00 PM - 9:00 PM</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;