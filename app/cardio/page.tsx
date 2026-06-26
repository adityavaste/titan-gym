import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ClientWrapper from '@/components/ClientWrapper'

export default function Cardio() {
  return (
    <>
      <Navbar />
      <ClientWrapper />

      <section className="min-h-[40vh] md:min-h-[50vh] flex items-center relative overflow-hidden pt-16 md:pt-20">
        <img src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Cardio" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(135deg, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.75) 100%)' }} />
        <div className="container-custom relative z-[2]">
          <div className="max-w-[700px]">
            <p className="text-[0.75rem] sm:text-[1rem] font-medium text-[#e63946] uppercase tracking-[2px] mb-4">Endurance & Stamina</p>
            <h1 className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] font-extrabold mb-3">Ignite Your Cardio</h1>
            <p className="text-[0.9rem] sm:text-[1.1rem] text-[#b0b0b0] max-w-[600px]">From running to HIIT, our cardio programs are designed to boost your heart health and melt away fat.</p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20">
        <div className="container-custom">
          <div className="section-header reveal">
            <h2>Cardio Disciplines</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="glass-card text-center reveal">
              <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center mx-auto mb-5 text-[1.5rem] md:text-[1.8rem] text-[#e63946]" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.15), rgba(230,57,70,0.05))', border: '1px solid rgba(230,57,70,0.2)' }}><i className="fas fa-person-running"></i></div>
              <h3 className="text-[1.1rem] md:text-[1.25rem] font-semibold mb-2.5">Running</h3>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">Treadmills, indoor track, and outdoor group runs for all paces and distances.</p>
            </div>
            <div className="glass-card text-center reveal">
              <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center mx-auto mb-5 text-[1.5rem] md:text-[1.8rem] text-[#e63946]" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.15), rgba(230,57,70,0.05))', border: '1px solid rgba(230,57,70,0.2)' }}><i className="fas fa-bicycle"></i></div>
              <h3 className="text-[1.1rem] md:text-[1.25rem] font-semibold mb-2.5">Cycling</h3>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">Spin classes and stationary bikes with virtual route simulations.</p>
            </div>
            <div className="glass-card text-center reveal">
              <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center mx-auto mb-5 text-[1.5rem] md:text-[1.8rem] text-[#e63946]" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.15), rgba(230,57,70,0.05))', border: '1px solid rgba(230,57,70,0.2)' }}><i className="fas fa-water"></i></div>
              <h3 className="text-[1.1rem] md:text-[1.25rem] font-semibold mb-2.5">Rowing</h3>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">Full-body rowing machines for low-impact, high-calorie burn.</p>
            </div>
            <div className="glass-card text-center reveal">
              <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center mx-auto mb-5 text-[1.5rem] md:text-[1.8rem] text-[#e63946]" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.15), rgba(230,57,70,0.05))', border: '1px solid rgba(230,57,70,0.2)' }}><i className="fas fa-bolt"></i></div>
              <h3 className="text-[1.1rem] md:text-[1.25rem] font-semibold mb-2.5">HIIT</h3>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">High-intensity interval training to maximize fat loss in minimal time.</p>
            </div>
            <div className="glass-card text-center reveal">
              <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center mx-auto mb-5 text-[1.5rem] md:text-[1.8rem] text-[#e63946]" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.15), rgba(230,57,70,0.05))', border: '1px solid rgba(230,57,70,0.2)' }}><i className="fas fa-jump-rope"></i></div>
              <h3 className="text-[1.1rem] md:text-[1.25rem] font-semibold mb-2.5">Jump Rope</h3>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">Coordination and cardio combined with fun jump rope sessions.</p>
            </div>
            <div className="glass-card text-center reveal">
              <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center mx-auto mb-5 text-[1.5rem] md:text-[1.8rem] text-[#e63946]" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.15), rgba(230,57,70,0.05))', border: '1px solid rgba(230,57,70,0.2)' }}><i className="fas fa-stairs"></i></div>
              <h3 className="text-[1.1rem] md:text-[1.25rem] font-semibold mb-2.5">Stair Climbing</h3>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">StairMaster and stepper machines for powerful lower body cardio.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-[#141414]">
        <div className="container-custom">
          <div className="section-header reveal">
            <h2>Benefits of Cardio</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="reveal">
              <ul className="space-y-2">
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2"><i className="fas fa-check text-[#e63946] text-[0.9rem]"></i> Improves cardiovascular health</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2"><i className="fas fa-check text-[#e63946] text-[0.9rem]"></i> Burns fat and calories efficiently</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2"><i className="fas fa-check text-[#e63946] text-[0.9rem]"></i> Increases lung capacity</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2"><i className="fas fa-check text-[#e63946] text-[0.9rem]"></i> Reduces stress and anxiety</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2"><i className="fas fa-check text-[#e63946] text-[0.9rem]"></i> Boosts energy and mood</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2"><i className="fas fa-check text-[#e63946] text-[0.9rem]"></i> Better sleep quality</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2"><i className="fas fa-check text-[#e63946] text-[0.9rem]"></i> Lower risk of chronic diseases</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2"><i className="fas fa-check text-[#e63946] text-[0.9rem]"></i> Improved immune function</li>
              </ul>
            </div>
            <img src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Cardio benefits" className="rounded-2xl w-full h-[180px] md:h-[400px] object-cover reveal" />
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20">
        <div className="container-custom">
          <div className="section-header reveal">
            <h2>Weekly Cardio Plans</h2>
            <p>Structured plans to help you reach your goals faster.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="glass-card reveal">
              <h3 className="text-[1.1rem] md:text-[1.2rem] font-semibold mb-3 flex items-center gap-2.5"><i className="fas fa-leaf text-[#e63946]"></i> Fat Loss Plan</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2 border-b border-[rgba(255,255,255,0.08)]"><i className="fas fa-check text-[#e63946] text-[0.8rem]"></i> Mon: 30 min steady-state run</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2 border-b border-[rgba(255,255,255,0.08)]"><i className="fas fa-check text-[#e63946] text-[0.8rem]"></i> Tue: 20 min HIIT cycling</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2 border-b border-[rgba(255,255,255,0.08)]"><i className="fas fa-check text-[#e63946] text-[0.8rem]"></i> Wed: Rest or light yoga</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2 border-b border-[rgba(255,255,255,0.08)]"><i className="fas fa-check text-[#e63946] text-[0.8rem]"></i> Thu: 30 min rowing intervals</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2 border-b border-[rgba(255,255,255,0.08)]"><i className="fas fa-check text-[#e63946] text-[0.8rem]"></i> Fri: 40 min mixed cardio</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2 border-b border-[rgba(255,255,255,0.08)]"><i className="fas fa-check text-[#e63946] text-[0.8rem]"></i> Sat: 45 min long run</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2 border-b border-[rgba(255,255,255,0.08)]"><i className="fas fa-check text-[#e63946] text-[0.8rem]"></i> Sun: Rest</li>
              </ul>
            </div>
            <div className="glass-card reveal">
              <h3 className="text-[1.1rem] md:text-[1.2rem] font-semibold mb-3 flex items-center gap-2.5"><i className="fas fa-heart-pulse text-[#e63946]"></i> Endurance Plan</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2 border-b border-[rgba(255,255,255,0.08)]"><i className="fas fa-check text-[#e63946] text-[0.8rem]"></i> Mon: 45 min run</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2 border-b border-[rgba(255,255,255,0.08)]"><i className="fas fa-check text-[#e63946] text-[0.8rem]"></i> Tue: 30 min cycling</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2 border-b border-[rgba(255,255,255,0.08)]"><i className="fas fa-check text-[#e63946] text-[0.8rem]"></i> Wed: 30 min rowing</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2 border-b border-[rgba(255,255,255,0.08)]"><i className="fas fa-check text-[#e63946] text-[0.8rem]"></i> Thu: 45 min run</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2 border-b border-[rgba(255,255,255,0.08)]"><i className="fas fa-check text-[#e63946] text-[0.8rem]"></i> Fri: 30 min HIIT</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2 border-b border-[rgba(255,255,255,0.08)]"><i className="fas fa-check text-[#e63946] text-[0.8rem]"></i> Sat: 60 min long cardio</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2 border-b border-[rgba(255,255,255,0.08)]"><i className="fas fa-check text-[#e63946] text-[0.8rem]"></i> Sun: Rest</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-[#141414]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="reveal">
              <h2 className="text-[1.5rem] md:text-[2rem] font-bold mb-4">Our Cardio Equipment</h2>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] mb-4">Over 100 cardio machines including the latest models from Technogym, Precor, and Concept2.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2"><i className="fas fa-check text-[#e63946] text-[0.9rem]"></i> Treadmills with touch screens</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2"><i className="fas fa-check text-[#e63946] text-[0.9rem]"></i> Elliptical trainers</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2"><i className="fas fa-check text-[#e63946] text-[0.9rem]"></i> Spin bikes and recumbent bikes</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2"><i className="fas fa-check text-[#e63946] text-[0.9rem]"></i> Rowing machines</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2"><i className="fas fa-check text-[#e63946] text-[0.9rem]"></i> Stair climbers and steppers</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2"><i className="fas fa-check text-[#e63946] text-[0.9rem]"></i> Air bikes and ski ergs</li>
              </ul>
            </div>
            <img src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Cardio equipment" className="rounded-2xl w-full h-[180px] md:h-[400px] object-cover reveal" />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.15), rgba(10,10,10,0.9))' }} />
        <div className="container-custom relative z-[1]">
          <div className="reveal">
            <h2 className="text-[1.5rem] md:text-[2.5rem] font-bold mb-4">Get Your Heart Pumping</h2>
            <p className="text-[#b0b0b0] text-[0.9rem] md:text-[1.1rem] mb-8 max-w-[600px] mx-auto">Join our cardio programs and feel the difference in your energy, health, and confidence.</p>
            <a href="/contact" className="btn-primary btn-large">Join Now</a>
          </div>
        </div>
      </section>

      <Footer />
      <button className="scroll-top" aria-label="Scroll to top"><i className="fas fa-arrow-up"></i></button>
    </>
  )
}
