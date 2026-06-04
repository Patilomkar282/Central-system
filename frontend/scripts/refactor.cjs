const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const compDir = path.join(srcDir, 'components');

if (!fs.existsSync(compDir)) {
  fs.mkdirSync(compDir, { recursive: true });
}

const files = {
  'FloatingSocialBar.jsx': `
export const socialMediaLinks = [
  { name: 'Email', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>, color: 'bg-[#850013]', link: 'https://mmcoe.edu.in/contact-us/' },
  { name: 'Phone', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>, color: 'bg-[#022b76]', link: 'https://mmcoe.edu.in/contact-us/' },
  { name: 'Mobile', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>, color: 'bg-[#850013]', link: 'https://mmcoe.edu.in/contact-us/' },
  { name: 'Facebook', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>, color: 'bg-[#1877F2]', link: 'https://www.facebook.com/mmcoepunemh?rdid=PUGVpmlbdHUy8wEL&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DzigqEPEU%2F#' },
  { name: 'YouTube', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>, color: 'bg-[#FF0000]', link: 'https://www.youtube.com/channel/UC4ZIkZoKmyoKDNypTSM-Eqw' },
  { name: 'LinkedIn', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>, color: 'bg-[#0A66C2]', link: 'https://www.linkedin.com/school/mmcoepune/posts/?feedView=all' },
  { name: 'Podcast', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>, color: 'bg-[#6a000f]', link: 'https://mmcoe.edu.in/podcast/' },
  { name: 'Instagram', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>, color: 'bg-[#E4405F]', link: 'https://www.instagram.com/mmcoepune?igsh=MWM4b25kNDMwZWUwMA==&utm_source=ig_contact_invite' },
];

export default function FloatingSocialBar() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[90] flex flex-col shadow-lg rounded-l-md overflow-hidden">
      {socialMediaLinks.map((social, index) => (
        <a 
          key={index} 
          href={social.link} 
          className={\`w-12 h-12 flex items-center justify-center text-white \${social.color} hover:brightness-110 hover:-translate-x-1 transition-transform duration-300 relative group\`}
          title={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}
  `,
  'TopBar.jsx': `
export default function TopBar() {
  return (
    <div className="bg-mmcoe-navy text-white py-2 px-6 text-sm flex justify-between items-center hidden md:flex">
      <div className="flex gap-6">
        <span className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
          +91 20 25236081
        </span>
        <span className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          central@mmcoe.edu.in
        </span>
      </div>
      <div className="flex gap-4">
        <a href="https://mmcoe.edu.in/" className="hover:text-gray-200 transition">Main Website</a>
        <a href="#" className="hover:text-gray-200 transition">Student Portal</a>
      </div>
    </div>
  );
}
  `,
  'Navbar.jsx': `
export default function Navbar({ isLoggedIn, setIsLoggedIn, setIsLoginModalOpen }) {
  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-slate-200 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/logo_college.webp" alt="MMCOE Logo" className="w-14 h-14 object-contain" />
          <div>
            <h1 className="text-xl font-bold text-mmcoe-navy uppercase tracking-wide leading-tight">Marathwada Mitra Mandal's</h1>
            <p className="text-sm text-slate-500 font-medium">College of Engineering, Pune</p>
          </div>
        </div>
        <div className="hidden lg:flex gap-8 items-center font-medium text-slate-700">
          <a href="#about" className="hover:text-mmcoe-maroon transition">About SmartPrep</a>
          <a href="#modules" className="hover:text-mmcoe-maroon transition">Ecosystem</a>
          <a href="#stats" className="hover:text-mmcoe-maroon transition">Placements</a>
          <a href="#contact" className="hover:text-mmcoe-maroon transition">Contact</a>
        </div>
        <div>
          {isLoggedIn ? (
            <div className="flex items-center gap-4">
              <span className="hidden md:block text-sm font-semibold text-mmcoe-navy">Welcome, Student</span>
              <button onClick={() => setIsLoggedIn(false)} className="px-5 py-2 text-sm font-semibold text-white bg-slate-800 rounded hover:bg-slate-700 transition">
                Logout
              </button>
            </div>
          ) : (
            <button onClick={() => setIsLoginModalOpen(true)} className="px-6 py-2.5 text-sm font-bold text-white bg-mmcoe-maroon rounded shadow-sm hover:bg-mmcoe-maroon-hover transition-colors uppercase tracking-wider">
              Student Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
  `,
  'HeroSection.jsx': `
export default function HeroSection({ setIsLoginModalOpen }) {
  return (
    <section className="relative bg-slate-900 border-t-4 border-mmcoe-maroon overflow-hidden">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0 opacity-40">
        <source src="/introvideo.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-mmcoe-navy/95 via-mmcoe-navy/80 to-slate-900/80 z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
        <span className="inline-block py-1.5 px-4 rounded-sm bg-mmcoe-maroon/20 text-red-100 font-semibold text-xs tracking-widest uppercase mb-6 border border-mmcoe-maroon/50">
          Training & Placement Cell Initiative
        </span>
        <h2 className="text-4xl md:text-6xl font-bold text-white max-w-4xl leading-tight mb-6 tracking-tight">
          SmartPrep Central Hub
        </h2>
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mb-12 leading-relaxed">
          The official unified ecosystem for MMCOE students. Access AI-driven mock interviews, group discussions, alumni mentorship, and intelligent job matching through a single secure gateway.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button onClick={() => setIsLoginModalOpen(true)} className="px-8 py-4 text-base font-bold text-white bg-mmcoe-maroon rounded shadow hover:bg-mmcoe-maroon-hover transition-all uppercase tracking-wider">
            Access Ecosystem
          </button>
          <a href="#about" className="px-8 py-4 text-base font-bold text-white bg-transparent border border-white rounded hover:bg-white/10 transition-all uppercase tracking-wider">
            Read Guidelines
          </a>
        </div>
      </div>
    </section>
  );
}
  `,
  'AboutSection.jsx': `
export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 max-w-5xl mx-auto text-center">
      <h3 className="text-sm font-bold text-mmcoe-maroon tracking-widest uppercase mb-3">The Objective</h3>
      <h2 className="text-3xl md:text-4xl font-bold text-mmcoe-navy mb-6">Bridging the Gap Between Education & Industry</h2>
      <div className="w-24 h-1 bg-mmcoe-maroon mx-auto mb-8"></div>
      <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
        The MMCOE Training and Placement cell introduces SmartPrep to combat common challenges faced by students during placement season. By centralizing our resources, we provide a structured, data-driven approach to technical preparation, communication improvement, and professional networking.
      </p>
    </section>
  );
}
  `,
  'ModulesSection.jsx': `
export default function ModulesSection({ handleModuleClick }) {
  const modules = [
    {
      id: 'alumni',
      title: 'Alumni Connection',
      description: 'Connect with MMCOE alumni, build your network, and receive career mentorship.',
      icon: (
        <svg className="w-8 h-8 text-mmcoe-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      url: 'http://alumni.mmcoe.edu'
    },
    {
      id: 'interviews',
      title: 'AI Mock Interviews',
      description: 'Practice with AI-driven mock interviews and improve your communication skills.',
      icon: (
        <svg className="w-8 h-8 text-mmcoe-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      url: 'http://interviews.mmcoe.edu'
    },
    {
      id: 'gd',
      title: 'Group Discussions',
      description: 'Participate in virtual group discussions and get real-time qualitative feedback.',
      icon: (
        <svg className="w-8 h-8 text-mmcoe-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      url: 'http://gd.mmcoe.edu'
    },
    {
      id: 'jobs',
      title: 'Job & Resume Matching',
      description: 'Find jobs tailored to your resume using our intelligent matching algorithm.',
      icon: (
        <svg className="w-8 h-8 text-mmcoe-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      url: 'http://jobs.mmcoe.edu'
    }
  ];

  return (
    <section id="modules" className="py-20 px-6 bg-slate-100 border-y border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-sm font-bold text-mmcoe-maroon tracking-widest uppercase mb-3">Our Platforms</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-mmcoe-navy mb-4">Integrated Preparation Ecosystem</h2>
          <div className="w-24 h-1 bg-mmcoe-maroon mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modules.map((mod) => (
            <div 
              key={mod.id}
              onClick={() => handleModuleClick(mod.url)}
              className="group cursor-pointer bg-white p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden rounded"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-mmcoe-maroon transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
              
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-red-50 transition-colors">
                  {mod.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-mmcoe-navy mb-2">{mod.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{mod.description}</p>
                  <div className="inline-flex items-center text-sm font-bold text-mmcoe-maroon uppercase tracking-wide group-hover:text-mmcoe-maroon-hover">
                    Access Portal
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
  `,
  'HowItWorksSection.jsx': `
export default function HowItWorksSection() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h3 className="text-sm font-bold text-mmcoe-maroon tracking-widest uppercase mb-3">The Process</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-mmcoe-navy mb-4">Student Journey Roadmap</h2>
        <div className="w-24 h-1 bg-mmcoe-maroon mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
        <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-px bg-slate-300 -z-10"></div>
        
        <div className="bg-white p-6 relative z-10 text-center">
          <div className="w-16 h-16 mx-auto bg-mmcoe-navy text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 shadow-md border-4 border-white">1</div>
          <h3 className="text-lg font-bold text-mmcoe-navy mb-3">Authentication</h3>
          <p className="text-slate-600 text-sm">Secure login via OTP ensures that the platform remains exclusive to verified MMCOE students and alumni.</p>
        </div>
        
        <div className="bg-white p-6 relative z-10 text-center">
          <div className="w-16 h-16 mx-auto bg-mmcoe-navy text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 shadow-md border-4 border-white">2</div>
          <h3 className="text-lg font-bold text-mmcoe-navy mb-3">Preparation</h3>
          <p className="text-slate-600 text-sm">Utilize AI-driven mock interviews and group discussions to hone technical and soft skills.</p>
        </div>

        <div className="bg-white p-6 relative z-10 text-center">
          <div className="w-16 h-16 mx-auto bg-mmcoe-maroon text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 shadow-md border-4 border-white">3</div>
          <h3 className="text-lg font-bold text-mmcoe-navy mb-3">Placement</h3>
          <p className="text-slate-600 text-sm">Connect with alumni for referrals and apply directly to tailored job postings.</p>
        </div>
      </div>
    </section>
  );
}
  `,
  'DashboardNoteSection.jsx': `
export default function DashboardNoteSection() {
  return (
    <section className="py-24 px-6 bg-mmcoe-navy text-white text-center">
      <div className="max-w-4xl mx-auto">
        <svg className="w-16 h-16 mx-auto text-mmcoe-maroon mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Centralized Identity Management</h2>
        <p className="text-lg text-slate-300 leading-relaxed mb-10">
          A single, highly secure authentication gateway acts as the backbone of the SmartPrep ecosystem. Eliminate the need for multiple accounts and ensure absolute data privacy under the jurisdiction of the MMCOE administration.
        </p>
      </div>
    </section>
  );
}
  `,
  'AIFeaturesSection.jsx': `
export default function AIFeaturesSection() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <div>
            <h3 className="text-sm font-bold text-mmcoe-maroon tracking-widest uppercase mb-3">Technology</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-mmcoe-navy">Powered by Advanced Analytics</h2>
            <div className="w-24 h-1 bg-mmcoe-maroon mt-4"></div>
          </div>
          <div className="space-y-8">
            <div className="flex gap-5">
              <div className="mt-1 w-12 h-12 bg-slate-100 border border-slate-200 text-mmcoe-navy rounded flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-800">Automated Sentiment & Confidence Analysis</h4>
                <p className="text-slate-600 mt-2 text-sm leading-relaxed">Our proprietary AI evaluates vocal tone, speech rate, and facial expressions during mock interviews to provide objective feedback on soft skills.</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="mt-1 w-12 h-12 bg-slate-100 border border-slate-200 text-mmcoe-maroon rounded flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-800">Smart Resume ATS Matching</h4>
                <p className="text-slate-600 mt-2 text-sm leading-relaxed">Automatically parses resumes against corporate job descriptions, highlighting keyword gaps to ensure maximum Application Tracking System compatibility.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full bg-slate-100 border border-slate-200 rounded p-8 flex items-center justify-center shadow-inner min-h-[400px]">
           <div className="text-slate-400 font-medium flex flex-col items-center">
             <svg className="w-16 h-16 mb-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
             Data Analytics Visualization Region
           </div>
        </div>
      </div>
    </section>
  );
}
  `,
  'StatsSection.jsx': `
export default function StatsSection() {
  return (
    <section id="stats" className="py-16 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
        <div>
          <div className="text-4xl md:text-5xl font-black text-mmcoe-navy mb-2 tracking-tighter">500+</div>
          <div className="text-slate-500 font-medium uppercase text-xs tracking-wider">Active Alumni</div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-black text-mmcoe-navy mb-2 tracking-tighter">10k+</div>
          <div className="text-slate-500 font-medium uppercase text-xs tracking-wider">Mock Sessions</div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-black text-mmcoe-maroon mb-2 tracking-tighter">95%</div>
          <div className="text-slate-500 font-medium uppercase text-xs tracking-wider">Placement Rate</div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-black text-mmcoe-navy mb-2 tracking-tighter">24/7</div>
          <div className="text-slate-500 font-medium uppercase text-xs tracking-wider">Platform Uptime</div>
        </div>
      </div>
    </section>
  );
}
  `,
  'TestimonialsFAQSection.jsx': `
export default function TestimonialsFAQSection() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
      <div>
        <h3 className="text-sm font-bold text-mmcoe-maroon tracking-widest uppercase mb-3">Feedback</h3>
        <h2 className="text-3xl font-bold text-mmcoe-navy mb-8">Student Experiences</h2>
        <div className="space-y-6">
          <div className="bg-slate-50 p-6 border-l-4 border-mmcoe-maroon">
            <p className="text-slate-700 italic mb-4 text-sm">"The strict technical environment of SmartPrep helped me acclimate to actual corporate interview stress. The precise feedback on my tone was invaluable."</p>
            <h5 className="font-bold text-slate-900 text-sm">Siddharth K.</h5>
            <p className="text-xs text-slate-500">Computer Engineering</p>
          </div>
          <div className="bg-slate-50 p-6 border-l-4 border-mmcoe-navy">
            <p className="text-slate-700 italic mb-4 text-sm">"Connecting with MMCOE alumni working at top MNCs gave me the exact roadmap I needed for my final year preparations."</p>
            <h5 className="font-bold text-slate-900 text-sm">Priya M.</h5>
            <p className="text-xs text-slate-500">Information Technology</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-bold text-mmcoe-maroon tracking-widest uppercase mb-3">Information</h3>
        <h2 className="text-3xl font-bold text-mmcoe-navy mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: 'Who is eligible to use SmartPrep?', a: 'SmartPrep is exclusively available for current students and verified alumni of MMCOE. Registration requires administrative validation.' },
            { q: 'How does the Central Hub handle security?', a: 'The Hub utilizes JSON Web Tokens (JWT) and an OTP-based authentication model, ensuring enterprise-grade data protection within the college ecosystem.' },
            { q: 'Can I access the modules directly?', a: 'No. All modules require authentication through this Central Hub to guarantee security and proper data synchronization.' }
          ].map((faq, i) => (
            <div key={i} className="border border-slate-200 rounded bg-white p-5">
              <h4 className="text-sm font-bold text-slate-800 mb-2">{faq.q}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
  `,
  'CTASection.jsx': `
export default function CTASection({ setIsLoginModalOpen }) {
  return (
    <section className="py-20 px-6 bg-mmcoe-maroon text-white text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Commence Your Preparation</h2>
        <p className="text-lg text-red-100 mb-10 leading-relaxed">
          Ensure you are logged in to the Central Hub to gain immediate access to the entire suite of SmartPrep resources provided by the Training & Placement Cell.
        </p>
        <button onClick={() => setIsLoginModalOpen(true)} className="px-10 py-4 text-sm font-bold text-mmcoe-maroon bg-white rounded shadow-lg hover:bg-slate-100 transition-all uppercase tracking-widest">
          Authenticate / Log In
        </button>
      </div>
    </section>
  );
}
  `,
  'Footer.jsx': `
import { socialMediaLinks } from './FloatingSocialBar';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-400 py-12 px-6 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 border-b border-slate-800 pb-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo_college.webp" alt="MMCOE Logo" className="w-12 h-12 object-contain bg-white rounded p-1" />
            <div>
              <span className="text-lg font-bold text-white block">SmartPrep</span>
              <span className="text-xs uppercase tracking-widest text-slate-500">Central Hub</span>
            </div>
          </div>
          <p className="mb-4 max-w-sm leading-relaxed">The official placement preparation ecosystem developed specifically for Marathwada Mitra Mandal's College of Engineering, Pune.</p>
          <div className="flex gap-2 mt-6 flex-wrap">
            {socialMediaLinks.map((social, idx) => (
              <a 
                key={idx} 
                href={social.link} 
                target="_blank" 
                rel="noreferrer"
                className={\`w-8 h-8 rounded-full flex items-center justify-center text-white \${social.color} hover:opacity-80 transition-opacity\`}
                title={social.name}
              >
                <div className="scale-75">{social.icon}</div>
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Navigation</h4>
          <ul className="space-y-3">
            <li><a href="#about" className="hover:text-white transition">About SmartPrep</a></li>
            <li><a href="#modules" className="hover:text-white transition">Platform Ecosystem</a></li>
            <li><a href="#stats" className="hover:text-white transition">Placement Statistics</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Contact & Legal</h4>
          <ul className="space-y-3">
            <li>Sr.No. 18, Plot No. 5/3, Karvenagar, Pune 411052</li>
            <li><a href="mailto:central@mmcoe.edu.in" className="hover:text-white transition">central@mmcoe.edu.in</a></li>
            <li className="pt-2"><a href="#" className="hover:text-white transition underline">Data Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>&copy; {new Date().getFullYear()} Marathwada Mitra Mandal's College of Engineering. All rights reserved.</p>
        <p>Managed by T&P Cell, MMCOE</p>
      </div>
    </footer>
  );
}
  `,
  'LoginModal.jsx': `
export default function LoginModal({ isLoginModalOpen, setIsLoginModalOpen, step, setStep, phoneNumber, setPhoneNumber, otp, setOtp, handleLogin }) {
  if (!isLoginModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4">
      <div className="bg-white rounded-md shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-mmcoe-navy p-6 flex justify-between items-center border-b border-mmcoe-navy-hover">
          <div className="flex items-center gap-3">
             <img src="/logo_college.webp" alt="MMCOE Logo" className="w-8 h-8 object-contain bg-white rounded-sm p-0.5" />
             <h2 className="text-lg font-bold text-white">Student Authentication</h2>
          </div>
          <button 
            onClick={() => { setIsLoginModalOpen(false); setStep(1); }}
            className="text-slate-300 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-8">
          
          <p className="text-slate-600 mb-8 text-sm leading-relaxed border-l-2 border-mmcoe-maroon pl-4">
            {step === 1 
              ? 'Access to the SmartPrep ecosystem is strictly monitored. Please authenticate using your registered mobile number.' 
              : \`An authentication code has been dispatched to \${phoneNumber}.\`
            }
          </p>

          <form onSubmit={handleLogin} className="space-y-6">
            {step === 1 ? (
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Registered Mobile Number</label>
                <input 
                  type="tel" 
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+91"
                  className="w-full px-4 py-3 rounded border border-slate-300 focus:border-mmcoe-navy focus:ring-1 focus:ring-mmcoe-navy outline-none transition-all text-slate-900"
                  required
                />
              </div>
            ) : (
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">One-Time Password (OTP)</label>
                <input 
                  type="text" 
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="• • • •"
                  className="w-full px-4 py-3 rounded border border-slate-300 focus:border-mmcoe-navy focus:ring-1 focus:ring-mmcoe-navy outline-none transition-all text-center tracking-[1em] text-xl font-bold text-slate-900"
                  required
                  maxLength={4}
                />
              </div>
            )}

            <button 
              type="submit"
              className="w-full py-3.5 px-4 bg-mmcoe-maroon hover:bg-mmcoe-maroon-hover text-white font-bold rounded shadow transition-all uppercase tracking-widest text-sm"
            >
              {step === 1 ? 'Request OTP' : 'Verify Identity'}
            </button>
          </form>
        </div>
        <div className="bg-slate-50 px-8 py-4 border-t border-slate-200 text-center">
          <p className="text-xs font-medium text-slate-500 flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Secure Environment • MMCOE Admin
          </p>
        </div>
      </div>
    </div>
  );
}
  `,
  'index.js': `
export { default as FloatingSocialBar } from './FloatingSocialBar';
export { default as TopBar } from './TopBar';
export { default as Navbar } from './Navbar';
export { default as HeroSection } from './HeroSection';
export { default as AboutSection } from './AboutSection';
export { default as ModulesSection } from './ModulesSection';
export { default as HowItWorksSection } from './HowItWorksSection';
export { default as DashboardNoteSection } from './DashboardNoteSection';
export { default as AIFeaturesSection } from './AIFeaturesSection';
export { default as StatsSection } from './StatsSection';
export { default as TestimonialsFAQSection } from './TestimonialsFAQSection';
export { default as CTASection } from './CTASection';
export { default as Footer } from './Footer';
export { default as LoginModal } from './LoginModal';
  `
};

for (const [filename, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(compDir, filename), content.trim());
}

console.log('Components created successfully.');
