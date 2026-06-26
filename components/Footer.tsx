import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <i className="fas fa-dumbbell logo-icon"></i>
              <span>Titan Fitness</span>
            </div>
            <p>Transform your body and mind at the premier fitness destination. We are committed to helping you reach your peak performance.</p>
            <div className="socials">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/#plans">Membership</Link></li>
              <li><Link href="/#programs">Programs</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Programs</h4>
            <ul>
              <li><Link href="/weightlifting">Weightlifting</Link></li>
              <li><Link href="/cardio">Cardio</Link></li>
              <li><Link href="/yoga">Yoga</Link></li>
              <li><Link href="/zumba">Zumba</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul className="contact-info">
              <li><i className="fas fa-location-dot"></i><span>123 Fitness Street, Downtown, NY 10001</span></li>
              <li><i className="fas fa-phone"></i><span>+1 (555) 123-4567</span></li>
              <li><i className="fas fa-envelope"></i><span>info@titanfitness.com</span></li>
            </ul>
            <h4 style={{ marginTop: '24px' }}>Newsletter</h4>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email" required />
              <button type="submit" className="btn btn-primary"><i className="fas fa-paper-plane"></i></button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>2026 Titan Fitness Gym. All rights reserved.</p>
          <p>Designed with passion for fitness.</p>
        </div>
      </div>
    </footer>
  )
}
