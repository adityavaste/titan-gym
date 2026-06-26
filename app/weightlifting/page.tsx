import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ClientWrapper from '@/components/ClientWrapper'

export default function Weightlifting() {
  return (
    <>
      <Navbar />
      <ClientWrapper />

      <section className="page-hero">
        <img src="https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Weightlifting" className="hero-bg" />
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">Strength Training</p>
            <h1>Master the Art of Weightlifting</h1>
            <p>Build raw power, sculpt your physique, and push your limits with our comprehensive weightlifting programs.</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="section-header reveal">
            <h2>Benefits of Weightlifting</h2>
          </div>
          <div className="features-grid">
            <div className="glass-card feature-card reveal">
              <div className="icon"><i className="fas fa-bolt"></i></div>
              <h3>Increased Strength</h3>
              <p>Build functional strength that improves every aspect of your daily life.</p>
            </div>
            <div className="glass-card feature-card reveal">
              <div className="icon"><i className="fas fa-fire"></i></div>
              <h3>Fat Burning</h3>
              <p>Resistance training boosts metabolism and burns calories even at rest.</p>
            </div>
            <div className="glass-card feature-card reveal">
              <div className="icon"><i className="fas fa-bone"></i></div>
              <h3>Bone Health</h3>
              <p>Increase bone density and reduce the risk of osteoporosis.</p>
            </div>
            <div className="glass-card feature-card reveal">
              <div className="icon"><i className="fas fa-brain"></i></div>
              <h3>Mental Toughness</h3>
              <p>Develop discipline, focus, and resilience through structured training.</p>
            </div>
            <div className="glass-card feature-card reveal">
              <div className="icon"><i className="fas fa-heart"></i></div>
              <h3>Heart Health</h3>
              <p>Lower blood pressure and improve cardiovascular function.</p>
            </div>
            <div className="glass-card feature-card reveal">
              <div className="icon"><i className="fas fa-ruler-vertical"></i></div>
              <h3>Posture & Balance</h3>
              <p>Strengthen core muscles for better posture and stability.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section alt">
        <div className="container">
          <div className="section-header reveal">
            <h2>Training Programs</h2>
            <p>From beginner to advanced, we have a program for every level.</p>
          </div>
          <div className="program-detail-grid">
            <div className="glass-card program-detail-card reveal">
              <h3><i className="fas fa-seedling"></i> Beginner</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '12px' }}>Perfect for those new to weightlifting. Focus on form, technique, and building a foundation.</p>
              <ul>
                <li><i className="fas fa-check"></i> 3 days per week</li>
                <li><i className="fas fa-check"></i> Full body routines</li>
                <li><i className="fas fa-check"></i> Form coaching included</li>
                <li><i className="fas fa-check"></i> Light to moderate weights</li>
              </ul>
            </div>
            <div className="glass-card program-detail-card reveal">
              <h3><i className="fas fa-layer-group"></i> Intermediate</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '12px' }}>For those with 6+ months experience. Increase intensity and introduce compound movements.</p>
              <ul>
                <li><i className="fas fa-check"></i> 4-5 days per week</li>
                <li><i className="fas fa-check"></i> Split routines</li>
                <li><i className="fas fa-check"></i> Progressive overload</li>
                <li><i className="fas fa-check"></i> Accessory work</li>
              </ul>
            </div>
            <div className="glass-card program-detail-card reveal">
              <h3><i className="fas fa-fire-flame-curved"></i> Advanced</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '12px' }}>For experienced lifters. Focus on strength, hypertrophy, and peaking for competition.</p>
              <ul>
                <li><i className="fas fa-check"></i> 5-6 days per week</li>
                <li><i className="fas fa-check"></i> Periodization</li>
                <li><i className="fas fa-check"></i> Competition prep</li>
                <li><i className="fas fa-check"></i> 1-on-1 coaching</li>
              </ul>
            </div>
            <div className="glass-card program-detail-card reveal">
              <h3><i className="fas fa-users"></i> Group Strength</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '12px' }}>High-energy group sessions that combine strength and conditioning for maximum results.</p>
              <ul>
                <li><i className="fas fa-check"></i> 45-minute sessions</li>
                <li><i className="fas fa-check"></i> Circuit training</li>
                <li><i className="fas fa-check"></i> Team motivation</li>
                <li><i className="fas fa-check"></i> All levels welcome</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-text reveal">
              <h2>Our Equipment</h2>
              <p>We stock the finest equipment from Rogue, Eleiko, Hammer Strength, and Life Fitness.</p>
              <ul>
                <li><i className="fas fa-check"></i> Olympic barbells and bumper plates</li>
                <li><i className="fas fa-check"></i> Power racks and squat stands</li>
                <li><i className="fas fa-check"></i> Dumbbells from 2.5kg to 70kg</li>
                <li><i className="fas fa-check"></i> Cable machines and pulleys</li>
                <li><i className="fas fa-check"></i> Kettlebells and resistance bands</li>
                <li><i className="fas fa-check"></i> Specialized bench press stations</li>
              </ul>
            </div>
            <img src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Equipment" className="reveal" />
          </div>
        </div>
      </section>

      <section className="content-section alt">
        <div className="container">
          <div className="content-grid reverse">
            <div className="content-text reveal">
              <h2>Safety First</h2>
              <p>Your safety is our priority. Every member receives a mandatory orientation on proper equipment use.</p>
              <ul>
                <li><i className="fas fa-check"></i> Always warm up before lifting</li>
                <li><i className="fas fa-check"></i> Use spotters for heavy sets</li>
                <li><i className="fas fa-check"></i> Maintain proper form over ego</li>
                <li><i className="fas fa-check"></i> Rest and recover between sessions</li>
                <li><i className="fas fa-check"></i> Stay hydrated and fueled</li>
              </ul>
            </div>
            <img src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Safety" className="reveal" />
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="reveal">
            <h2>Start Lifting Today</h2>
            <p>Your strength journey begins with a single rep. Join us and discover what you are capable of.</p>
            <a href="/contact" className="btn btn-primary btn-large">Join Now</a>
          </div>
        </div>
      </section>

      <Footer />
      <button className="scroll-top" aria-label="Scroll to top"><i className="fas fa-arrow-up"></i></button>
    </>
  )
}
