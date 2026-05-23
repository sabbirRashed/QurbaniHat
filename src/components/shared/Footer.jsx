import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import logo from '@/assets/QurbaniHat_logo.png'


const Footer = () => {
    return (
        <footer className="bg-[#1C2B4C] text-white mt-8 md:mt-16 mb-10 md:mb-0">
            <div className="max-w-400 mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* {Brand Section} */}
                <div>
                    <div className='flex flex-col justify-center items-center'>
                        <Image
                            src={logo}
                            alt='logo'
                            width={100}
                            height={100}></Image>
                        <h2 className='text-[#445375] font-bold text-2xl '>QurbaniHat</h2>
                    </div>
                </div>

                {/* About Section */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">About Us</h2>
                    <p className="text-sm leading-7 text-gray-300">
                        QurbaniHat helps people easily browse, compare, and book healthy
                        cows and goats for Qurbani. We connect buyers with trusted sellers
                        to make the Qurbani experience simple, safe, and convenient.
                    </p>
                </div>

                {/* Contact Info */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">Contact Info</h2>

                    <div className="space-y-3 text-gray-300 text-sm">
                        <p>Email: info@example.com</p>
                        <p>Phone: +880 1234-567890</p>
                        <p>Location: Dhaka, Bangladesh</p>
                    </div>
                </div>

                {/* Social Links */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">Social Links</h2>

                    <div className="flex items-center gap-4 mt-4">
                        <Link
                            href="#"
                            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover-action transition"
                        >
                            <FaFacebookF />
                        </Link>

                        <Link
                            href="#"
                            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover-action transition"
                        >
                            <FaInstagram />
                        </Link>

                        <Link
                            href="#"
                            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover-action transition"
                        >
                            <FaLinkedinIn />
                        </Link>

                        <Link
                            href="#"
                            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover-action"
                        >
                            <FaYoutube />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-white/10 py-4 text-center text-sm text-gray-400">
                © 2026 Your Company Name. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;