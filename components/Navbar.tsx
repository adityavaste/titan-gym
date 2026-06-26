'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const isActive = (path: string) => pathname === path ? 'active' : ''

  return (
    <>
      <nav className="navbar fixed top-0 left-0 w-full z-[1000] py-3 md:py-4 transition-all duration-300 bg-transparent">
        <div className="container-custom flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 text-[1.25rem] md:text-[1.5rem] font-bold text-[#f1f1f1]">
            <i className="fas fa-dumbbell text-[#e63946] text-[1.4rem] md:text-[1.8rem]"></i>
            <span>Titan Fitness</span>
          </Link>
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link href="/" className={`text-[0.85rem] xl:text-[0.95rem] font-medium text-[#b0b0b0] transition-colors duration-300 relative hover:text-[#e63946] ${isActive('/')}`}>Home</Link>
            <Link href="/about" className={`text-[0.85rem] xl:text-[0.95rem] font-medium text-[#b0b0b0] transition-colors duration-300 relative hover:text-[#e63946] ${isActive('/about')}`}>About Us</Link>
            <Link href="/weightlifting" className={`text-[0.85rem] xl:text-[0.95rem] font-medium text-[#b0b0b0] transition-colors duration-300 relative hover:text-[#e63946] ${isActive('/weightlifting')}`}>Weightlifting</Link>
            <Link href="/cardio" className={`text-[0.85rem] xl:text-[0.95rem] font-medium text-[#b0b0b0] transition-colors duration-300 relative hover:text-[#e63946] ${isActive('/cardio')}`}>Cardio</Link>
            <Link href="/yoga" className={`text-[0.85rem] xl:text-[0.95rem] font-medium text-[#b0b0b0] transition-colors duration-300 relative hover:text-[#e63946] ${isActive('/yoga')}`}>Yoga</Link>
            <Link href="/zumba" className={`text-[0.85rem] xl:text-[0.95rem] font-medium text-[#b0b0b0] transition-colors duration-300 relative hover:text-[#e63946] ${isActive('/zumba')}`}>Zumba</Link>
            <Link href="/contact" className={`text-[0.85rem] xl:text-[0.95rem] font-medium text-[#b0b0b0] transition-colors duration-300 relative hover:text-[#e63946] ${isActive('/contact')}`}>Contact</Link>
            <Link href="/contact" className="btn-primary">Join Now</Link>
          </div>
          <button className="mobile-menu-btn lg:hidden flex flex-col items-center justify-center w-10 h-10 p-2 rounded-lg bg-[rgba(255,255,255,0.05)]" aria-label="Open menu">
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
        </div>
      </nav>

      <div className="mobile-overlay"></div>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          <Link href="/" className="flex items-center gap-2 text-[1.1rem] md:text-[1.2rem] font-bold text-[#f1f1f1]">
            <i className="fas fa-dumbbell text-[#e63946] text-[1.4rem] md:text-[1.5rem]"></i>
            <span>Titan Fitness</span>
          </Link>
          <button className="mobile-nav-close" aria-label="Close menu">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <Link href="/" className={`mobile-nav-item ${isActive('/')}`}><i className="fas fa-home w-6 text-center text-[0.95rem]"></i>Home</Link>
        <Link href="/about" className={`mobile-nav-item ${isActive('/about')}`}><i className="fas fa-info-circle w-6 text-center text-[0.95rem]"></i>About Us</Link>
        <Link href="/weightlifting" className={`mobile-nav-item ${isActive('/weightlifting')}`}><i className="fas fa-dumbbell w-6 text-center text-[0.95rem]"></i>Weightlifting</Link>
        <Link href="/cardio" className={`mobile-nav-item ${isActive('/cardio')}`}><i className="fas fa-heart-pulse w-6 text-center text-[0.95rem]"></i>Cardio</Link>
        <Link href="/yoga" className={`mobile-nav-item ${isActive('/yoga')}`}><i className="fas fa-spa w-6 text-center text-[0.95rem]"></i>Yoga</Link>
        <Link href="/zumba" className={`mobile-nav-item ${isActive('/zumba')}`}><i className="fas fa-music w-6 text-center text-[0.95rem]"></i>Zumba</Link>
        <Link href="/contact" className={`mobile-nav-item ${isActive('/contact')}`}><i className="fas fa-envelope w-6 text-center text-[0.95rem]"></i>Contact</Link>
        <Link href="/contact" className="btn-primary w-full justify-center mt-6 py-3.5">Join Now</Link>
      </div>
    </>
  )
}
