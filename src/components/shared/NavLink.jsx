'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children, isBottomNav }) => {

    const pathName = usePathname();
    const isActive = pathName === href;

    return (
        <div>
            <Link
                href={href}
                className={`block ${isBottomNav? `${isActive? "bg-gray-400 text-white": "bg-gray-50 text-primary"}` : 
                `${isActive? "border-b-2 border-white" : ""}`}`}>
                {children}
            </Link>
        </div>
    );
};

export default NavLink;