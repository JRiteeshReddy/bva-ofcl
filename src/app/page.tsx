import { fetchProjects, fetchEvents } from '@/lib/data';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import EventCard from '@/components/EventCard';
import About from '@/components/About';
import ProjectsSection from '@/components/ProjectsSection';
import BackgroundEffect from '@/components/BackgroundEffect';

export default async function Home() {
  const allProjects = await fetchProjects();
  const allEvents = await fetchEvents();
  
  const featuredProjects = allProjects.filter(p => p.featured);

  return (
    <main className="bg-black min-h-screen relative">
      <BackgroundEffect />
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Featured Projects Section - Pinned Scroll Experience */}
      <ProjectsSection featuredProjects={featuredProjects} />



      {/* Events Section - Mission Log */}
      <section id="events" className="py-32 px-6 bg-[#030303] relative overflow-hidden">
        {/* Background Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-24">
            <div className="flex items-center gap-4 text-white/30 font-mono text-[10px] uppercase tracking-[0.5em] mb-6">
              <div className="w-12 h-[1px] bg-white/20" />
              Sector_02 // Archive
            </div>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-none">
              The <br /> <span className="text-white/40">Mission Log</span>
            </h2>
          </div>

          <div className="space-y-12 md:space-y-20">
            {allEvents.length > 0 ? (
              allEvents.map((event, idx) => (
                <EventCard key={idx} event={event} />
              ))
            ) : (
              <div className="h-64 flex items-center justify-center border border-white/5 rounded-2xl bg-white/[0.01]">
                <p className="text-brand-grey-500 font-mono text-sm tracking-widest uppercase">
                  Log Entry Empty // Initializing Data Stream...
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Join Section - The Broadcast */}
      <section id="join" className="py-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#050505]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.03] rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
            <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.5em]">Establishing Connection...</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">
            Ready to <br /> <span className="text-white">Broadcast</span> Your Vision?
          </h2>
          
          <p className="text-brand-grey-500 text-lg md:text-xl mb-12 font-light leading-relaxed max-w-2xl mx-auto">
            Join the BVA network. A collaborative frequency where student innovators turn raw code into real-world impact.
          </p>
          
          <div className="flex flex-col items-center gap-4">
            <a 
              href="#" 
              className="group inline-flex items-center gap-4 px-14 py-6 bg-white text-black rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all"
            >
              Initialize Onboarding
              <div className="w-2 h-2 bg-black rounded-full group-hover:scale-150 transition-transform" />
            </a>
            <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest mt-4">
              Auth_Protocol: open_access // secure_link_active
            </span>
          </div>
        </div>
      </section>

      {/* Footer - System Log */}
      <footer className="py-24 px-6 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="space-y-6">
              <div className="text-3xl font-bold tracking-tighter">BVA<span className="text-white/20">_</span></div>
              <p className="text-brand-grey-600 text-sm leading-relaxed max-w-xs">
                The Bangalore Vibecoders Association is a community of builders, designers, and innovators.
              </p>
            </div>
            
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 mb-8">Navigation</h4>
              <ul className="space-y-4 text-sm font-medium text-brand-grey-500 uppercase tracking-widest">
                <li><a href="#about" className="hover:text-white transition-colors">// About</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">// Projects</a></li>
                <li><a href="#events" className="hover:text-white transition-colors">// Events</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 mb-8">Network</h4>
              <ul className="space-y-4 text-sm font-medium text-brand-grey-500 uppercase tracking-widest">
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
              </ul>
            </div>

            <div className="font-mono text-[9px] text-white/20 space-y-2 uppercase leading-tight">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 mb-8">System_Status</h4>
              <p>Node: BVA_MAINNET_01</p>
              <p>Status: ONLINE</p>
              <p>Uptime: 99.9%</p>
              <p>Location: Bangalore_IN</p>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-brand-grey-600 text-[10px] uppercase tracking-[0.3em]">
              © 2026 Bangalore Vibecoders Association.
            </p>
            <div className="flex gap-8 text-brand-grey-600 text-[10px] uppercase tracking-[0.3em]">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
