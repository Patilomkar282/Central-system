import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL ? `${import.meta.env.VITE_API_URL}/api/auth` : 'http://localhost:5000/api/auth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState('');
  const navigate = useNavigate();

  const handleSendOtp = async (e) => {
    e.preventDefault();
    
    setIsLoading(true);
    setAuthError('');
    
    try {
      const res = await fetch(`${API_URL}/send-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      
      if (data.success) {
        setStep(2);
      } else {
        setAuthError(data.message || 'Failed to send OTP');
      }
    } catch (err) {
      setAuthError('Server connection error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setAuthError('');
    
    try {
      const res = await fetch(`${API_URL}/admin-login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password: otp }) // Reusing otp state for password for simplicity
      });
      const data = await res.json();
      
      if (data.success) {
        localStorage.setItem('smartprep_token', data.token);
        navigate('/'); // Redirect to landing page on success
      } else {
        setAuthError(data.message || 'Invalid Admin Credentials');
      }
    } catch (err) {
      setAuthError('Server connection error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setAuthError('');
    
    try {
      const res = await fetch(`${API_URL}/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp })
      });
      const data = await res.json();
      
      if (data.success) {
        localStorage.setItem('smartprep_token', data.token);
        navigate('/'); // Redirect to landing page on success
      } else {
        setAuthError(data.message || 'Invalid or Expired OTP');
      }
    } catch (err) {
      setAuthError('Server connection error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Left Branding Panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-mmcoe-navy flex-col justify-between p-12 relative overflow-hidden">
        <div className="relative z-10">
          <Link to="/" className="flex items-center gap-3 w-fit hover:opacity-80 transition-opacity">
            <img src="/mmcoelogoimage.png" alt="MMCOE Logo" className="w-10 h-10 bg-white rounded-sm p-1" />
            <span className="text-white font-bold text-xl tracking-wide">SmartPrep Central</span>
          </Link>
          <div className="mt-24">
            <h1 className="text-4xl font-bold text-white leading-tight mb-6">Welcome Back to the Ecosystem</h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-md">
              Access centralized resources, AI-powered mock interviews, and active alumni connections using your secure college credentials.
            </p>
          </div>
        </div>
        
        {/* Background Decorative Blob */}
        <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-mmcoe-maroon rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      </div>

      {/* Right Login Panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Sign In</h2>
            <p className="text-slate-500">
              Don't have an account? <Link to="/signup" className="text-mmcoe-maroon font-semibold hover:underline">Register here</Link>
            </p>
          </div>

          {authError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 text-sm rounded-md font-medium flex items-start gap-2">
              <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              {authError}
            </div>
          )}

          <form onSubmit={step === 1 ? handleSendOtp : step === 2 ? handleVerifyOtp : handleAdminLogin} className="space-y-6">
            {step === 1 ? (
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">College Email Address</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@mmcoe.edu.in"
                  className="w-full px-4 py-4 rounded border border-slate-300 focus:border-mmcoe-navy focus:ring-1 focus:ring-mmcoe-navy outline-none transition-all text-slate-900 shadow-sm"
                  required
                  disabled={isLoading}
                />
                <div className="mt-4 flex justify-end">
                  <button 
                    type="button" 
                    onClick={() => { setStep(3); setEmail(''); setOtp(''); setAuthError(''); }} 
                    className="text-xs font-bold text-mmcoe-maroon hover:text-mmcoe-navy transition-colors flex items-center gap-1 uppercase tracking-wider"
                  >
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                    Admin Login
                  </button>
                </div>
              </div>
            ) : step === 2 ? (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                <p className="text-sm text-slate-600 mb-6 bg-slate-100 p-4 rounded-md border border-slate-200">
                  We've sent a 6-digit verification code to <span className="font-semibold text-slate-900">{email}</span>.
                </p>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">One-Time Password (OTP)</label>
                <input 
                  type="text" 
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="• • • • • •"
                  className="w-full px-4 py-4 rounded border border-slate-300 focus:border-mmcoe-navy focus:ring-1 focus:ring-mmcoe-navy outline-none transition-all text-center tracking-[0.5em] text-2xl font-bold text-slate-900 shadow-sm"
                  required
                  maxLength={6}
                  disabled={isLoading}
                  autoFocus
                />
                <button 
                  type="button" 
                  onClick={() => { setStep(1); setOtp(''); setAuthError(''); }}
                  className="mt-4 text-sm font-medium text-slate-500 hover:text-mmcoe-maroon transition-colors flex items-center gap-1"
                >
                  &larr; Change Email Address
                </button>
              </div>
            ) : (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="flex items-center gap-3 mb-6 bg-amber-50 text-amber-800 p-4 rounded-md border border-amber-200">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold">Admin Authentication</p>
                    <p className="text-xs">Enter your administrator credentials.</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Admin Email</label>
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="admin@mmcoe.edu.in"
                      className="w-full px-4 py-4 rounded border border-slate-300 focus:border-mmcoe-navy focus:ring-1 focus:ring-mmcoe-navy outline-none transition-all text-slate-900 shadow-sm"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Password</label>
                    <input 
                      type="password" 
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="Enter password"
                      className="w-full px-4 py-4 rounded border border-slate-300 focus:border-mmcoe-navy focus:ring-1 focus:ring-mmcoe-navy outline-none transition-all text-slate-900 shadow-sm font-mono text-lg"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>
                
                <button 
                  type="button" 
                  onClick={() => { setStep(1); setOtp(''); setAuthError(''); setEmail(''); }}
                  className="mt-6 text-sm font-medium text-slate-500 hover:text-mmcoe-maroon transition-colors flex items-center gap-1"
                >
                  &larr; Back to Student Login
                </button>
              </div>
            )}

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full py-4 px-4 bg-mmcoe-navy hover:bg-mmcoe-navy-hover disabled:bg-slate-400 text-white font-bold rounded shadow-md transition-all uppercase tracking-widest text-sm flex items-center justify-center gap-2 mt-8"
            >
              {isLoading && (
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              )}
              {step === 1 ? (isLoading ? 'Processing...' : 'Continue with Email') : step === 2 ? (isLoading ? 'Verifying...' : 'Verify & Login') : (isLoading ? 'Authenticating...' : 'Login as Admin')}
            </button>
          </form>
          
          <div className="mt-12 text-center">
             <Link to="/" className="text-sm font-medium text-slate-400 hover:text-slate-600 transition-colors">
               &larr; Back to Home
             </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
