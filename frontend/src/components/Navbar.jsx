export default function Navbar({ isLoggedIn, setIsLoggedIn, setIsLoginModalOpen }) {
  return (
    <nav className="w-full transition-all duration-300 pt-2">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 flex items-center justify-between">
        
        {/* Left Side: Large College Logo */}
        <div className="flex-shrink-0">
          <img src="/logo_college.webp" alt="MMCOE Logo" className="h-16 md:h-24 w-auto object-contain drop-shadow-lg" />
        </div>
        
        {/* Right Side: Two Rows of Navigation */}
        <div className="hidden lg:flex flex-col items-end gap-3">
          
          {/* Top Row */}
          <div className="flex items-center text-[11px] xl:text-[13px] text-white/90 font-medium tracking-wide">
            <span className="flex items-center gap-1.5 cursor-default">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              +91 20 25236081
            </span>
            <span className="mx-3 text-white/40 font-light">|</span>
            <span className="flex items-center gap-1.5 cursor-default">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              central@mmcoe.edu.in
            </span>
            <span className="mx-3 text-white/40 font-light">|</span>
            <a href="https://mmcoe.edu.in/" className="hover:text-white transition">Main Website</a>
            <span className="mx-3 text-white/40 font-light">|</span>
            <a href="#" className="hover:text-white transition">Student Portal</a>
            <span className="mx-3 text-white/40 font-light">|</span>
            
            {isLoggedIn ? (
              <button onClick={() => setIsLoggedIn(false)} className="ml-2 px-5 py-1.5 bg-mmcoe-maroon hover:bg-mmcoe-maroon-hover text-white rounded-full font-bold transition uppercase tracking-wider text-[11px] shadow-md border border-red-900">
                Logout
              </button>
            ) : (
              <button onClick={() => setIsLoginModalOpen(true)} className="ml-2 px-5 py-1.5 bg-mmcoe-maroon hover:bg-mmcoe-maroon-hover text-white rounded-full font-bold transition uppercase tracking-wider text-[11px] shadow-md border border-red-900">
                Student Login
              </button>
            )}
          </div>
          
          {/* Bottom Row */}
          <div className="flex items-center text-[14px] xl:text-[16px] font-semibold text-white tracking-wide">
            <a href="#" className="text-yellow-400 hover:text-yellow-300 transition drop-shadow-md">
              <svg className="w-4 h-4 xl:w-5 xl:h-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </a>
            <span className="mx-3 text-white/50 font-light">|</span>
            <a href="#about" className="hover:text-gray-200 transition">About SmartPrep</a>
            <span className="mx-3 text-white/50 font-light">|</span>
            <a href="#modules" className="hover:text-gray-200 transition">Ecosystem</a>
            <span className="mx-3 text-white/50 font-light">|</span>
            <a href="#stats" className="hover:text-gray-200 transition">Placements</a>
            <span className="mx-3 text-white/50 font-light">|</span>
            <a href="#contact" className="hover:text-gray-200 transition">Contact</a>
          </div>
          
        </div>
      </div>
    </nav>
  );
}