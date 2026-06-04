import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FloatingSocialBar, 
  Navbar, 
  HeroSection, 
  AboutSection, 
  ModulesSection, 
  HowItWorksSection, 
  DashboardNoteSection, 
  AIFeaturesSection, 
  StatsSection, 
  TestimonialsFAQSection, 
  CTASection, 
  Footer 
} from '../components';

export default function LandingPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('smartprep_token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleModuleClick = (url) => {
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      const token = localStorage.getItem('smartprep_token');
      window.location.href = `${url}?token=${token}`;
    }
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    localStorage.removeItem('smartprep_token');
    setIsLoggedIn(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-mmcoe-maroon selection:text-white relative">
      <FloatingSocialBar />
      
      <header className="absolute top-0 w-full z-50 bg-gradient-to-b from-slate-900/95 via-slate-900/60 to-transparent pb-8 pt-2">
        <Navbar 
          isLoggedIn={isLoggedIn} 
          setIsLoggedIn={setIsLoggedIn} 
          setIsLoginModalOpen={handleLoginClick} 
        />
      </header>
      
      <HeroSection />
      <AboutSection setIsLoginModalOpen={handleLoginClick} />
      <ModulesSection handleModuleClick={handleModuleClick} />
      <HowItWorksSection />
      <DashboardNoteSection />
      <AIFeaturesSection />
      <StatsSection />
      <TestimonialsFAQSection />
      <CTASection setIsLoginModalOpen={handleLoginClick} />
      
      <Footer />
    </div>
  );
}
