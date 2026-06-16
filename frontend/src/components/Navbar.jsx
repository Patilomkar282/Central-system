import { useState, useRef, useEffect } from 'react';

export default function Navbar({ isLoggedIn, user, onLogout, setIsLoginModalOpen }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
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
              <div className="relative ml-2" ref={dropdownRef}>
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
                  className="px-4 py-1.5 bg-slate-800/80 hover:bg-slate-700 text-white rounded-full font-semibold transition tracking-wide text-[12px] shadow-md border border-slate-600 flex items-center gap-2"
                >
                  <div className="w-5 h-5 rounded-full bg-mmcoe-maroon flex items-center justify-center text-xs font-bold text-white">
                    {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                  </div>
                  <span className="truncate max-w-[120px]">{user?.name || 'User'}</span>
                  <svg className={`w-3 h-3 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-slate-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2">
                    <div className="p-4 border-b border-slate-100 bg-slate-50 text-left">
                      <p className="text-sm font-bold text-slate-800 truncate">{user?.name || 'User'}</p>
                      <p className="text-xs text-slate-500 truncate mt-0.5">{user?.email || 'No email provided'}</p>
                      {user?.role && (
                        <span className="inline-block mt-2 px-2 py-0.5 bg-mmcoe-maroon/10 text-mmcoe-maroon text-[10px] font-bold uppercase rounded-full tracking-wider">
                          {user.role}
                        </span>
                      )}
                    </div>
                    <div className="p-1">
                      <button 
                        onClick={() => { setIsDropdownOpen(false); onLogout(); }} 
                        className="w-full text-left px-4 py-2.5 text-sm text-red-600 font-semibold hover:bg-red-50 rounded-md transition-colors flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
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