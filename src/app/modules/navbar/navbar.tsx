'use client'
import Link from "next/link";
import './navbar.scss'
import Image from "next/image";
import SearchBar from "../searchBar/searchBar";
import { Heart } from '@styled-icons/ionicons-outline/Heart';
import { ShoppingCart } from '@styled-icons/feather/ShoppingCart';
export default function Navbar({ data }: { data: NavLink[] }) {

    return (
        <div className="navbar">
            <Link href="/">
                <Image
                    src="/assets/logo.svg"
                    width={118}
                    height={24}
                    alt="Picture of the Logo"
                />
            </Link>
            <div className="navbar-links">
                <ul>
                    {
                        data.map((link) => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="navbar-right-panel">
                <SearchBar />
                <Heart width={30} height={30} />
                <ShoppingCart width={30} height={30} />
            </div>
        </div >
    )

}