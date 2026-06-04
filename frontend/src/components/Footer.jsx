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
                className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${social.color} hover:opacity-80 transition-opacity`}
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