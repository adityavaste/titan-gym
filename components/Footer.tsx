import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-16 md:pt-20 pb-5 md:pb-6 border-t border-[rgba(255,255,255,0.08)]">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-8 md:gap-12 mb-10 md:mb-12">
          <div>
            <div className="flex items-center gap-2.5 text-[1.25rem] md:text-[1.5rem] font-bold text-[#f1f1f1] mb-4">
              <i className="fas fa-dumbbell text-[#e63946] text-[1.4rem] md:text-[1.8rem]"></i>
              <span>Titan Fitness</span>
            </div>
            <p className="text-[#b0b0b0] text-[0.9rem] md:text-[0.95rem] mb-5 max-w-[280px]">Transform your body and mind at the premier fitness destination. We are committed to helping you reach your peak performance.</p>
            <div className="flex gap-3">
              <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div>
            <h4 className="text-[1rem] md:text-[1.1rem] font-semibold mb-4 md:mb-5 text-[#f1f1f1]">Quick Links</h4>
            <ul className="space-y-2.5">
              <li><Link href="/" className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] transition-colors duration-300 hover:text-[#e63946]">Home</Link></li>
              <li><Link href="/about" className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] transition-colors duration-300 hover:text-[#e63946]">About Us</Link></li>
              <li><Link href="/contact" className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] transition-colors duration-300 hover:text-[#e63946]">Contact</Link></li>
              <li><Link href="/#plans" className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] transition-colors duration-300 hover:text-[#e63946]">Membership</Link></li>
              <li><Link href="/#programs" className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] transition-colors duration-300 hover:text-[#e63946]">Programs</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[1rem] md:text-[1.1rem] font-semibold mb-4 md:mb-5 text-[#f1f1f1]">Programs</h4>
            <ul className="space-y-2.5">
              <li><Link href="/weightlifting" className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] transition-colors duration-300 hover:text-[#e63946]">Weightlifting</Link></li>
              <li><Link href="/cardio" className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] transition-colors duration-300 hover:text-[#e63946]">Cardio</Link></li>
              <li><Link href="/yoga" className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] transition-colors duration-300 hover:text-[#e63946]">Yoga</Link></li>
              <li><Link href="/zumba" className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] transition-colors duration-300 hover:text-[#e63946]">Zumba</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[1rem] md:text-[1.1rem] font-semibold mb-4 md:mb-5 text-[#f1f1f1]">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">
                <i className="fas fa-location-dot text-[#e63946] mt-1 text-[0.95rem]"></i>
                <span>123 Fitness Street, Downtown, NY 10001</span>
              </li>
              <li className="flex items-start gap-3 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">
                <i className="fas fa-phone text-[#e63946] mt-1 text-[0.95rem]"></i>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">
                <i className="fas fa-envelope text-[#e63946] mt-1 text-[0.95rem]"></i>
                <span>info@titanfitness.com</span>
              </li>
            </ul>
            <h4 className="text-[1rem] md:text-[1.1rem] font-semibold mt-5 md:mt-6 mb-3 text-[#f1f1f1]">Newsletter</h4>
            <form className="newsletter-form flex gap-2">
              <input type="email" placeholder="Your email" required className="form-input flex-1 text-[0.85rem] md:text-[0.9rem] px-3 py-2.5 md:px-4 md:py-3" />
              <button type="submit" className="btn-primary px-3 py-2.5 md:px-5 md:py-3"><i className="fas fa-paper-plane"></i></button>
            </form>
          </div>
        </div>
        <div className="border-t border-[rgba(255,255,255,0.08)] pt-4 md:pt-6 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-[#777] text-[0.8rem] md:text-[0.9rem]">2026 Titan Fitness Gym. All rights reserved.</p>
          <p className="text-[#777] text-[0.8rem] md:text-[0.9rem]">Designed with passion for fitness.</p>
        </div>
      </div>
    </footer>
  )
}
