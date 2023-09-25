import Link from "next/link";
import React from "react";

function Navbar(){
    const navItems = [
        {label: 'Home', path: '/'},
        {label: 'Contador', path: '/contador'},
        {label: 'About', path: '/sobre'},
        {label: 'Posts', path: '/posts'}
    ]

    return (
        <nav className="bg-black p-4">
            <ul className="flex space-x-4">
                {navItems.map((item, index) => (
                    <li key={index}>
                        <Link className="hover:bg-gray-400 p-2" href={item.path}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar;