'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path ? 'active' : ''

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <Link href="/" className="logo">
            <i className="fas fa-dumbbell logo-icon"></i>
            <span>Titan Fitness</span>
          </Link>
          <div className="nav-links">
            <Link href="/" className={isActive('/')}>Home</Link>
            <Link href="/about" className={isActive('/about')}>About Us</Link>
            <Link href="/weightlifting" className={isActive('/weightlifting')}>Weightlifting</Link>
            <Link href="/cardio" className={isActive('/cardio')}>Cardio</Link>
            <Link href="/yoga" className={isActive('/yoga')}>Yoga</Link>
            <Link href="/zumba" className={isActive('/zumba')}>Zumba</Link>
            <Link href="/contact" className={isActive('/contact')}>Contact</Link>
            <Link href="/contact" className="btn btn-primary">Join Now</Link>
          </div>
          <button className="mobile-menu-btn" aria-label="Open menu">
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
        </div>
      </nav>

      <div className="mobile-overlay"></div>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          <Link href="/" className="logo" onClick={() => {}}>
            <i className="fas fa-dumbbell logo-icon"></i>
            <span>Titan Fitness</span>
          </Link>
          <button className="mobile-nav-close" aria-label="Close menu">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <Link href="/" className={isActive('/')}>Home</Link>
        <Link href="/about" className={isActive('/about')}>About Us</Link>
        <Link href="/weightlifting" className={isActive('/weightlifting')}>Weightlifting</Link>
        <Link href="/cardio" className={isActive('/cardio')}>Cardio</Link>
        <Link href="/yoga" className={isActive('/yoga')}>Yoga</Link>
        <Link href="/zumba" className={isActive('/zumba')}>Zumba</Link>
        <Link href="/contact" className={isActive('/contact')}>Contact</Link>
        <Link href="/contact" className="btn btn-primary">Join Now</Link>
      </div>
    </>
  )
}
