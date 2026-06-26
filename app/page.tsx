import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ClientWrapper from '@/components/ClientWrapper'

export default function Home() {
  return (
    <>
      <Navbar />
      <ClientWrapper />

      <section className="hero">
        <img src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Fitness background" className="hero-bg" />
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">Welcome to Titan Fitness</p>
            <h1>Transform Your Body, <span>Transform Your Life</span></h1>
            <p>Unlock your full potential with world-class training, state-of-the-art equipment, and a community that pushes you to be your best every single day.</p>
            <div className="hero-buttons">
              <a href="/contact" className="btn btn-primary btn-large">Join Now</a>
              <a href="#programs" className="btn btn-outline btn-large">Explore Programs</a>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="glass-card stat-card reveal">
              <div className="icon"><i className="fas fa-users"></i></div>
              <h3>5000+</h3>
              <p>Happy Members</p>
            </div>
            <div className="glass-card stat-card reveal">
              <div className="icon"><i className="fas fa-user-graduate"></i></div>
              <h3>25+</h3>
              <p>Expert Trainers</p>
            </div>
            <div className="glass-card stat-card reveal">
              <div className="icon"><i className="fas fa-calendar-check"></i></div>
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>
            <div className="glass-card stat-card reveal">
              <div className="icon"><i className="fas fa-clock"></i></div>
              <h3>24/7</h3>
              <p>Open Hours</p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="container">
          <div className="section-header reveal">
            <h2>Why Choose Us</h2>
            <p>We provide everything you need to achieve your fitness goals under one roof.</p>
          </div>
          <div className="features-grid">
            <div className="glass-card feature-card reveal">
              <div className="icon"><i className="fas fa-dumbbell"></i></div>
              <h3>Modern Equipment</h3>
              <p>Top-of-the-line machines and free weights from leading brands worldwide.</p>
            </div>
            <div className="glass-card feature-card reveal">
              <div className="icon"><i className="fas fa-user-tie"></i></div>
              <h3>Expert Trainers</h3>
              <p>Certified professionals with years of experience in fitness coaching.</p>
            </div>
            <div className="glass-card feature-card reveal">
              <div className="icon"><i className="fas fa-heart-pulse"></i></div>
              <h3>Personalized Plans</h3>
              <p>Custom workout and nutrition plans tailored to your unique goals.</p>
            </div>
            <div className="glass-card feature-card reveal">
              <div className="icon"><i className="fas fa-spa"></i></div>
              <h3>Recovery Zone</h3>
              <p>Sauna, steam room, and massage therapy for complete recovery.</p>
            </div>
            <div className="glass-card feature-card reveal">
              <div className="icon"><i className="fas fa-wifi"></i></div>
              <h3>Smart Gym</h3>
              <p>Track your progress with our app and smart equipment integrations.</p>
            </div>
            <div className="glass-card feature-card reveal">
              <div className="icon"><i className="fas fa-shield-halved"></i></div>
              <h3>Safe Environment</h3>
              <p>24/7 security, sanitization, and emergency support systems in place.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="plans-section" id="plans">
        <div className="container">
          <div className="section-header reveal">
            <h2>Membership Plans</h2>
            <p>Choose the plan that fits your lifestyle and fitness ambitions.</p>
          </div>
          <div className="plans-grid">
            <div className="glass-card plan-card reveal">
              <h3>Basic</h3>
              <div className="price">$29<span>/month</span></div>
              <ul>
                <li><i className="fas fa-check"></i> Gym Access</li>
                <li><i className="fas fa-check"></i> Locker Room</li>
                <li><i className="fas fa-check"></i> 2 Group Classes/Week</li>
                <li className="na"><i className="fas fa-times"></i> Personal Training</li>
                <li className="na"><i className="fas fa-times"></i> Recovery Zone</li>
              </ul>
              <a href="/contact" className="btn btn-outline">Get Started</a>
            </div>
            <div className="glass-card plan-card featured reveal">
              <h3>Premium</h3>
              <div className="price">$59<span>/month</span></div>
              <ul>
                <li><i className="fas fa-check"></i> Unlimited Gym Access</li>
                <li><i className="fas fa-check"></i> Unlimited Group Classes</li>
                <li><i className="fas fa-check"></i> 2 PT Sessions/Month</li>
                <li><i className="fas fa-check"></i> Recovery Zone</li>
                <li className="na"><i className="fas fa-times"></i> Nutrition Coaching</li>
              </ul>
              <a href="/contact" className="btn btn-primary">Get Started</a>
            </div>
            <div className="glass-card plan-card reveal">
              <h3>Elite</h3>
              <div className="price">$99<span>/month</span></div>
              <ul>
                <li><i className="fas fa-check"></i> Everything in Premium</li>
                <li><i className="fas fa-check"></i> 8 PT Sessions/Month</li>
                <li><i className="fas fa-check"></i> Nutrition Coaching</li>
                <li><i className="fas fa-check"></i> Body Composition Analysis</li>
                <li><i className="fas fa-check"></i> Priority Booking</li>
              </ul>
              <a href="/contact" className="btn btn-outline">Get Started</a>
            </div>
          </div>
        </div>
      </section>

      <section className="programs-section" id="programs">
        <div className="container">
          <div className="section-header reveal">
            <h2>Featured Programs</h2>
            <p>Explore our diverse range of fitness programs designed for every goal.</p>
          </div>
          <div className="programs-grid">
            <a href="/weightlifting" className="program-card reveal">
              <img src="https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Weightlifting" />
              <div className="overlay">
                <h3>Weightlifting</h3>
                <p>Build strength and muscle</p>
              </div>
            </a>
            <a href="/cardio" className="program-card reveal">
              <img src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Cardio" />
              <div className="overlay">
                <h3>Cardio</h3>
                <p>Boost endurance and burn fat</p>
              </div>
            </a>
            <a href="/yoga" className="program-card reveal">
              <img src="https://images.pexels.com/photos/3822583/pexels-photo-3822583.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Yoga" />
              <div className="overlay">
                <h3>Yoga</h3>
                <p>Find balance and flexibility</p>
              </div>
            </a>
            <a href="/zumba" className="program-card reveal">
              <img src="https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Zumba" />
              <div className="overlay">
                <h3>Zumba</h3>
                <p>Dance your way to fitness</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="trainers-section">
        <div className="container">
          <div className="section-header reveal">
            <h2>Meet Our Trainers</h2>
            <p>Learn from the best in the industry with decades of combined experience.</p>
          </div>
          <div className="trainers-grid">
            <div className="glass-card trainer-card reveal">
              <img src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Marcus Johnson" />
              <h3>Marcus Johnson</h3>
              <p>Strength Coach</p>
              <div className="socials">
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="glass-card trainer-card reveal">
              <img src="https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Sarah Williams" />
              <h3>Sarah Williams</h3>
              <p>Cardio Specialist</p>
              <div className="socials">
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="glass-card trainer-card reveal">
              <img src="https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Emily Chen" />
              <h3>Emily Chen</h3>
              <p>Yoga Instructor</p>
              <div className="socials">
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="glass-card trainer-card reveal">
              <img src="https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=600" alt="David Rodriguez" />
              <h3>David Rodriguez</h3>
              <p>Zumba Instructor</p>
              <div className="socials">
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <div className="section-header reveal">
            <h2>What Members Say</h2>
            <p>Real stories from real people who transformed their lives at Titan Fitness.</p>
          </div>
          <div className="testimonials-grid">
            <div className="glass-card testimonial-card reveal">
              <div className="quote">&ldquo;</div>
              <p>Titan Fitness completely changed my life. I lost 30 pounds in 4 months and gained confidence I never knew I had.</p>
              <div className="author">
                <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150" alt="James" />
                <div>
                  <h4>James Peterson</h4>
                  <span>Member since 2022</span>
                  <div className="stars"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                </div>
              </div>
            </div>
            <div className="glass-card testimonial-card reveal">
              <div className="quote">&ldquo;</div>
              <p>The trainers here are incredible. Marcus helped me prepare for my first powerlifting competition and I placed 3rd!</p>
              <div className="author">
                <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Lisa" />
                <div>
                  <h4>Lisa Anderson</h4>
                  <span>Member since 2021</span>
                  <div className="stars"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                </div>
              </div>
            </div>
            <div className="glass-card testimonial-card reveal">
              <div className="quote">&ldquo;</div>
              <p>Best gym in the city, hands down. The 24/7 access is a game changer for my night shift schedule.</p>
              <div className="author">
                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Michael" />
                <div>
                  <h4>Michael Torres</h4>
                  <span>Member since 2023</span>
                  <div className="stars"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <div className="section-header reveal">
            <h2>Our Gallery</h2>
            <p>Take a look inside our world-class facility.</p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item reveal" data-lightbox>
              <img src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Gym" />
              <div className="overlay"><i className="fas fa-expand"></i></div>
            </div>
            <div className="gallery-item reveal" data-lightbox>
              <img src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Weights" />
              <div className="overlay"><i className="fas fa-expand"></i></div>
            </div>
            <div className="gallery-item reveal" data-lightbox>
              <img src="https://images.pexels.com/photos/3822583/pexels-photo-3822583.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Yoga" />
              <div className="overlay"><i className="fas fa-expand"></i></div>
            </div>
            <div className="gallery-item reveal" data-lightbox>
              <img src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Training" />
              <div className="overlay"><i className="fas fa-expand"></i></div>
            </div>
            <div className="gallery-item reveal" data-lightbox>
              <img src="https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Zumba" />
              <div className="overlay"><i className="fas fa-expand"></i></div>
            </div>
            <div className="gallery-item reveal" data-lightbox>
              <img src="https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Dumbbells" />
              <div className="overlay"><i className="fas fa-expand"></i></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bmi-section">
        <div className="container">
          <div className="section-header reveal">
            <h2>BMI Calculator</h2>
            <p>Check your Body Mass Index and get insights on your health.</p>
          </div>
          <div className="bmi-container">
            <div className="glass-card reveal">
              <div className="bmi-form">
                <label htmlFor="height">Height (cm)</label>
                <input type="number" id="height" placeholder="e.g. 175" min="50" max="300" />
                <label htmlFor="weight">Weight (kg)</label>
                <input type="number" id="weight" placeholder="e.g. 70" min="20" max="300" />
                <button className="btn btn-primary" id="bmi-calc">Calculate BMI</button>
              </div>
            </div>
            <div className="glass-card bmi-result reveal">
              <div className="bmi-value" id="bmi-value">--</div>
              <div className="bmi-category" id="bmi-category">Enter your details</div>
              <div className="bmi-desc" id="bmi-desc">Height and weight to calculate BMI</div>
              <div className="bmi-bar">
                <div className="bmi-marker" id="bmi-marker" style={{ left: '0%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="reveal">
            <h2>Ready to Start Your Journey?</h2>
            <p>Join thousands of members who have already transformed their lives. Your first step is just one click away.</p>
            <a href="/contact" className="btn btn-primary btn-large">Become a Member</a>
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
