import Image from 'next/image';
import Link from 'next/link';
import Avatar from '@/assets/user-image.png';
import logo from '@/assets/QurbaniHat_logo.png'
import NavLink from './NavLink';
import { Button } from '@heroui/react';


const Navbar = () => {
    const links = <>
        <li><NavLink href={'/'}>Home</NavLink></li>
        <li><NavLink href={'/all-animals'}>All-animals</NavLink></li>
        <li><NavLink href={'/about'}>About</NavLink></li>
        <li><NavLink href={'/contact-us'}>Contact Us</NavLink></li>
    </>

    return (
        <div className=' sticky top-0 z-50 bg-primary shadow-sm'>
            <nav className="hidden md:flex    text-white py-2 px-8">
                <div className='w-full max-w-350 mx-auto flex justify-between items-center'>
                    <div className='flex flex-col justify-center items-center '>
                        <Image
                            src={logo}
                            alt='logo'
                            width={45}
                            height={45}
                            className="bg-white rounded-full px-0.5 py-1.5 "></Image>
                        <span className='text-[#F8F4EE] font-bold tracking-wide '>QurbaniHat</span>
                    </div>
                    <ul className='flex justify-between items-center gap-6'>
                        {links}
                    </ul>
                    <div className='flex justify-between items-center gap-2'>
                        <Link href={'/'}
                            className='inline-block border border-white rounded-full'>
                            <Image
                                src={Avatar}
                                alt='User'
                                width={40}
                                height={40}>

                            </Image>
                        </Link>
                        <Link href={'signin'}><button>Login</button></Link>
                    </div>
                </div>
            </nav>


            {/* mobile device navbar */}
            <div className='block md:hidden'>
                <header className='flex mx-auto justify-between items-center bg-primary text-white pt-2 py-2 px-4'>
                    <div className='flex flex-col justify-center items-center '>
                        <Image
                            src={logo}
                            alt='logo'
                            width={35}
                            height={35}
                            className="bg-white rounded-full px-0.5 py-1.5 "></Image>
                        <span className='text-sm text-[#F8F4EE] font-bold tracking-wide '>QurbaniHat</span>
                    </div>

                    <div className='flex justify-between items-center gap-2'>
                        <Link href="/signin"><button>Login</button></Link>
                        <Link
                            href='/'
                            className='inline-block border border-white rounded-full'>
                            <Image
                                src={Avatar}
                                alt='User'
                                width={30}
                                height={30}>

                            </Image>
                        </Link>
                    </div>
                </header>

                <nav className="fixed bottom-0 left-0 right-0 z-50  shadow-md border-t border-gray-200">
                    <ul className='flex justify-between items-center'>
                        <li className='w-full'>
                            <NavLink
                                href={'/'}
                                isBottomNav={true}
                                className="w-full">
                                <button className="w-full hover:bg-gray-400 border-l border-gray-200 active:scale-[0.97] transition-all duration-200 text-sm font-medium py-3 cursor-pointer">Home</button>
                            </NavLink>
                        </li>
                        <li className='w-full'>
                            <NavLink
                                href={'/all-animals'}
                                isBottomNav={true}
                                className="w-full">
                                <button className="w-full hover:bg-gray-400 border-l border-gray-200 active:scale-[0.97] transition-all duration-200 text-sm font-medium py-3 cursor-pointer">All-Animals</button>
                            </NavLink>
                        </li>
                        <li className='w-full'>
                            <NavLink
                                href={'/about'}
                                isBottomNav={true}
                                className="w-full">
                                <button className="w-full hover:bg-gray-400  border-l border-gray-200 active:scale-[0.97] transition-all duration-200 text-sm font-medium py-3 cursor-pointer" >About</button>
                            </NavLink>
                        </li>
                        <li className='w-full'>
                            <NavLink
                                href={'/contact-us'}
                                isBottomNav={true}
                                className="w-full">
                                <button className="w-full hover:bg-gray-400 border-l border-gray-200 active:scale-[0.97] transition-all duration-200 text-sm font-medium py-3 cursor-pointer">Contact</button>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    );
};

export default Navbar;