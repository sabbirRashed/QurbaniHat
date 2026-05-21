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
            <nav className="w-11/12 max-w-350 mx-auto flex justify-between items-center bg-primary text-white py-1 px-8 rounded-full mt-2">
                <div className='flex flex-col justify-center items-center'>
                    <Image 
                    src={logo}
                    alt='logo'
                    width={60}
                    height={60}></Image>
                    <h2 className='text-[#445375] font-bold'>QurbaniHat</h2>
                </div>
                <ul className='flex justify-between items-center gap-6'>
                    {links}
                </ul>
                <div className='flex justify-between items-center gap-2'>
                    <Image
                        src={Avatar}
                        alt='User'
                        width={40}
                        height={40}>

                    </Image>
                    <Link href={'signin'}><button>Login</button></Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;