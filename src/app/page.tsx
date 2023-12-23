import Hero from "./modules/hero/hero"
import Navbar from "./modules/navbar/navbar"
import Product from "./modules/product/product"

export default function Home() {
  const data = [
    {
      href: "/home",
      label: "Home"
    },
    {
      href: "/contact",
      label: "Contact"
    },
    {
      href: "/about",
      label: "About"
    },
    {
      href: "/sign-up",
      label: "Sign Up"
    }
  ]
  return (
    <>
      <Navbar data={data} />
      <Hero />
      <Product />
    </>
  )
}
