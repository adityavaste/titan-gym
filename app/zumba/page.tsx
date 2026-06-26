import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ClientWrapper from '@/components/ClientWrapper'

export default function Zumba() {
  return (
    <>
      <Navbar />
      <ClientWrapper />

      <section className="page-hero">
        <img src="https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Zumba" className="hero-bg" />
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">Dance Fitness</p>
            <h1>Feel the Rhythm with Zumba</h1>
            <p>Dance, sweat, and smile your way to fitness with high-energy Zumba classes that feel like a party.</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-text reveal">
              <h2>What is Zumba?</h2>
              <p>Zumba is a dance fitness program that combines Latin and international music with dance moves. It is fun, energetic, and effective.</p>
              <p>Created in the 1990s by Colombian dancer Alberto Beto Perez, Zumba has become one of the most popular fitness programs worldwide, and for good reason: it does not feel like a workout.</p>
            </div>
            <img src="https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Zumba" className="reveal" />
          </div>
        </div>
      </section>

      <section className="content-section alt">
        <div className="container">
          <div className="section-header reveal">
            <h2>Benefits of Zumba</h2>
          </div>
          <div className="features-grid">
            <div className="glass-card feature-card reveal">
              <div className="icon"><i className="fas fa-fire"></i></div>
              <h3>Calorie Burn</h3>
              <p>Burn 500-1000 calories in a single session without even realizing it.</p>
            </div>
            <div className="glass-card feature-card reveal">
              <div className="icon"><i className="fas fa-heart"></i></div>
              <h3>Heart Health</h3>
              <p>Improves cardiovascular endurance and lowers heart disease risk.</p>
            </div>
            <div className="glass-card feature-card reveal">
              <div className="icon"><i className="fas fa-smile"></i></div>
              <h3>Stress Relief</h3>
              <p>Dancing releases endorphins, reducing stress and boosting mood.</p>
            </div>
            <div className="glass-card feature-card reveal">
              <div className="icon"><i className="fas fa-users"></i></div>
              <h3>Community</h3>
              <p>Meet new people and make friends in a fun, welcoming environment.</p>
            </div>
            <div className="glass-card feature-card reveal">
              <div className="icon"><i className="fas fa-child-reaching"></i></div>
              <h3>Coordination</h3>
              <p>Improves balance, rhythm, and overall body coordination.</p>
            </div>
            <div className="glass-card feature-card reveal">
              <div className="icon"><i className="fas fa-music"></i></div>
              <h3>Fun Factor</h3>
              <p>The music and atmosphere make it feel like a party, not a workout.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="section-header reveal">
            <h2>Weekly Schedule</h2>
          </div>
          <div className="glass-card reveal">
            <table className="schedule-table">
              <thead>
                <tr><th>Day</th><th>Class</th><th>Time</th><th>Instructor</th></tr>
              </thead>
              <tbody>
                <tr><td>Monday</td><td>Zumba Basics</td><td>6:00 PM - 7:00 PM</td><td>David Rodriguez</td></tr>
                <tr><td>Tuesday</td><td>Zumba Toning</td><td>7:00 PM - 8:00 PM</td><td>Maria Lopez</td></tr>
                <tr><td>Wednesday</td><td>Zumba Sentao</td><td>6:00 PM - 7:00 PM</td><td>David Rodriguez</td></tr>
                <tr><td>Thursday</td><td>Zumba Step</td><td>7:00 PM - 8:00 PM</td><td>Maria Lopez</td></tr>
                <tr><td>Friday</td><td>Friday Party Zumba</td><td>6:00 PM - 7:30 PM</td><td>David Rodriguez</td></tr>
                <tr><td>Saturday</td><td>Family Zumba</td><td>10:00 AM - 11:00 AM</td><td>Maria Lopez</td></tr>
                <tr><td>Sunday</td><td>Zumba Gold</td><td>11:00 AM - 12:00 PM</td><td>David Rodriguez</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="content-section alt">
        <div className="container">
          <div className="section-header reveal">
            <h2>Meet Our Zumba Instructors</h2>
          </div>
          <div className="trainers-grid">
            <div className="glass-card trainer-card reveal">
              <img src="https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=600" alt="David Rodriguez" />
              <h3>David Rodriguez</h3>
              <p>Zumba Master Trainer</p>
              <div className="socials">
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="glass-card trainer-card reveal">
              <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Maria Lopez" />
              <h3>Maria Lopez</h3>
              <p>Zumba & Dance Fitness</p>
              <div className="socials">
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="section-header reveal">
            <h2>Gallery</h2>
            <p>Snaps from our Zumba sessions.</p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item reveal" data-lightbox>
              <img src="https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Zumba class" />
              <div className="overlay"><i className="fas fa-expand"></i></div>
            </div>
            <div className="gallery-item reveal" data-lightbox>
              <img src="https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Zumba dance" />
              <div className="overlay"><i className="fas fa-expand"></i></div>
            </div>
            <div className="gallery-item reveal" data-lightbox>
              <img src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Group fitness" />
              <div className="overlay"><i className="fas fa-expand"></i></div>
            </div>
            <div className="gallery-item reveal" data-lightbox>
              <img src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Workout" />
              <div className="overlay"><i className="fas fa-expand"></i></div>
            </div>
            <div className="gallery-item reveal" data-lightbox>
              <img src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Gym" />
              <div className="overlay"><i className="fas fa-expand"></i></div>
            </div>
            <div className="gallery-item reveal" data-lightbox>
              <img src="https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Weights" />
              <div className="overlay"><i className="fas fa-expand"></i></div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="reveal">
            <h2>Join the Zumba Party</h2>
            <p>No dance experience needed. Just bring your energy and get ready to have the best workout of your life.</p>
            <a href="/contact" className="btn btn-primary btn-large">Register for Zumba</a>
          </div>
        </div>
      </section>

      <Footer />
      <button className="scroll-top" aria-label="Scroll to top"><i className="fas fa-arrow-up"></i></button>
      <div className="lightbox">
        <button className="lightbox-close"><i className="fas fa-times"></i></button>
        <img src="" alt="Gallery" />
      </div>
    </>
  )
}
