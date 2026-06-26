import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ClientWrapper from '@/components/ClientWrapper'

export default function Home() {
  return (
    <>
      <Navbar />
      <ClientWrapper />

      {/* Hero */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <img src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Fitness background" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(135deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.75) 50%, rgba(10,10,10,0.6) 100%)' }} />
        <div className="container-custom relative z-[2]">
          <div className="max-w-[700px]">
            <p className="text-[0.75rem] sm:text-[1rem] font-medium text-[#e63946] uppercase tracking-[2px] mb-4">Welcome to Titan Fitness</p>
            <h1 className="text-[1.7rem] sm:text-[2rem] md:text-[3.5rem] font-extrabold leading-[1.15] mb-5">
              Transform Your Body, <span className="text-[#e63946]">Transform Your Life</span>
            </h1>
            <p className="text-[0.9rem] sm:text-[1.15rem] text-[#b0b0b0] mb-8 max-w-[520px]">Unlock your full potential with world-class training, state-of-the-art equipment, and a community that pushes you to be your best every single day.</p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a href="/contact" className="btn-primary btn-large">Join Now</a>
              <a href="#programs" className="btn-outline btn-large">Explore Programs</a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-20 bg-[#141414]">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="glass-card text-center py-8 md:py-10 px-4 reveal">
              <div className="text-[1.8rem] md:text-[2.5rem] text-[#e63946] mb-4"><i className="fas fa-users"></i></div>
              <h3 className="text-[1.4rem] md:text-[2.2rem] font-bold mb-1">5000+</h3>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">Happy Members</p>
            </div>
            <div className="glass-card text-center py-8 md:py-10 px-4 reveal">
              <div className="text-[1.8rem] md:text-[2.5rem] text-[#e63946] mb-4"><i className="fas fa-user-graduate"></i></div>
              <h3 className="text-[1.4rem] md:text-[2.2rem] font-bold mb-1">25+</h3>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">Expert Trainers</p>
            </div>
            <div className="glass-card text-center py-8 md:py-10 px-4 reveal">
              <div className="text-[1.8rem] md:text-[2.5rem] text-[#e63946] mb-4"><i className="fas fa-calendar-check"></i></div>
              <h3 className="text-[1.4rem] md:text-[2.2rem] font-bold mb-1">10+</h3>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">Years Experience</p>
            </div>
            <div className="glass-card text-center py-8 md:py-10 px-4 reveal">
              <div className="text-[1.8rem] md:text-[2.5rem] text-[#e63946] mb-4"><i className="fas fa-clock"></i></div>
              <h3 className="text-[1.4rem] md:text-[2.2rem] font-bold mb-1">24/7</h3>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">Open Hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-24">
        <div className="container-custom">
          <div className="section-header reveal">
            <h2>Why Choose Us</h2>
            <p>We provide everything you need to achieve your fitness goals under one roof.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="glass-card text-center reveal">
              <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center mx-auto mb-5 text-[1.5rem] md:text-[1.8rem] text-[#e63946]" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.15), rgba(230,57,70,0.05))', border: '1px solid rgba(230,57,70,0.2)' }}>
                <i className="fas fa-dumbbell"></i>
              </div>
              <h3 className="text-[1.1rem] md:text-[1.25rem] font-semibold mb-2.5">Modern Equipment</h3>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">Top-of-the-line machines and free weights from leading brands worldwide.</p>
            </div>
            <div className="glass-card text-center reveal">
              <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center mx-auto mb-5 text-[1.5rem] md:text-[1.8rem] text-[#e63946]" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.15), rgba(230,57,70,0.05))', border: '1px solid rgba(230,57,70,0.2)' }}>
                <i className="fas fa-user-tie"></i>
              </div>
              <h3 className="text-[1.1rem] md:text-[1.25rem] font-semibold mb-2.5">Expert Trainers</h3>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">Certified professionals with years of experience in fitness coaching.</p>
            </div>
            <div className="glass-card text-center reveal">
              <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center mx-auto mb-5 text-[1.5rem] md:text-[1.8rem] text-[#e63946]" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.15), rgba(230,57,70,0.05))', border: '1px solid rgba(230,57,70,0.2)' }}>
                <i className="fas fa-heart-pulse"></i>
              </div>
              <h3 className="text-[1.1rem] md:text-[1.25rem] font-semibold mb-2.5">Personalized Plans</h3>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">Custom workout and nutrition plans tailored to your unique goals.</p>
            </div>
            <div className="glass-card text-center reveal">
              <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center mx-auto mb-5 text-[1.5rem] md:text-[1.8rem] text-[#e63946]" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.15), rgba(230,57,70,0.05))', border: '1px solid rgba(230,57,70,0.2)' }}>
                <i className="fas fa-spa"></i>
              </div>
              <h3 className="text-[1.1rem] md:text-[1.25rem] font-semibold mb-2.5">Recovery Zone</h3>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">Sauna, steam room, and massage therapy for complete recovery.</p>
            </div>
            <div className="glass-card text-center reveal">
              <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center mx-auto mb-5 text-[1.5rem] md:text-[1.8rem] text-[#e63946]" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.15), rgba(230,57,70,0.05))', border: '1px solid rgba(230,57,70,0.2)' }}>
                <i className="fas fa-wifi"></i>
              </div>
              <h3 className="text-[1.1rem] md:text-[1.25rem] font-semibold mb-2.5">Smart Gym</h3>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">Track your progress with our app and smart equipment integrations.</p>
            </div>
            <div className="glass-card text-center reveal">
              <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center mx-auto mb-5 text-[1.5rem] md:text-[1.8rem] text-[#e63946]" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.15), rgba(230,57,70,0.05))', border: '1px solid rgba(230,57,70,0.2)' }}>
                <i className="fas fa-shield-halved"></i>
              </div>
              <h3 className="text-[1.1rem] md:text-[1.25rem] font-semibold mb-2.5">Safe Environment</h3>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">24/7 security, sanitization, and emergency support systems in place.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-12 md:py-24 bg-[#141414]" id="plans">
        <div className="container-custom">
          <div className="section-header reveal">
            <h2>Membership Plans</h2>
            <p>Choose the plan that fits your lifestyle and fitness ambitions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="glass-card reveal">
              <h3 className="text-[1.2rem] md:text-[1.3rem] font-semibold mb-2">Basic</h3>
              <div className="text-[1.6rem] md:text-[2.5rem] font-bold text-[#e63946] mb-1">$29<span className="text-[0.85rem] md:text-[1rem] text-[#777] font-normal">/month</span></div>
              <ul className="my-6">
                <li className="flex items-center gap-2.5 py-2.5 border-b border-[rgba(255,255,255,0.08)] text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]"><i className="fas fa-check text-[#22c55e] text-[0.9rem]"></i> Gym Access</li>
                <li className="flex items-center gap-2.5 py-2.5 border-b border-[rgba(255,255,255,0.08)] text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]"><i className="fas fa-check text-[#22c55e] text-[0.9rem]"></i> Locker Room</li>
                <li className="flex items-center gap-2.5 py-2.5 border-b border-[rgba(255,255,255,0.08)] text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]"><i className="fas fa-check text-[#22c55e] text-[0.9rem]"></i> 2 Group Classes/Week</li>
                <li className="flex items-center gap-2.5 py-2.5 border-b border-[rgba(255,255,255,0.08)] text-[#777] text-[0.85rem] md:text-[0.95rem]"><i className="fas fa-times text-[#777] text-[0.9rem]"></i> Personal Training</li>
                <li className="flex items-center gap-2.5 py-2.5 border-b border-[rgba(255,255,255,0.08)] text-[#777] text-[0.85rem] md:text-[0.95rem]"><i className="fas fa-times text-[#777] text-[0.9rem]"></i> Recovery Zone</li>
              </ul>
              <a href="/contact" className="btn-outline w-full justify-center">Get Started</a>
            </div>
            <div className="glass-card relative overflow-hidden border-[#e63946] lg:scale-[1.03] reveal">
              <div className="absolute top-4 -right-10 bg-[#e63946] text-white text-[0.7rem] font-semibold py-1.5 px-12 rotate-45">Most Popular</div>
              <h3 className="text-[1.2rem] md:text-[1.3rem] font-semibold mb-2">Premium</h3>
              <div className="text-[1.6rem] md:text-[2.5rem] font-bold text-[#e63946] mb-1">$59<span className="text-[0.85rem] md:text-[1rem] text-[#777] font-normal">/month</span></div>
              <ul className="my-6">
                <li className="flex items-center gap-2.5 py-2.5 border-b border-[rgba(255,255,255,0.08)] text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]"><i className="fas fa-check text-[#22c55e] text-[0.9rem]"></i> Unlimited Gym Access</li>
                <li className="flex items-center gap-2.5 py-2.5 border-b border-[rgba(255,255,255,0.08)] text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]"><i className="fas fa-check text-[#22c55e] text-[0.9rem]"></i> Unlimited Group Classes</li>
                <li className="flex items-center gap-2.5 py-2.5 border-b border-[rgba(255,255,255,0.08)] text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]"><i className="fas fa-check text-[#22c55e] text-[0.9rem]"></i> 2 PT Sessions/Month</li>
                <li className="flex items-center gap-2.5 py-2.5 border-b border-[rgba(255,255,255,0.08)] text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]"><i className="fas fa-check text-[#22c55e] text-[0.9rem]"></i> Recovery Zone</li>
                <li className="flex items-center gap-2.5 py-2.5 border-b border-[rgba(255,255,255,0.08)] text-[#777] text-[0.85rem] md:text-[0.95rem]"><i className="fas fa-times text-[#777] text-[0.9rem]"></i> Nutrition Coaching</li>
              </ul>
              <a href="/contact" className="btn-primary w-full justify-center">Get Started</a>
            </div>
            <div className="glass-card reveal">
              <h3 className="text-[1.2rem] md:text-[1.3rem] font-semibold mb-2">Elite</h3>
              <div className="text-[1.6rem] md:text-[2.5rem] font-bold text-[#e63946] mb-1">$99<span className="text-[0.85rem] md:text-[1rem] text-[#777] font-normal">/month</span></div>
              <ul className="my-6">
                <li className="flex items-center gap-2.5 py-2.5 border-b border-[rgba(255,255,255,0.08)] text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]"><i className="fas fa-check text-[#22c55e] text-[0.9rem]"></i> Everything in Premium</li>
                <li className="flex items-center gap-2.5 py-2.5 border-b border-[rgba(255,255,255,0.08)] text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]"><i className="fas fa-check text-[#22c55e] text-[0.9rem]"></i> 8 PT Sessions/Month</li>
                <li className="flex items-center gap-2.5 py-2.5 border-b border-[rgba(255,255,255,0.08)] text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]"><i className="fas fa-check text-[#22c55e] text-[0.9rem]"></i> Nutrition Coaching</li>
                <li className="flex items-center gap-2.5 py-2.5 border-b border-[rgba(255,255,255,0.08)] text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]"><i className="fas fa-check text-[#22c55e] text-[0.9rem]"></i> Body Composition Analysis</li>
                <li className="flex items-center gap-2.5 py-2.5 border-b border-[rgba(255,255,255,0.08)] text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]"><i className="fas fa-check text-[#22c55e] text-[0.9rem]"></i> Priority Booking</li>
              </ul>
              <a href="/contact" className="btn-outline w-full justify-center">Get Started</a>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-12 md:py-24" id="programs">
        <div className="container-custom">
          <div className="section-header reveal">
            <h2>Featured Programs</h2>
            <p>Explore our diverse range of fitness programs designed for every goal.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <a href="/weightlifting" className="relative overflow-hidden rounded-2xl cursor-pointer group reveal">
              <img src="https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Weightlifting" className="w-full h-[240px] md:h-[320px] object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute bottom-0 left-0 w-full p-4 md:p-6" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                <h3 className="text-[1.1rem] md:text-[1.25rem] font-semibold mb-1">Weightlifting</h3>
                <p className="text-[0.8rem] md:text-[0.9rem] text-[#b0b0b0]">Build strength and muscle</p>
              </div>
            </a>
            <a href="/cardio" className="relative overflow-hidden rounded-2xl cursor-pointer group reveal">
              <img src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Cardio" className="w-full h-[240px] md:h-[320px] object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute bottom-0 left-0 w-full p-4 md:p-6" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                <h3 className="text-[1.1rem] md:text-[1.25rem] font-semibold mb-1">Cardio</h3>
                <p className="text-[0.8rem] md:text-[0.9rem] text-[#b0b0b0]">Boost endurance and burn fat</p>
              </div>
            </a>
            <a href="/yoga" className="relative overflow-hidden rounded-2xl cursor-pointer group reveal">
              <img src="https://images.pexels.com/photos/3822583/pexels-photo-3822583.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Yoga" className="w-full h-[240px] md:h-[320px] object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute bottom-0 left-0 w-full p-4 md:p-6" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                <h3 className="text-[1.1rem] md:text-[1.25rem] font-semibold mb-1">Yoga</h3>
                <p className="text-[0.8rem] md:text-[0.9rem] text-[#b0b0b0]">Find balance and flexibility</p>
              </div>
            </a>
            <a href="/zumba" className="relative overflow-hidden rounded-2xl cursor-pointer group reveal">
              <img src="https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Zumba" className="w-full h-[240px] md:h-[320px] object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute bottom-0 left-0 w-full p-4 md:p-6" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                <h3 className="text-[1.1rem] md:text-[1.25rem] font-semibold mb-1">Zumba</h3>
                <p className="text-[0.8rem] md:text-[0.9rem] text-[#b0b0b0]">Dance your way to fitness</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section className="py-12 md:py-24 bg-[#141414]">
        <div className="container-custom">
          <div className="section-header reveal">
            <h2>Meet Our Trainers</h2>
            <p>Learn from the best in the industry with decades of combined experience.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="glass-card text-center overflow-hidden reveal">
              <img src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Marcus Johnson" className="w-full h-[200px] md:h-[280px] object-cover rounded-lg mb-4" />
              <h3 className="text-[1.05rem] md:text-[1.15rem] font-semibold mb-1">Marcus Johnson</h3>
              <p className="text-[#e63946] text-[0.85rem] md:text-[0.9rem] font-medium">Strength Coach</p>
              <div className="flex justify-center gap-3 mt-3">
                <a href="#" className="trainer-social"><i className="fab fa-instagram"></i></a>
                <a href="#" className="trainer-social"><i className="fab fa-twitter"></i></a>
                <a href="#" className="trainer-social"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="glass-card text-center overflow-hidden reveal">
              <img src="https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Sarah Williams" className="w-full h-[200px] md:h-[280px] object-cover rounded-lg mb-4" />
              <h3 className="text-[1.05rem] md:text-[1.15rem] font-semibold mb-1">Sarah Williams</h3>
              <p className="text-[#e63946] text-[0.85rem] md:text-[0.9rem] font-medium">Cardio Specialist</p>
              <div className="flex justify-center gap-3 mt-3">
                <a href="#" className="trainer-social"><i className="fab fa-instagram"></i></a>
                <a href="#" className="trainer-social"><i className="fab fa-twitter"></i></a>
                <a href="#" className="trainer-social"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="glass-card text-center overflow-hidden reveal">
              <img src="https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Emily Chen" className="w-full h-[200px] md:h-[280px] object-cover rounded-lg mb-4" />
              <h3 className="text-[1.05rem] md:text-[1.15rem] font-semibold mb-1">Emily Chen</h3>
              <p className="text-[#e63946] text-[0.85rem] md:text-[0.9rem] font-medium">Yoga Instructor</p>
              <div className="flex justify-center gap-3 mt-3">
                <a href="#" className="trainer-social"><i className="fab fa-instagram"></i></a>
                <a href="#" className="trainer-social"><i className="fab fa-twitter"></i></a>
                <a href="#" className="trainer-social"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="glass-card text-center overflow-hidden reveal">
              <img src="https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=600" alt="David Rodriguez" className="w-full h-[200px] md:h-[280px] object-cover rounded-lg mb-4" />
              <h3 className="text-[1.05rem] md:text-[1.15rem] font-semibold mb-1">David Rodriguez</h3>
              <p className="text-[#e63946] text-[0.85rem] md:text-[0.9rem] font-medium">Zumba Instructor</p>
              <div className="flex justify-center gap-3 mt-3">
                <a href="#" className="trainer-social"><i className="fab fa-instagram"></i></a>
                <a href="#" className="trainer-social"><i className="fab fa-twitter"></i></a>
                <a href="#" className="trainer-social"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-24">
        <div className="container-custom">
          <div className="section-header reveal">
            <h2>What Members Say</h2>
            <p>Real stories from real people who transformed their lives at Titan Fitness.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="glass-card relative reveal">
              <div className="text-[2rem] md:text-[3rem] text-[#e63946] opacity-30 leading-none mb-2">&ldquo;</div>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] mb-5 italic">Titan Fitness completely changed my life. I lost 30 pounds in 4 months and gained confidence I never knew I had.</p>
              <div className="flex items-center gap-3">
                <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150" alt="James" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" />
                <div>
                  <h4 className="text-[0.9rem] md:text-[1rem] font-semibold">James Peterson</h4>
                  <span className="text-[0.75rem] md:text-[0.85rem] text-[#777]">Member since 2022</span>
                  <div className="text-[#f59e0b] text-[0.75rem] md:text-[0.85rem] mt-1"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                </div>
              </div>
            </div>
            <div className="glass-card relative reveal">
              <div className="text-[2rem] md:text-[3rem] text-[#e63946] opacity-30 leading-none mb-2">&ldquo;</div>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] mb-5 italic">The trainers here are incredible. Marcus helped me prepare for my first powerlifting competition and I placed 3rd!</p>
              <div className="flex items-center gap-3">
                <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Lisa" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" />
                <div>
                  <h4 className="text-[0.9rem] md:text-[1rem] font-semibold">Lisa Anderson</h4>
                  <span className="text-[0.75rem] md:text-[0.85rem] text-[#777]">Member since 2021</span>
                  <div className="text-[#f59e0b] text-[0.75rem] md:text-[0.85rem] mt-1"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                </div>
              </div>
            </div>
            <div className="glass-card relative reveal">
              <div className="text-[2rem] md:text-[3rem] text-[#e63946] opacity-30 leading-none mb-2">&ldquo;</div>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] mb-5 italic">Best gym in the city, hands down. The 24/7 access is a game changer for my night shift schedule.</p>
              <div className="flex items-center gap-3">
                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Michael" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" />
                <div>
                  <h4 className="text-[0.9rem] md:text-[1rem] font-semibold">Michael Torres</h4>
                  <span className="text-[0.75rem] md:text-[0.85rem] text-[#777]">Member since 2023</span>
                  <div className="text-[#f59e0b] text-[0.75rem] md:text-[0.85rem] mt-1"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 md:py-24 bg-[#141414]">
        <div className="container-custom">
          <div className="section-header reveal">
            <h2>Our Gallery</h2>
            <p>Take a look inside our world-class facility.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-4 auto-rows-[120px] md:auto-rows-[200px]">
            <div className="rounded-lg overflow-hidden relative cursor-pointer col-span-2 row-span-2 group reveal" data-lightbox>
              <img src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Gym" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[rgba(0,0,0,0.5)]"><i className="fas fa-expand text-white text-[1.5rem] md:text-[2rem]"></i></div>
            </div>
            <div className="rounded-lg overflow-hidden relative cursor-pointer group reveal" data-lightbox>
              <img src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Weights" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[rgba(0,0,0,0.5)]"><i className="fas fa-expand text-white text-[1.5rem] md:text-[2rem]"></i></div>
            </div>
            <div className="rounded-lg overflow-hidden relative cursor-pointer group reveal" data-lightbox>
              <img src="https://images.pexels.com/photos/3822583/pexels-photo-3822583.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Yoga" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[rgba(0,0,0,0.5)]"><i className="fas fa-expand text-white text-[1.5rem] md:text-[2rem]"></i></div>
            </div>
            <div className="rounded-lg overflow-hidden relative cursor-pointer row-span-2 group reveal" data-lightbox>
              <img src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Training" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[rgba(0,0,0,0.5)]"><i className="fas fa-expand text-white text-[1.5rem] md:text-[2rem]"></i></div>
            </div>
            <div className="rounded-lg overflow-hidden relative cursor-pointer col-span-2 group reveal" data-lightbox>
              <img src="https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Zumba" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[rgba(0,0,0,0.5)]"><i className="fas fa-expand text-white text-[1.5rem] md:text-[2rem]"></i></div>
            </div>
            <div className="rounded-lg overflow-hidden relative cursor-pointer group reveal" data-lightbox>
              <img src="https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Dumbbells" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[rgba(0,0,0,0.5)]"><i className="fas fa-expand text-white text-[1.5rem] md:text-[2rem]"></i></div>
            </div>
          </div>
        </div>
      </section>

      {/* BMI Calculator */}
      <section className="py-12 md:py-24">
        <div className="container-custom">
          <div className="section-header reveal">
            <h2>BMI Calculator</h2>
            <p>Check your Body Mass Index and get insights on your health.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="glass-card reveal">
              <div className="flex flex-col gap-3 md:gap-4">
                <label htmlFor="height" className="text-[0.85rem] md:text-[0.9rem] font-medium text-[#b0b0b0]">Height (cm)</label>
                <input type="number" id="height" placeholder="e.g. 175" min="50" max="300" className="form-input" />
                <label htmlFor="weight" className="text-[0.85rem] md:text-[0.9rem] font-medium text-[#b0b0b0]">Weight (kg)</label>
                <input type="number" id="weight" placeholder="e.g. 70" min="20" max="300" className="form-input" />
                <button className="btn-primary mt-2" id="bmi-calc">Calculate BMI</button>
              </div>
            </div>
            <div className="glass-card text-center py-8 md:py-12 reveal">
              <div className="text-[2.4rem] md:text-[4rem] font-extrabold text-[#e63946] leading-none" id="bmi-value">--</div>
              <div className="text-[1.05rem] md:text-[1.25rem] font-semibold mt-3" id="bmi-category">Enter your details</div>
              <div className="text-[#b0b0b0] mt-2 text-[0.85rem] md:text-[0.95rem]" id="bmi-desc">Height and weight to calculate BMI</div>
              <div className="bmi-bar">
                <div className="bmi-marker" id="bmi-marker" style={{ left: '0%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.15), rgba(10,10,10,0.9))' }} />
        <div className="container-custom relative z-[1]">
          <div className="reveal">
            <h2 className="text-[1.5rem] md:text-[2.5rem] font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-[#b0b0b0] text-[0.9rem] md:text-[1.1rem] mb-8 max-w-[600px] mx-auto">Join thousands of members who have already transformed their lives. Your first step is just one click away.</p>
            <a href="/contact" className="btn-primary btn-large">Become a Member</a>
          </div>
        </div>
      </section>

      <Footer />
      <button className="scroll-top" aria-label="Scroll to top"><i className="fas fa-arrow-up"></i></button>
      <div className="lightbox">
        <button className="absolute top-4 md:top-6 right-4 md:right-6 bg-transparent border-none text-white text-[1.5rem] md:text-[2rem] cursor-pointer lightbox-close"><i className="fas fa-times"></i></button>
        <img src="" alt="Gallery" className="max-w-[95vw] md:max-w-[90vw] max-h-[90vh] rounded-lg" />
      </div>
    </>
  )
}
