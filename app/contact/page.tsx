import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ClientWrapper from '@/components/ClientWrapper'

export default function Contact() {
  return (
    <>
      <Navbar />
      <ClientWrapper />

      <section className="page-hero">
        <img src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Contact" className="hero-bg" />
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">Get in Touch</p>
            <h1>Contact Us</h1>
            <p>Have questions? Ready to join? We are here to help you take the next step.</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="contact-grid">
            <div className="reveal">
              <h2 style={{ marginBottom: '24px', fontSize: '1.8rem' }}>Send Us a Message</h2>
              <form className="contact-form" id="contact-form">
                <div className="form-row">
                  <input type="text" id="name" placeholder="Your Name" required />
                  <input type="email" id="email" placeholder="Your Email" required />
                </div>
                <div className="form-row">
                  <input type="tel" id="phone" placeholder="Phone Number" />
                  <select id="subject">
                    <option value="">Select Subject</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="training">Personal Training</option>
                    <option value="classes">Class Information</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <textarea id="message" placeholder="Your Message" required></textarea>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
            <div className="contact-info-card reveal">
              <div className="contact-info-item">
                <i className="fas fa-location-dot"></i>
                <div>
                  <h4>Address</h4>
                  <p>123 Fitness Street, Downtown, NY 10001</p>
                </div>
              </div>
              <div className="contact-info-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="contact-info-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <p>info@titanfitness.com</p>
                </div>
              </div>
              <div className="contact-info-item">
                <i className="fas fa-clock"></i>
                <div>
                  <h4>Working Hours</h4>
                  <p>Mon - Fri: 5:00 AM - 11:00 PM</p>
                  <p>Sat - Sun: 6:00 AM - 10:00 PM</p>
                  <p>24/7 Access for Members</p>
                </div>
              </div>
              <div className="contact-info-item">
                <i className="fas fa-share-nodes"></i>
                <div>
                  <h4>Social Media</h4>
                  <p style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                    <a href="#" style={{ color: 'var(--accent)' }}><i className="fab fa-facebook-f"></i></a>
                    <a href="#" style={{ color: 'var(--accent)' }}><i className="fab fa-instagram"></i></a>
                    <a href="#" style={{ color: 'var(--accent)' }}><i className="fab fa-twitter"></i></a>
                    <a href="#" style={{ color: 'var(--accent)' }}><i className="fab fa-youtube"></i></a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section alt">
        <div className="container">
          <div className="map-placeholder reveal">
            <i className="fas fa-map-location-dot"></i>
            <p>Google Map Placeholder</p>
            <p style={{ fontSize: '0.85rem' }}>123 Fitness Street, Downtown, NY 10001</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="section-header reveal">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="glass-card reveal">
            <div className="faq-item">
              <button className="faq-question">What are your membership prices?<i className="fas fa-chevron-down"></i></button>
              <div className="faq-answer"><p>We offer Basic ($29/month), Premium ($59/month), and Elite ($99/month) plans. Each includes different levels of access, classes, and personal training.</p></div>
            </div>
            <div className="faq-item">
              <button className="faq-question">Can I try before I join?<i className="fas fa-chevron-down"></i></button>
              <div className="faq-answer"><p>Absolutely! We offer a free 3-day trial pass so you can experience our facilities and classes before committing.</p></div>
            </div>
            <div className="faq-item">
              <button className="faq-question">Is the gym open 24/7?<i className="fas fa-chevron-down"></i></button>
              <div className="faq-answer"><p>Yes, our facility is open 24/7 for all members with secure keycard access. Staffed hours are 5 AM - 11 PM on weekdays.</p></div>
            </div>
            <div className="faq-item">
              <button className="faq-question">Do you offer personal training?<i className="fas fa-chevron-down"></i></button>
              <div className="faq-answer"><p>Yes, we have 25+ certified personal trainers available. Premium and Elite members receive complimentary sessions included in their plan.</p></div>
            </div>
            <div className="faq-item">
              <button className="faq-question">What should I bring to the gym?<i className="fas fa-chevron-down"></i></button>
              <div className="faq-answer"><p>Bring a water bottle, towel, and comfortable workout clothes. We provide lockers, showers, and towel service.</p></div>
            </div>
            <div className="faq-item">
              <button className="faq-question">Can I freeze my membership?<i className="fas fa-chevron-down"></i></button>
              <div className="faq-answer"><p>Yes, you can freeze your membership for up to 3 months per year. Just contact our front desk with at least 7 days notice.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="reveal">
            <h2>Ready to Transform?</h2>
            <p>Drop by for a tour or send us a message. We cannot wait to welcome you to the Titan Fitness family.</p>
            <a href="/#plans" className="btn btn-primary btn-large">View Membership Plans</a>
          </div>
        </div>
      </section>

      <Footer />
      <button className="scroll-top" aria-label="Scroll to top"><i className="fas fa-arrow-up"></i></button>
    </>
  )
}
