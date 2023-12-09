import Link from "next/link";
import './navbar.scss'
import Image from "next/image";

interface NavLink {
    label: string;
    href: string;
}

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
                {
                    data.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                        >
                            {link.label}
                        </Link>
                    ))
                }
            </div>

            <div className="navbar-right-panel">
                <span>
                    SearchBar
                </span>
                <span>
                    Favourite
                </span>

                <span>
                    OrderCart
                </span>
            </div>
        </div>
    )

}