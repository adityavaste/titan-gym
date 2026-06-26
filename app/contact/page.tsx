import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ClientWrapper from '@/components/ClientWrapper'

export default function Contact() {
  return (
    <>
      <Navbar />
      <ClientWrapper />

      <section className="min-h-[40vh] md:min-h-[50vh] flex items-center relative overflow-hidden pt-16 md:pt-20">
        <img src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Contact" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(135deg, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.75) 100%)' }} />
        <div className="container-custom relative z-[2]">
          <div className="max-w-[700px]">
            <p className="text-[0.75rem] sm:text-[1rem] font-medium text-[#e63946] uppercase tracking-[2px] mb-4">Get in Touch</p>
            <h1 className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] font-extrabold mb-3">Contact Us</h1>
            <p className="text-[0.9rem] sm:text-[1.1rem] text-[#b0b0b0] max-w-[600px]">Have questions? Ready to join? We are here to help you take the next step.</p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <div className="reveal">
              <h2 className="text-[1.5rem] md:text-[1.8rem] font-bold mb-6">Send Us a Message</h2>
              <form className="flex flex-col gap-4" id="contact-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" id="name" placeholder="Your Name" required className="form-input" />
                  <input type="email" id="email" placeholder="Your Email" required className="form-input" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="tel" id="phone" placeholder="Phone Number" className="form-input" />
                  <select id="subject" className="form-input">
                    <option value="">Select Subject</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="training">Personal Training</option>
                    <option value="classes">Class Information</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <textarea id="message" placeholder="Your Message" required className="form-input min-h-[140px] resize-y"></textarea>
                <button type="submit" className="btn-primary w-fit">Send Message</button>
              </form>
            </div>
            <div className="flex flex-col gap-4 md:gap-6 reveal">
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
                  <div className="flex gap-3 mt-2">
                    <a href="#" className="text-[#e63946] text-lg"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="text-[#e63946] text-lg"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="text-[#e63946] text-lg"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="text-[#e63946] text-lg"><i className="fab fa-youtube"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-[#141414]">
        <div className="container-custom">
          <div className="map-placeholder reveal">
            <i className="fas fa-map-location-dot"></i>
            <p className="text-base">Google Map Placeholder</p>
            <p className="text-[0.85rem]">123 Fitness Street, Downtown, NY 10001</p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20">
        <div className="container-custom">
          <div className="section-header reveal">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="glass-card reveal">
            <div className="faq-item border-b border-[rgba(255,255,255,0.08)]">
              <button className="faq-question">What are your membership prices?<i className="fas fa-chevron-down text-[#e63946] transition-transform duration-300"></i></button>
              <div className="faq-answer"><p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">We offer Basic ($29/month), Premium ($59/month), and Elite ($99/month) plans. Each includes different levels of access, classes, and personal training.</p></div>
            </div>
            <div className="faq-item border-b border-[rgba(255,255,255,0.08)]">
              <button className="faq-question">Can I try before I join?<i className="fas fa-chevron-down text-[#e63946] transition-transform duration-300"></i></button>
              <div className="faq-answer"><p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">Absolutely! We offer a free 3-day trial pass so you can experience our facilities and classes before committing.</p></div>
            </div>
            <div className="faq-item border-b border-[rgba(255,255,255,0.08)]">
              <button className="faq-question">Is the gym open 24/7?<i className="fas fa-chevron-down text-[#e63946] transition-transform duration-300"></i></button>
              <div className="faq-answer"><p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">Yes, our facility is open 24/7 for all members with secure keycard access. Staffed hours are 5 AM - 11 PM on weekdays.</p></div>
            </div>
            <div className="faq-item border-b border-[rgba(255,255,255,0.08)]">
              <button className="faq-question">Do you offer personal training?<i className="fas fa-chevron-down text-[#e63946] transition-transform duration-300"></i></button>
              <div className="faq-answer"><p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">Yes, we have 25+ certified personal trainers available. Premium and Elite members receive complimentary sessions included in their plan.</p></div>
            </div>
            <div className="faq-item border-b border-[rgba(255,255,255,0.08)]">
              <button className="faq-question">What should I bring to the gym?<i className="fas fa-chevron-down text-[#e63946] transition-transform duration-300"></i></button>
              <div className="faq-answer"><p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">Bring a water bottle, towel, and comfortable workout clothes. We provide lockers, showers, and towel service.</p></div>
            </div>
            <div className="faq-item border-b border-[rgba(255,255,255,0.08)]">
              <button className="faq-question">Can I freeze my membership?<i className="fas fa-chevron-down text-[#e63946] transition-transform duration-300"></i></button>
              <div className="faq-answer"><p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">Yes, you can freeze your membership for up to 3 months per year. Just contact our front desk with at least 7 days notice.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.15), rgba(10,10,10,0.9))' }} />
        <div className="container-custom relative z-[1]">
          <div className="reveal">
            <h2 className="text-[1.5rem] md:text-[2.5rem] font-bold mb-4">Ready to Transform?</h2>
            <p className="text-[#b0b0b0] text-[0.9rem] md:text-[1.1rem] mb-8 max-w-[600px] mx-auto">Drop by for a tour or send us a message. We cannot wait to welcome you to the Titan Fitness family.</p>
            <a href="/#plans" className="btn-primary btn-large">View Membership Plans</a>
          </div>
        </div>
      </section>

      <Footer />
      <button className="scroll-top" aria-label="Scroll to top"><i className="fas fa-arrow-up"></i></button>
    </>
  )
}
