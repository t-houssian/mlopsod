import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar container">
      <Link href="/" className="logo">
        <Image
          src="/logo.jpg"
          alt="MLOps OD Logo"
          width={48}
          height={48}
          priority
        />
      </Link>

      {/* Hamburger icon */}
      <button
        className="hamburger"
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Nav links */}
      <div className={`nav-links ${open ? 'active' : ''}`}>
        <Link href="/about" onClick={() => setOpen(false)}>About</Link>
        <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
        <Link href="/bio" onClick={() => setOpen(false)}>Bio</Link>
        <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
      </div>
    </nav>
  )
}
