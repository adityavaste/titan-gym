import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ClientWrapper from '@/components/ClientWrapper'

export default function About() {
  return (
    <>
      <Navbar />
      <ClientWrapper />

      <section className="min-h-[40vh] md:min-h-[50vh] flex items-center relative overflow-hidden pt-16 md:pt-20">
        <img src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="About" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(135deg, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.75) 100%)' }} />
        <div className="container-custom relative z-[2]">
          <div className="max-w-[700px]">
            <p className="text-[0.75rem] sm:text-[1rem] font-medium text-[#e63946] uppercase tracking-[2px] mb-4">Who We Are</p>
            <h1 className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] font-extrabold mb-3">About Titan Fitness</h1>
            <p className="text-[0.9rem] sm:text-[1.1rem] text-[#b0b0b0] max-w-[600px]">Building stronger bodies and stronger communities since 2016.</p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="reveal">
              <h2 className="text-[1.5rem] md:text-[2rem] font-bold mb-4">Our Mission</h2>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] mb-4">To empower every individual to achieve their highest physical and mental potential through world-class fitness programs, expert guidance, and a supportive community.</p>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">We believe fitness is not just about how you look, it is about how you feel, perform, and live. Our mission is to make fitness accessible, enjoyable, and sustainable for everyone.</p>
            </div>
            <img src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Mission" className="rounded-2xl w-full h-[180px] md:h-[400px] object-cover reveal" />
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-[#141414]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center content-grid-reverse">
            <div className="reveal">
              <h2 className="text-[1.5rem] md:text-[2rem] font-bold mb-4">Our Vision</h2>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] mb-4">To become the most trusted fitness brand in the world, known for transforming lives and setting the gold standard for gym experiences.</p>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">We envision a future where every city has a Titan Fitness center, and every member leaves feeling stronger, healthier, and more confident than when they walked in.</p>
            </div>
            <img src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Vision" className="rounded-2xl w-full h-[180px] md:h-[400px] object-cover reveal" />
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="reveal">
              <h2 className="text-[1.5rem] md:text-[2rem] font-bold mb-4">Our Story</h2>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] mb-4">Titan Fitness was founded in 2016 by a group of passionate athletes who believed the gym experience could be so much more than just lifting weights. What started as a small local gym has grown into a thriving fitness community with over 5,000 members.</p>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">Over the past decade, we have expanded our facilities, invested in cutting-edge equipment, and built a team of world-class trainers. Every brick we laid was with the member in mind.</p>
            </div>
            <img src="https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Story" className="rounded-2xl w-full h-[180px] md:h-[400px] object-cover reveal" />
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-[#141414]">
        <div className="container-custom">
          <div className="section-header reveal">
            <h2>Our Achievements</h2>
            <p>Milestones that define our journey to excellence.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="glass-card text-center py-6 md:py-8 reveal">
              <div className="text-[1.8rem] md:text-[2.5rem] text-[#e63946] mb-3"><i className="fas fa-trophy"></i></div>
              <h3 className="text-[1.3rem] md:text-[1.5rem] font-bold mb-1">50+</h3>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.9rem]">Awards Won</p>
            </div>
            <div className="glass-card text-center py-6 md:py-8 reveal">
              <div className="text-[1.8rem] md:text-[2.5rem] text-[#e63946] mb-3"><i className="fas fa-medal"></i></div>
              <h3 className="text-[1.3rem] md:text-[1.5rem] font-bold mb-1">100+</h3>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.9rem]">Competition Winners</p>
            </div>
            <div className="glass-card text-center py-6 md:py-8 reveal">
              <div className="text-[1.8rem] md:text-[2.5rem] text-[#e63946] mb-3"><i className="fas fa-star"></i></div>
              <h3 className="text-[1.3rem] md:text-[1.5rem] font-bold mb-1">4.9</h3>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.9rem]">Average Rating</p>
            </div>
            <div className="glass-card text-center py-6 md:py-8 reveal">
              <div className="text-[1.8rem] md:text-[2.5rem] text-[#e63946] mb-3"><i className="fas fa-heart"></i></div>
              <h3 className="text-[1.3rem] md:text-[1.5rem] font-bold mb-1">10K+</h3>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.9rem]">Lives Transformed</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20">
        <div className="container-custom">
          <div className="section-header reveal">
            <h2>Why Members Trust Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="glass-card text-center reveal">
              <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center mx-auto mb-5 text-[1.5rem] md:text-[1.8rem] text-[#e63946]" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.15), rgba(230,57,70,0.05))', border: '1px solid rgba(230,57,70,0.2)' }}>
                <i className="fas fa-award"></i>
              </div>
              <h3 className="text-[1.1rem] md:text-[1.25rem] font-semibold mb-2.5">Certified Excellence</h3>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">All trainers are internationally certified and regularly updated with the latest techniques.</p>
            </div>
            <div className="glass-card text-center reveal">
              <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center mx-auto mb-5 text-[1.5rem] md:text-[1.8rem] text-[#e63946]" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.15), rgba(230,57,70,0.05))', border: '1px solid rgba(230,57,70,0.2)' }}>
                <i className="fas fa-hand-holding-heart"></i>
              </div>
              <h3 className="text-[1.1rem] md:text-[1.25rem] font-semibold mb-2.5">Member First</h3>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">Every decision we make is guided by what is best for our members health and experience.</p>
            </div>
            <div className="glass-card text-center reveal">
              <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center mx-auto mb-5 text-[1.5rem] md:text-[1.8rem] text-[#e63946]" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.15), rgba(230,57,70,0.05))', border: '1px solid rgba(230,57,70,0.2)' }}>
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="text-[1.1rem] md:text-[1.25rem] font-semibold mb-2.5">Proven Results</h3>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">Our programs are backed by science and proven by thousands of success stories.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.15), rgba(10,10,10,0.9))' }} />
        <div className="container-custom relative z-[1]">
          <div className="reveal">
            <h2 className="text-[1.5rem] md:text-[2.5rem] font-bold mb-4">Be Part of Our Story</h2>
            <p className="text-[#b0b0b0] text-[0.9rem] md:text-[1.1rem] mb-8 max-w-[600px] mx-auto">Join the Titan Fitness family and start writing your own success story today.</p>
            <a href="/contact" className="btn-primary btn-large">Join Now</a>
          </div>
        </div>
      </section>

      <Footer />
      <button className="scroll-top" aria-label="Scroll to top"><i className="fas fa-arrow-up"></i></button>
    </>
  )
}
