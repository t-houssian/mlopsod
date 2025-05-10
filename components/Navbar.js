import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="navbar container">
      <Link href="/" className="logo">
        MLOps OD
      </Link>
      <div className="nav-links">
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}
