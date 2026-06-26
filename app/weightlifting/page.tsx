import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ClientWrapper from '@/components/ClientWrapper'

export default function Weightlifting() {
  return (
    <>
      <Navbar />
      <ClientWrapper />

      <section className="min-h-[40vh] md:min-h-[50vh] flex items-center relative overflow-hidden pt-16 md:pt-20">
        <img src="https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Weightlifting" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(135deg, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.75) 100%)' }} />
        <div className="container-custom relative z-[2]">
          <div className="max-w-[700px]">
            <p className="text-[0.75rem] sm:text-[1rem] font-medium text-[#e63946] uppercase tracking-[2px] mb-4">Strength Training</p>
            <h1 className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] font-extrabold mb-3">Master the Art of Weightlifting</h1>
            <p className="text-[0.9rem] sm:text-[1.1rem] text-[#b0b0b0] max-w-[600px]">Build raw power, sculpt your physique, and push your limits with our comprehensive weightlifting programs.</p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20">
        <div className="container-custom">
          <div className="section-header reveal">
            <h2>Benefits of Weightlifting</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="glass-card text-center reveal">
              <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center mx-auto mb-5 text-[1.5rem] md:text-[1.8rem] text-[#e63946]" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.15), rgba(230,57,70,0.05))', border: '1px solid rgba(230,57,70,0.2)' }}><i className="fas fa-bolt"></i></div>
              <h3 className="text-[1.1rem] md:text-[1.25rem] font-semibold mb-2.5">Increased Strength</h3>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">Build functional strength that improves every aspect of your daily life.</p>
            </div>
            <div className="glass-card text-center reveal">
              <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center mx-auto mb-5 text-[1.5rem] md:text-[1.8rem] text-[#e63946]" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.15), rgba(230,57,70,0.05))', border: '1px solid rgba(230,57,70,0.2)' }}><i className="fas fa-fire"></i></div>
              <h3 className="text-[1.1rem] md:text-[1.25rem] font-semibold mb-2.5">Fat Burning</h3>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">Resistance training boosts metabolism and burns calories even at rest.</p>
            </div>
            <div className="glass-card text-center reveal">
              <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center mx-auto mb-5 text-[1.5rem] md:text-[1.8rem] text-[#e63946]" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.15), rgba(230,57,70,0.05))', border: '1px solid rgba(230,57,70,0.2)' }}><i className="fas fa-bone"></i></div>
              <h3 className="text-[1.1rem] md:text-[1.25rem] font-semibold mb-2.5">Bone Health</h3>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">Increase bone density and reduce the risk of osteoporosis.</p>
            </div>
            <div className="glass-card text-center reveal">
              <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center mx-auto mb-5 text-[1.5rem] md:text-[1.8rem] text-[#e63946]" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.15), rgba(230,57,70,0.05))', border: '1px solid rgba(230,57,70,0.2)' }}><i className="fas fa-brain"></i></div>
              <h3 className="text-[1.1rem] md:text-[1.25rem] font-semibold mb-2.5">Mental Toughness</h3>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">Develop discipline, focus, and resilience through structured training.</p>
            </div>
            <div className="glass-card text-center reveal">
              <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center mx-auto mb-5 text-[1.5rem] md:text-[1.8rem] text-[#e63946]" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.15), rgba(230,57,70,0.05))', border: '1px solid rgba(230,57,70,0.2)' }}><i className="fas fa-heart"></i></div>
              <h3 className="text-[1.1rem] md:text-[1.25rem] font-semibold mb-2.5">Heart Health</h3>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">Lower blood pressure and improve cardiovascular function.</p>
            </div>
            <div className="glass-card text-center reveal">
              <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center mx-auto mb-5 text-[1.5rem] md:text-[1.8rem] text-[#e63946]" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.15), rgba(230,57,70,0.05))', border: '1px solid rgba(230,57,70,0.2)' }}><i className="fas fa-ruler-vertical"></i></div>
              <h3 className="text-[1.1rem] md:text-[1.25rem] font-semibold mb-2.5">Posture & Balance</h3>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem]">Strengthen core muscles for better posture and stability.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-[#141414]">
        <div className="container-custom">
          <div className="section-header reveal">
            <h2>Training Programs</h2>
            <p>From beginner to advanced, we have a program for every level.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="glass-card reveal">
              <h3 className="text-[1.1rem] md:text-[1.2rem] font-semibold mb-3 flex items-center gap-2.5"><i className="fas fa-seedling text-[#e63946]"></i> Beginner</h3>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] mb-3">Perfect for those new to weightlifting. Focus on form, technique, and building a foundation.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2 border-b border-[rgba(255,255,255,0.08)]"><i className="fas fa-check text-[#e63946] text-[0.8rem]"></i> 3 days per week</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2 border-b border-[rgba(255,255,255,0.08)]"><i className="fas fa-check text-[#e63946] text-[0.8rem]"></i> Full body routines</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2 border-b border-[rgba(255,255,255,0.08)]"><i className="fas fa-check text-[#e63946] text-[0.8rem]"></i> Form coaching included</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2 border-b border-[rgba(255,255,255,0.08)]"><i className="fas fa-check text-[#e63946] text-[0.8rem]"></i> Light to moderate weights</li>
              </ul>
            </div>
            <div className="glass-card reveal">
              <h3 className="text-[1.1rem] md:text-[1.2rem] font-semibold mb-3 flex items-center gap-2.5"><i className="fas fa-layer-group text-[#e63946]"></i> Intermediate</h3>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] mb-3">For those with 6+ months experience. Increase intensity and introduce compound movements.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2 border-b border-[rgba(255,255,255,0.08)]"><i className="fas fa-check text-[#e63946] text-[0.8rem]"></i> 4-5 days per week</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2 border-b border-[rgba(255,255,255,0.08)]"><i className="fas fa-check text-[#e63946] text-[0.8rem]"></i> Split routines</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2 border-b border-[rgba(255,255,255,0.08)]"><i className="fas fa-check text-[#e63946] text-[0.8rem]"></i> Progressive overload</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2 border-b border-[rgba(255,255,255,0.08)]"><i className="fas fa-check text-[#e63946] text-[0.8rem]"></i> Accessory work</li>
              </ul>
            </div>
            <div className="glass-card reveal">
              <h3 className="text-[1.1rem] md:text-[1.2rem] font-semibold mb-3 flex items-center gap-2.5"><i className="fas fa-fire-flame-curved text-[#e63946]"></i> Advanced</h3>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] mb-3">For experienced lifters. Focus on strength, hypertrophy, and peaking for competition.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2 border-b border-[rgba(255,255,255,0.08)]"><i className="fas fa-check text-[#e63946] text-[0.8rem]"></i> 5-6 days per week</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2 border-b border-[rgba(255,255,255,0.08)]"><i className="fas fa-check text-[#e63946] text-[0.8rem]"></i> Periodization</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2 border-b border-[rgba(255,255,255,0.08)]"><i className="fas fa-check text-[#e63946] text-[0.8rem]"></i> Competition prep</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2 border-b border-[rgba(255,255,255,0.08)]"><i className="fas fa-check text-[#e63946] text-[0.8rem]"></i> 1-on-1 coaching</li>
              </ul>
            </div>
            <div className="glass-card reveal">
              <h3 className="text-[1.1rem] md:text-[1.2rem] font-semibold mb-3 flex items-center gap-2.5"><i className="fas fa-users text-[#e63946]"></i> Group Strength</h3>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] mb-3">High-energy group sessions that combine strength and conditioning for maximum results.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2 border-b border-[rgba(255,255,255,0.08)]"><i className="fas fa-check text-[#e63946] text-[0.8rem]"></i> 45-minute sessions</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2 border-b border-[rgba(255,255,255,0.08)]"><i className="fas fa-check text-[#e63946] text-[0.8rem]"></i> Circuit training</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2 border-b border-[rgba(255,255,255,0.08)]"><i className="fas fa-check text-[#e63946] text-[0.8rem]"></i> Team motivation</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2 border-b border-[rgba(255,255,255,0.08)]"><i className="fas fa-check text-[#e63946] text-[0.8rem]"></i> All levels welcome</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="reveal">
              <h2 className="text-[1.5rem] md:text-[2rem] font-bold mb-4">Our Equipment</h2>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] mb-4">We stock the finest equipment from Rogue, Eleiko, Hammer Strength, and Life Fitness.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2"><i className="fas fa-check text-[#e63946] text-[0.9rem]"></i> Olympic barbells and bumper plates</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2"><i className="fas fa-check text-[#e63946] text-[0.9rem]"></i> Power racks and squat stands</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2"><i className="fas fa-check text-[#e63946] text-[0.9rem]"></i> Dumbbells from 2.5kg to 70kg</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2"><i className="fas fa-check text-[#e63946] text-[0.9rem]"></i> Cable machines and pulleys</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2"><i className="fas fa-check text-[#e63946] text-[0.9rem]"></i> Kettlebells and resistance bands</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2"><i className="fas fa-check text-[#e63946] text-[0.9rem]"></i> Specialized bench press stations</li>
              </ul>
            </div>
            <img src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Equipment" className="rounded-2xl w-full h-[180px] md:h-[400px] object-cover reveal" />
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-[#141414]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center content-grid-reverse">
            <div className="reveal">
              <h2 className="text-[1.5rem] md:text-[2rem] font-bold mb-4">Safety First</h2>
              <p className="text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] mb-4">Your safety is our priority. Every member receives a mandatory orientation on proper equipment use.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2"><i className="fas fa-check text-[#e63946] text-[0.9rem]"></i> Always warm up before lifting</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2"><i className="fas fa-check text-[#e63946] text-[0.9rem]"></i> Use spotters for heavy sets</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2"><i className="fas fa-check text-[#e63946] text-[0.9rem]"></i> Maintain proper form over ego</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2"><i className="fas fa-check text-[#e63946] text-[0.9rem]"></i> Rest and recover between sessions</li>
                <li className="flex items-center gap-2.5 text-[#b0b0b0] text-[0.85rem] md:text-[0.95rem] py-2"><i className="fas fa-check text-[#e63946] text-[0.9rem]"></i> Stay hydrated and fueled</li>
              </ul>
            </div>
            <img src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Safety" className="rounded-2xl w-full h-[180px] md:h-[400px] object-cover reveal" />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(135deg, rgba(230,57,70,0.15), rgba(10,10,10,0.9))' }} />
        <div className="container-custom relative z-[1]">
          <div className="reveal">
            <h2 className="text-[1.5rem] md:text-[2.5rem] font-bold mb-4">Start Lifting Today</h2>
            <p className="text-[#b0b0b0] text-[0.9rem] md:text-[1.1rem] mb-8 max-w-[600px] mx-auto">Your strength journey begins with a single rep. Join us and discover what you are capable of.</p>
            <a href="/contact" className="btn-primary btn-large">Join Now</a>
          </div>
        </div>
      </section>

      <Footer />
      <button className="scroll-top" aria-label="Scroll to top"><i className="fas fa-arrow-up"></i></button>
    </>
  )
}
