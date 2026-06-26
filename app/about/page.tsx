import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ClientWrapper from '@/components/ClientWrapper'

export default function About() {
  return (
    <>
      <Navbar />
      <ClientWrapper />

      <section className="page-hero">
        <img src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="About" className="hero-bg" />
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">Who We Are</p>
            <h1>About Titan Fitness</h1>
            <p>Building stronger bodies and stronger communities since 2016.</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-text reveal">
              <h2>Our Mission</h2>
              <p>To empower every individual to achieve their highest physical and mental potential through world-class fitness programs, expert guidance, and a supportive community.</p>
              <p>We believe fitness is not just about how you look, it is about how you feel, perform, and live. Our mission is to make fitness accessible, enjoyable, and sustainable for everyone.</p>
            </div>
            <img src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Mission" className="reveal" />
          </div>
        </div>
      </section>

      <section className="content-section alt">
        <div className="container">
          <div className="content-grid reverse">
            <div className="content-text reveal">
              <h2>Our Vision</h2>
              <p>To become the most trusted fitness brand in the world, known for transforming lives and setting the gold standard for gym experiences.</p>
              <p>We envision a future where every city has a Titan Fitness center, and every member leaves feeling stronger, healthier, and more confident than when they walked in.</p>
            </div>
            <img src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Vision" className="reveal" />
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-text reveal">
              <h2>Our Story</h2>
              <p>Titan Fitness was founded in 2016 by a group of passionate athletes who believed the gym experience could be so much more than just lifting weights. What started as a small local gym has grown into a thriving fitness community with over 5,000 members.</p>
              <p>Over the past decade, we have expanded our facilities, invested in cutting-edge equipment, and built a team of world-class trainers. Every brick we laid was with the member in mind.</p>
            </div>
            <img src="https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Story" className="reveal" />
          </div>
        </div>
      </section>

      <section className="content-section alt">
        <div className="container">
          <div className="section-header reveal">
            <h2>Our Achievements</h2>
            <p>Milestones that define our journey to excellence.</p>
          </div>
          <div className="achievements-grid">
            <div className="glass-card achievement-card reveal">
              <div className="icon"><i className="fas fa-trophy"></i></div>
              <h3>50+</h3>
              <p>Awards Won</p>
            </div>
            <div className="glass-card achievement-card reveal">
              <div className="icon"><i className="fas fa-medal"></i></div>
              <h3>100+</h3>
              <p>Competition Winners</p>
            </div>
            <div className="glass-card achievement-card reveal">
              <div className="icon"><i className="fas fa-star"></i></div>
              <h3>4.9</h3>
              <p>Average Rating</p>
            </div>
            <div className="glass-card achievement-card reveal">
              <div className="icon"><i className="fas fa-heart"></i></div>
              <h3>10K+</h3>
              <p>Lives Transformed</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="section-header reveal">
            <h2>Why Members Trust Us</h2>
          </div>
          <div className="features-grid">
            <div className="glass-card feature-card reveal">
              <div className="icon"><i className="fas fa-award"></i></div>
              <h3>Certified Excellence</h3>
              <p>All trainers are internationally certified and regularly updated with the latest techniques.</p>
            </div>
            <div className="glass-card feature-card reveal">
              <div className="icon"><i className="fas fa-hand-holding-heart"></i></div>
              <h3>Member First</h3>
              <p>Every decision we make is guided by what is best for our members health and experience.</p>
            </div>
            <div className="glass-card feature-card reveal">
              <div className="icon"><i className="fas fa-chart-line"></i></div>
              <h3>Proven Results</h3>
              <p>Our programs are backed by science and proven by thousands of success stories.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="reveal">
            <h2>Be Part of Our Story</h2>
            <p>Join the Titan Fitness family and start writing your own success story today.</p>
            <a href="/contact" className="btn btn-primary btn-large">Join Now</a>
          </div>
        </div>
      </section>

      <Footer />
      <button className="scroll-top" aria-label="Scroll to top"><i className="fas fa-arrow-up"></i></button>
    </>
  )
}
