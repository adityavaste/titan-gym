import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ClientWrapper from '@/components/ClientWrapper'

export default function Yoga() {
  return (
    <>
      <Navbar />
      <ClientWrapper />

      <section className="page-hero">
        <img src="https://images.pexels.com/photos/3822583/pexels-photo-3822583.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Yoga" className="hero-bg" />
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">Mind & Body</p>
            <h1>Discover the Power of Yoga</h1>
            <p>Connect your breath, body, and mind through ancient practices guided by modern expertise.</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="section-header reveal">
            <h2>Yoga Styles</h2>
          </div>
          <div className="features-grid">
            <div className="glass-card feature-card reveal">
              <div className="icon"><i className="fas fa-fire"></i></div>
              <h3>Vinyasa Flow</h3>
              <p>Dynamic sequences linking breath with movement for strength and flexibility.</p>
            </div>
            <div className="glass-card feature-card reveal">
              <div className="icon"><i className="fas fa-sun"></i></div>
              <h3>Hatha Yoga</h3>
              <p>Traditional poses held longer for balance, alignment, and deep stretching.</p>
            </div>
            <div className="glass-card feature-card reveal">
              <div className="icon"><i className="fas fa-temperature-high"></i></div>
              <h3>Hot Yoga</h3>
              <p>Practiced in a heated room to enhance flexibility and detoxification.</p>
            </div>
            <div className="glass-card feature-card reveal">
              <div className="icon"><i className="fas fa-bed"></i></div>
              <h3>Yin Yoga</h3>
              <p>Slow, meditative practice targeting deep connective tissues.</p>
            </div>
            <div className="glass-card feature-card reveal">
              <div className="icon"><i className="fas fa-bolt"></i></div>
              <h3>Power Yoga</h3>
              <p>Fast-paced, fitness-focused yoga for strength and endurance.</p>
            </div>
            <div className="glass-card feature-card reveal">
              <div className="icon"><i className="fas fa-spa"></i></div>
              <h3>Restorative Yoga</h3>
              <p>Gentle poses with props for deep relaxation and stress relief.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section alt">
        <div className="container">
          <div className="content-grid">
            <div className="content-text reveal">
              <h2>Health Benefits</h2>
              <p>Yoga is a holistic practice that transforms both body and mind.</p>
              <ul>
                <li><i className="fas fa-check"></i> Improved flexibility and mobility</li>
                <li><i className="fas fa-check"></i> Enhanced muscle strength and tone</li>
                <li><i className="fas fa-check"></i> Better posture and body awareness</li>
                <li><i className="fas fa-check"></i> Reduced stress and anxiety</li>
                <li><i className="fas fa-check"></i> Increased energy and vitality</li>
                <li><i className="fas fa-check"></i> Better sleep quality</li>
                <li><i className="fas fa-check"></i> Lower blood pressure</li>
                <li><i className="fas fa-check"></i> Mental clarity and focus</li>
              </ul>
            </div>
            <img src="https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Yoga benefits" className="reveal" />
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="section-header reveal">
            <h2>Daily Schedule</h2>
          </div>
          <div className="glass-card reveal">
            <table className="schedule-table">
              <thead>
                <tr><th>Day</th><th>Class</th><th>Time</th><th>Instructor</th></tr>
              </thead>
              <tbody>
                <tr><td>Monday</td><td>Vinyasa Flow</td><td>7:00 AM - 8:00 AM</td><td>Emily Chen</td></tr>
                <tr><td>Tuesday</td><td>Hatha Yoga</td><td>6:00 PM - 7:00 PM</td><td>Emily Chen</td></tr>
                <tr><td>Wednesday</td><td>Power Yoga</td><td>7:00 AM - 8:00 AM</td><td>Mark Davis</td></tr>
                <tr><td>Thursday</td><td>Hot Yoga</td><td>6:00 PM - 7:00 PM</td><td>Emily Chen</td></tr>
                <tr><td>Friday</td><td>Yin Yoga</td><td>7:00 AM - 8:00 AM</td><td>Mark Davis</td></tr>
                <tr><td>Saturday</td><td>Restorative</td><td>10:00 AM - 11:00 AM</td><td>Emily Chen</td></tr>
                <tr><td>Sunday</td><td>Community Flow</td><td>10:00 AM - 11:00 AM</td><td>Mark Davis</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="content-section alt">
        <div className="container">
          <div className="content-grid reverse">
            <div className="content-text reveal">
              <h2>Meditation Sessions</h2>
              <p>Complement your yoga practice with guided meditation sessions designed to calm the mind and deepen your awareness.</p>
              <ul>
                <li><i className="fas fa-check"></i> Guided breathing exercises</li>
                <li><i className="fas fa-check"></i> Mindfulness meditation</li>
                <li><i className="fas fa-check"></i> Body scan relaxation</li>
                <li><i className="fas fa-check"></i> Sound healing sessions</li>
              </ul>
              <p style={{ marginTop: '16px' }}>Every Sunday at 11:15 AM, following the Community Flow class.</p>
            </div>
            <img src="https://images.pexels.com/photos/3822583/pexels-photo-3822583.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Meditation" className="reveal" />
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="section-header reveal">
            <h2>Meet Our Yoga Instructors</h2>
          </div>
          <div className="trainers-grid">
            <div className="glass-card trainer-card reveal">
              <img src="https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Emily Chen" />
              <h3>Emily Chen</h3>
              <p>Lead Yoga Instructor</p>
              <div className="socials">
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="glass-card trainer-card reveal">
              <img src="https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Mark Davis" />
              <h3>Mark Davis</h3>
              <p>Power & Hot Yoga</p>
              <div className="socials">
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="reveal">
            <h2>Join Our Yoga Classes</h2>
            <p>Find your flow, balance your mind, and transform your body with yoga at Titan Fitness.</p>
            <a href="/contact" className="btn btn-primary btn-large">Join Yoga Classes</a>
          </div>
        </div>
      </section>

      <Footer />
      <button className="scroll-top" aria-label="Scroll to top"><i className="fas fa-arrow-up"></i></button>
    </>
  )
}
