import Hero from "./modules/Hero/Hero"
import Navbar from "./modules/Navbar/Navbar"

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
    </>
  )
}
