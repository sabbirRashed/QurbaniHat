import Image from 'next/image';
import Link from 'next/link';
import Avatar from '@/assets/user-image.png';
import logo from '@/assets/QurbaniHat_logo.png'

const Navbar = () => {
    const links = <>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/all-animals'}>All-animals</Link></li>
        <li><Link href={'/about'}>About</Link></li>
        <li><Link href={'/contact-us'}>Contact Us</Link></li>
    </>

    return (
        <div>
            <nav className="hidden md:flex   bg-primary text-white pt-2 pb-2 px-8">
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


            {/* mobile device nav */}
            <div>
                <header className='flex mx-auto md:hidden justify-between items-center bg-primary text-white py-1 px-4'>
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
                        <Link href={'signin'}><button>Login</button></Link>
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
            </div>
        </div>
    );
};

export default Navbar;