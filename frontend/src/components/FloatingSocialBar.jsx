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
          className={`w-12 h-12 flex items-center justify-center text-white ${social.color} hover:brightness-110 hover:-translate-x-1 transition-transform duration-300 relative group`}
          title={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}