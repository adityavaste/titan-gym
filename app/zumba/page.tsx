import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ClientWrapper from '@/components/ClientWrapper'

export default function Zumba() {
  return (
    <>
      <Navbar />
      <ClientWrapper />

      <section className="min-h-[40vh] md:min-h-[50vh] flex items-center relative overflow-hidden pt-16 md:pt-20">
        <img src="https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Zumba" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(135deg, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.75) 100%)' }} />
        <div className="container-custom relative z-[2]">
          <div className="max-w-[700px]">
            <p className="text-[0.75rem] sm:text-[1rem] font-medium text-[#e63946] uppercase tracking-[2px] mb-4">Dance Fitness</p>
            <h1 className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] font-extrabold mb-3">Feel the Rhythm with Zumba</h1>
            <p className="text-[0.9rem] sm:text-[1.1rem] text-[#b0b0b0] max-w-[600px]">Dance, sweat, and smile your way to fitness with high-energy Zumba classes that feel like a party.</p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="reveal">
              <h2 className="text-[1.5rem] md:text-[2rem] font-bold mb-4">What is Zumba?</h2>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] mb-4">Zumba is a dance fitness program that combines Latin and international music with dance moves. It is fun, energetic, and effective.</p>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">Created in the 1990s by Colombian dancer Alberto Beto Perez, Zumba has become one of the most popular fitness programs worldwide, and for good reason: it does not feel like a workout.</p>
            </div>
            <img src="https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Zumba" className="rounded-2xl w-full h-[180px] md:h-[400px] object-cover reveal" />
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-[#141414]">
        <div className="container-custom">
          <div className="section-header reveal">
            <h2>Benefits of Zumba</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="glass-card text-center reveal">
              <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center mx-auto mb-5 text-[1.5rem] md:text-[1.8rem] text-[#e63946]" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.15), rgba(230,57,70,0.05))', border: '1px solid rgba(230,57,70,0.2)' }}><i className="fas fa-fire"></i></div>
              <h3 className="text-[1.1rem] md:text-[1.25rem] font-semibold mb-2.5">Calorie Burn</h3>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">Burn 500-1000 calories in a single session without even realizing it.</p>
            </div>
            <div className="glass-card text-center reveal">
              <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center mx-auto mb-5 text-[1.5rem] md:text-[1.8rem] text-[#e63946]" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.15), rgba(230,57,70,0.05))', border: '1px solid rgba(230,57,70,0.2)' }}><i className="fas fa-heart"></i></div>
              <h3 className="text-[1.1rem] md:text-[1.25rem] font-semibold mb-2.5">Heart Health</h3>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">Improves cardiovascular endurance and lowers heart disease risk.</p>
            </div>
            <div className="glass-card text-center reveal">
              <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center mx-auto mb-5 text-[1.5rem] md:text-[1.8rem] text-[#e63946]" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.15), rgba(230,57,70,0.05))', border: '1px solid rgba(230,57,70,0.2)' }}><i className="fas fa-smile"></i></div>
              <h3 className="text-[1.1rem] md:text-[1.25rem] font-semibold mb-2.5">Stress Relief</h3>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">Dancing releases endorphins, reducing stress and boosting mood.</p>
            </div>
            <div className="glass-card text-center reveal">
              <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center mx-auto mb-5 text-[1.5rem] md:text-[1.8rem] text-[#e63946]" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.15), rgba(230,57,70,0.05))', border: '1px solid rgba(230,57,70,0.2)' }}><i className="fas fa-users"></i></div>
              <h3 className="text-[1.1rem] md:text-[1.25rem] font-semibold mb-2.5">Community</h3>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">Meet new people and make friends in a fun, welcoming environment.</p>
            </div>
            <div className="glass-card text-center reveal">
              <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center mx-auto mb-5 text-[1.5rem] md:text-[1.8rem] text-[#e63946]" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.15), rgba(230,57,70,0.05))', border: '1px solid rgba(230,57,70,0.2)' }}><i className="fas fa-child-reaching"></i></div>
              <h3 className="text-[1.1rem] md:text-[1.25rem] font-semibold mb-2.5">Coordination</h3>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">Improves balance, rhythm, and overall body coordination.</p>
            </div>
            <div className="glass-card text-center reveal">
              <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center mx-auto mb-5 text-[1.5rem] md:text-[1.8rem] text-[#e63946]" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.15), rgba(230,57,70,0.05))', border: '1px solid rgba(230,57,70,0.2)' }}><i className="fas fa-music"></i></div>
              <h3 className="text-[1.1rem] md:text-[1.25rem] font-semibold mb-2.5">Fun Factor</h3>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">The music and atmosphere make it feel like a party, not a workout.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20">
        <div className="container-custom">
          <div className="section-header reveal">
            <h2>Weekly Schedule</h2>
          </div>
          <div className="glass-card reveal overflow-x-auto">
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

      <section className="py-10 md:py-20 bg-[#141414]">
        <div className="container-custom">
          <div className="section-header reveal">
            <h2>Meet Our Zumba Instructors</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-[800px] mx-auto">
            <div className="glass-card text-center overflow-hidden reveal">
              <img src="https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=600" alt="David Rodriguez" className="w-full h-[200px] md:h-[280px] object-cover rounded-lg mb-4" />
              <h3 className="text-[1.05rem] md:text-[1.15rem] font-semibold mb-1">David Rodriguez</h3>
              <p className="text-[#e63946] text-[0.85rem] md:text-[0.9rem] font-medium">Zumba Master Trainer</p>
              <div className="flex justify-center gap-3 mt-3">
                <a href="#" className="trainer-social"><i className="fab fa-instagram"></i></a>
                <a href="#" className="trainer-social"><i className="fab fa-twitter"></i></a>
                <a href="#" className="trainer-social"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="glass-card text-center overflow-hidden reveal">
              <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Maria Lopez" className="w-full h-[200px] md:h-[280px] object-cover rounded-lg mb-4" />
              <h3 className="text-[1.05rem] md:text-[1.15rem] font-semibold mb-1">Maria Lopez</h3>
              <p className="text-[#e63946] text-[0.85rem] md:text-[0.9rem] font-medium">Zumba & Dance Fitness</p>
              <div className="flex justify-center gap-3 mt-3">
                <a href="#" className="trainer-social"><i className="fab fa-instagram"></i></a>
                <a href="#" className="trainer-social"><i className="fab fa-twitter"></i></a>
                <a href="#" className="trainer-social"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20">
        <div className="container-custom">
          <div className="section-header reveal">
            <h2>Gallery</h2>
            <p>Snaps from our Zumba sessions.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-4 auto-rows-[120px] md:auto-rows-[200px]">
            <div className="rounded-lg overflow-hidden relative cursor-pointer col-span-2 row-span-2 group reveal" data-lightbox>
              <img src="https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Zumba class" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[rgba(0,0,0,0.5)]"><i className="fas fa-expand text-white text-[1.5rem] md:text-[2rem]"></i></div>
            </div>
            <div className="rounded-lg overflow-hidden relative cursor-pointer group reveal" data-lightbox>
              <img src="https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Zumba dance" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[rgba(0,0,0,0.5)]"><i className="fas fa-expand text-white text-[1.5rem] md:text-[2rem]"></i></div>
            </div>
            <div className="rounded-lg overflow-hidden relative cursor-pointer group reveal" data-lightbox>
              <img src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Group fitness" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[rgba(0,0,0,0.5)]"><i className="fas fa-expand text-white text-[1.5rem] md:text-[2rem]"></i></div>
            </div>
            <div className="rounded-lg overflow-hidden relative cursor-pointer row-span-2 group reveal" data-lightbox>
              <img src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Workout" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[rgba(0,0,0,0.5)]"><i className="fas fa-expand text-white text-[1.5rem] md:text-[2rem]"></i></div>
            </div>
            <div className="rounded-lg overflow-hidden relative cursor-pointer col-span-2 group reveal" data-lightbox>
              <img src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Gym" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[rgba(0,0,0,0.5)]"><i className="fas fa-expand text-white text-[1.5rem] md:text-[2rem]"></i></div>
            </div>
            <div className="rounded-lg overflow-hidden relative cursor-pointer group reveal" data-lightbox>
              <img src="https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Weights" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[rgba(0,0,0,0.5)]"><i className="fas fa-expand text-white text-[1.5rem] md:text-[2rem]"></i></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.15), rgba(10,10,10,0.9))' }} />
        <div className="container-custom relative z-[1]">
          <div className="reveal">
            <h2 className="text-[1.5rem] md:text-[2.5rem] font-bold mb-4">Join the Zumba Party</h2>
            <p className="text-[#b0b0b0] text-[0.9rem] md:text-[1.1rem] mb-8 max-w-[600px] mx-auto">No dance experience needed. Just bring your energy and get ready to have the best workout of your life.</p>
            <a href="/contact" className="btn-primary btn-large">Register for Zumba</a>
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
