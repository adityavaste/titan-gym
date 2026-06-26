import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ClientWrapper from '@/components/ClientWrapper'

export default function Yoga() {
  return (
    <>
      <Navbar />
      <ClientWrapper />

      <section className="min-h-[40vh] md:min-h-[50vh] flex items-center relative overflow-hidden pt-16 md:pt-20">
        <img src="https://images.pexels.com/photos/3822583/pexels-photo-3822583.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Yoga" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(135deg, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.75) 100%)' }} />
        <div className="container-custom relative z-[2]">
          <div className="max-w-[700px]">
            <p className="text-[0.75rem] sm:text-[1rem] font-medium text-[#e63946] uppercase tracking-[2px] mb-4">Mind & Body</p>
            <h1 className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] font-extrabold mb-3">Discover the Power of Yoga</h1>
            <p className="text-[0.9rem] sm:text-[1.1rem] text-[#b0b0b0] max-w-[600px]">Connect your breath, body, and mind through ancient practices guided by modern expertise.</p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20">
        <div className="container-custom">
          <div className="section-header reveal">
            <h2>Yoga Styles</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="glass-card text-center reveal">
              <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center mx-auto mb-5 text-[1.5rem] md:text-[1.8rem] text-[#e63946]" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.15), rgba(230,57,70,0.05))', border: '1px solid rgba(230,57,70,0.2)' }}><i className="fas fa-fire"></i></div>
              <h3 className="text-[1.1rem] md:text-[1.25rem] font-semibold mb-2.5">Vinyasa Flow</h3>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">Dynamic sequences linking breath with movement for strength and flexibility.</p>
            </div>
            <div className="glass-card text-center reveal">
              <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center mx-auto mb-5 text-[1.5rem] md:text-[1.8rem] text-[#e63946]" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.15), rgba(230,57,70,0.05))', border: '1px solid rgba(230,57,70,0.2)' }}><i className="fas fa-sun"></i></div>
              <h3 className="text-[1.1rem] md:text-[1.25rem] font-semibold mb-2.5">Hatha Yoga</h3>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">Traditional poses held longer for balance, alignment, and deep stretching.</p>
            </div>
            <div className="glass-card text-center reveal">
              <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center mx-auto mb-5 text-[1.5rem] md:text-[1.8rem] text-[#e63946]" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.15), rgba(230,57,70,0.05))', border: '1px solid rgba(230,57,70,0.2)' }}><i className="fas fa-temperature-high"></i></div>
              <h3 className="text-[1.1rem] md:text-[1.25rem] font-semibold mb-2.5">Hot Yoga</h3>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">Practiced in a heated room to enhance flexibility and detoxification.</p>
            </div>
            <div className="glass-card text-center reveal">
              <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center mx-auto mb-5 text-[1.5rem] md:text-[1.8rem] text-[#e63946]" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.15), rgba(230,57,70,0.05))', border: '1px solid rgba(230,57,70,0.2)' }}><i className="fas fa-bed"></i></div>
              <h3 className="text-[1.1rem] md:text-[1.25rem] font-semibold mb-2.5">Yin Yoga</h3>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">Slow, meditative practice targeting deep connective tissues.</p>
            </div>
            <div className="glass-card text-center reveal">
              <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center mx-auto mb-5 text-[1.5rem] md:text-[1.8rem] text-[#e63946]" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.15), rgba(230,57,70,0.05))', border: '1px solid rgba(230,57,70,0.2)' }}><i className="fas fa-bolt"></i></div>
              <h3 className="text-[1.1rem] md:text-[1.25rem] font-semibold mb-2.5">Power Yoga</h3>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">Fast-paced, fitness-focused yoga for strength and endurance.</p>
            </div>
            <div className="glass-card text-center reveal">
              <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center mx-auto mb-5 text-[1.5rem] md:text-[1.8rem] text-[#e63946]" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.15), rgba(230,57,70,0.05))', border: '1px solid rgba(230,57,70,0.2)' }}><i className="fas fa-spa"></i></div>
              <h3 className="text-[1.1rem] md:text-[1.25rem] font-semibold mb-2.5">Restorative Yoga</h3>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">Gentle poses with props for deep relaxation and stress relief.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-[#141414]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center content-grid-reverse">
            <div className="reveal">
              <h2 className="text-[1.5rem] md:text-[2rem] font-bold mb-4">Health Benefits</h2>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] mb-4">Yoga is a holistic practice that transforms both body and mind.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2"><i className="fas fa-check text-[#e63946] text-[0.9rem]"></i> Improved flexibility and mobility</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2"><i className="fas fa-check text-[#e63946] text-[0.9rem]"></i> Enhanced muscle strength and tone</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2"><i className="fas fa-check text-[#e63946] text-[0.9rem]"></i> Better posture and body awareness</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2"><i className="fas fa-check text-[#e63946] text-[0.9rem]"></i> Reduced stress and anxiety</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2"><i className="fas fa-check text-[#e63946] text-[0.9rem]"></i> Increased energy and vitality</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2"><i className="fas fa-check text-[#e63946] text-[0.9rem]"></i> Better sleep quality</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2"><i className="fas fa-check text-[#e63946] text-[0.9rem]"></i> Lower blood pressure</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2"><i className="fas fa-check text-[#e63946] text-[0.9rem]"></i> Mental clarity and focus</li>
              </ul>
            </div>
            <img src="https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Yoga benefits" className="rounded-2xl w-full h-[180px] md:h-[400px] object-cover reveal" />
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20">
        <div className="container-custom">
          <div className="section-header reveal">
            <h2>Daily Schedule</h2>
          </div>
          <div className="glass-card reveal overflow-x-auto">
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

      <section className="py-10 md:py-20 bg-[#141414]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center content-grid-reverse">
            <div className="reveal">
              <h2 className="text-[1.5rem] md:text-[2rem] font-bold mb-4">Meditation Sessions</h2>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] mb-4">Complement your yoga practice with guided meditation sessions designed to calm the mind and deepen your awareness.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2"><i className="fas fa-check text-[#e63946] text-[0.9rem]"></i> Guided breathing exercises</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2"><i className="fas fa-check text-[#e63946] text-[0.9rem]"></i> Mindfulness meditation</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2"><i className="fas fa-check text-[#e63946] text-[0.9rem]"></i> Body scan relaxation</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2"><i className="fas fa-check text-[#e63946] text-[0.9rem]"></i> Sound healing sessions</li>
              </ul>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] mt-4">Every Sunday at 11:15 AM, following the Community Flow class.</p>
            </div>
            <img src="https://images.pexels.com/photos/3822583/pexels-photo-3822583.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Meditation" className="rounded-2xl w-full h-[180px] md:h-[400px] object-cover reveal" />
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20">
        <div className="container-custom">
          <div className="section-header reveal">
            <h2>Meet Our Yoga Instructors</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-[800px] mx-auto">
            <div className="glass-card text-center overflow-hidden reveal">
              <img src="https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Emily Chen" className="w-full h-[200px] md:h-[280px] object-cover rounded-lg mb-4" />
              <h3 className="text-[1.05rem] md:text-[1.15rem] font-semibold mb-1">Emily Chen</h3>
              <p className="text-[#e63946] text-[0.85rem] md:text-[0.9rem] font-medium">Lead Yoga Instructor</p>
              <div className="flex justify-center gap-3 mt-3">
                <a href="#" className="trainer-social"><i className="fab fa-instagram"></i></a>
                <a href="#" className="trainer-social"><i className="fab fa-twitter"></i></a>
                <a href="#" className="trainer-social"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="glass-card text-center overflow-hidden reveal">
              <img src="https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Mark Davis" className="w-full h-[200px] md:h-[280px] object-cover rounded-lg mb-4" />
              <h3 className="text-[1.05rem] md:text-[1.15rem] font-semibold mb-1">Mark Davis</h3>
              <p className="text-[#e63946] text-[0.85rem] md:text-[0.9rem] font-medium">Power & Hot Yoga</p>
              <div className="flex justify-center gap-3 mt-3">
                <a href="#" className="trainer-social"><i className="fab fa-instagram"></i></a>
                <a href="#" className="trainer-social"><i className="fab fa-twitter"></i></a>
                <a href="#" className="trainer-social"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.15), rgba(10,10,10,0.9))' }} />
        <div className="container-custom relative z-[1]">
          <div className="reveal">
            <h2 className="text-[1.5rem] md:text-[2.5rem] font-bold mb-4">Join Our Yoga Classes</h2>
            <p className="text-[#b0b0b0] text-[0.9rem] md:text-[1.1rem] mb-8 max-w-[600px] mx-auto">Find your flow, balance your mind, and transform your body with yoga at Titan Fitness.</p>
            <a href="/contact" className="btn-primary btn-large">Join Yoga Classes</a>
          </div>
        </div>
      </section>

      <Footer />
      <button className="scroll-top" aria-label="Scroll to top"><i className="fas fa-arrow-up"></i></button>
    </>
  )
}
