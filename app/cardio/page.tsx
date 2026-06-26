import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ClientWrapper from '@/components/ClientWrapper'

export default function Cardio() {
  return (
    <>
      <Navbar />
      <ClientWrapper />

      <section className="page-hero">
        <img src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Cardio" className="hero-bg" />
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">Endurance & Stamina</p>
            <h1>Ignite Your Cardio</h1>
            <p>From running to HIIT, our cardio programs are designed to boost your heart health and melt away fat.</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="section-header reveal">
            <h2>Cardio Disciplines</h2>
          </div>
          <div className="features-grid">
            <div className="glass-card feature-card reveal">
              <div className="icon"><i className="fas fa-person-running"></i></div>
              <h3>Running</h3>
              <p>Treadmills, indoor track, and outdoor group runs for all paces and distances.</p>
            </div>
            <div className="glass-card feature-card reveal">
              <div className="icon"><i className="fas fa-bicycle"></i></div>
              <h3>Cycling</h3>
              <p>Spin classes and stationary bikes with virtual route simulations.</p>
            </div>
            <div className="glass-card feature-card reveal">
              <div className="icon"><i className="fas fa-water"></i></div>
              <h3>Rowing</h3>
              <p>Full-body rowing machines for low-impact, high-calorie burn.</p>
            </div>
            <div className="glass-card feature-card reveal">
              <div className="icon"><i className="fas fa-bolt"></i></div>
              <h3>HIIT</h3>
              <p>High-intensity interval training to maximize fat loss in minimal time.</p>
            </div>
            <div className="glass-card feature-card reveal">
              <div className="icon"><i className="fas fa-jump-rope"></i></div>
              <h3>Jump Rope</h3>
              <p>Coordination and cardio combined with fun jump rope sessions.</p>
            </div>
            <div className="glass-card feature-card reveal">
              <div className="icon"><i className="fas fa-stairs"></i></div>
              <h3>Stair Climbing</h3>
              <p>StairMaster and stepper machines for powerful lower body cardio.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section alt">
        <div className="container">
          <div className="section-header reveal">
            <h2>Benefits of Cardio</h2>
          </div>
          <div className="content-grid">
            <div className="content-text reveal">
              <ul>
                <li><i className="fas fa-check"></i> Improves cardiovascular health</li>
                <li><i className="fas fa-check"></i> Burns fat and calories efficiently</li>
                <li><i className="fas fa-check"></i> Increases lung capacity</li>
                <li><i className="fas fa-check"></i> Reduces stress and anxiety</li>
                <li><i className="fas fa-check"></i> Boosts energy and mood</li>
                <li><i className="fas fa-check"></i> Better sleep quality</li>
                <li><i className="fas fa-check"></i> Lower risk of chronic diseases</li>
                <li><i className="fas fa-check"></i> Improved immune function</li>
              </ul>
            </div>
            <img src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Cardio benefits" className="reveal" />
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="section-header reveal">
            <h2>Weekly Cardio Plans</h2>
            <p>Structured plans to help you reach your goals faster.</p>
          </div>
          <div className="program-detail-grid">
            <div className="glass-card program-detail-card reveal">
              <h3><i className="fas fa-leaf"></i> Fat Loss Plan</h3>
              <ul>
                <li><i className="fas fa-check"></i> Mon: 30 min steady-state run</li>
                <li><i className="fas fa-check"></i> Tue: 20 min HIIT cycling</li>
                <li><i className="fas fa-check"></i> Wed: Rest or light yoga</li>
                <li><i className="fas fa-check"></i> Thu: 30 min rowing intervals</li>
                <li><i className="fas fa-check"></i> Fri: 40 min mixed cardio</li>
                <li><i className="fas fa-check"></i> Sat: 45 min long run</li>
                <li><i className="fas fa-check"></i> Sun: Rest</li>
              </ul>
            </div>
            <div className="glass-card program-detail-card reveal">
              <h3><i className="fas fa-heart-pulse"></i> Endurance Plan</h3>
              <ul>
                <li><i className="fas fa-check"></i> Mon: 45 min run</li>
                <li><i className="fas fa-check"></i> Tue: 30 min cycling</li>
                <li><i className="fas fa-check"></i> Wed: 30 min rowing</li>
                <li><i className="fas fa-check"></i> Thu: 45 min run</li>
                <li><i className="fas fa-check"></i> Fri: 30 min HIIT</li>
                <li><i className="fas fa-check"></i> Sat: 60 min long cardio</li>
                <li><i className="fas fa-check"></i> Sun: Rest</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section alt">
        <div className="container">
          <div className="content-grid">
            <div className="content-text reveal">
              <h2>Our Cardio Equipment</h2>
              <p>Over 100 cardio machines including the latest models from Technogym, Precor, and Concept2.</p>
              <ul>
                <li><i className="fas fa-check"></i> Treadmills with touch screens</li>
                <li><i className="fas fa-check"></i> Elliptical trainers</li>
                <li><i className="fas fa-check"></i> Spin bikes and recumbent bikes</li>
                <li><i className="fas fa-check"></i> Rowing machines</li>
                <li><i className="fas fa-check"></i> Stair climbers and steppers</li>
                <li><i className="fas fa-check"></i> Air bikes and ski ergs</li>
              </ul>
            </div>
            <img src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Cardio equipment" className="reveal" />
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="reveal">
            <h2>Get Your Heart Pumping</h2>
            <p>Join our cardio programs and feel the difference in your energy, health, and confidence.</p>
            <a href="/contact" className="btn btn-primary btn-large">Join Now</a>
          </div>
        </div>
      </section>

      <Footer />
      <button className="scroll-top" aria-label="Scroll to top"><i className="fas fa-arrow-up"></i></button>
    </>
  )
}
