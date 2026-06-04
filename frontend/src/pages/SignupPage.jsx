import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const API_URL = 'http://localhost:5000/api/auth';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'student',
    department: '',
    graduationYear: ''
  });
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setAuthError('');
    
    try {
      const res = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      
      if (data.success) {
        setStep(2);
      } else {
        setAuthError(data.message || 'Failed to initiate registration');
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
        body: JSON.stringify({ email: formData.email, otp })
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
      <div className="hidden lg:flex lg:w-1/2 bg-mmcoe-maroon flex-col justify-between p-12 relative overflow-hidden">
        <div className="relative z-10">
          <Link to="/" className="flex items-center gap-3 w-fit hover:opacity-80 transition-opacity">
            <img src="/mmcoelogoimage.png" alt="MMCOE Logo" className="w-10 h-10 bg-white rounded-sm p-1" />
            <span className="text-white font-bold text-xl tracking-wide">SmartPrep Central</span>
          </Link>
          <div className="mt-24">
            <h1 className="text-4xl font-bold text-white leading-tight mb-6">Join the Ecosystem</h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-md">
              Create your unified profile to access the Alumni Network, AI Mock Interviews, and Group Discussion platforms all from one secure account.
            </p>
          </div>
        </div>
        
        {/* Background Decorative Blob */}
        <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-mmcoe-navy rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      </div>

      {/* Right Signup Panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white shadow-[-20px_0_40px_rgba(0,0,0,0.05)] z-10">
        <div className="w-full max-w-md">
          
          <div className="mb-8 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Create Account</h2>
            <p className="text-slate-500">
              Already registered? <Link to="/login" className="text-mmcoe-navy font-semibold hover:underline">Sign in here</Link>
            </p>
          </div>

          {authError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 text-sm rounded-md font-medium flex items-start gap-2">
              <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              {authError}
            </div>
          )}

          <form onSubmit={step === 1 ? handleRegister : handleVerifyOtp} className="space-y-5">
            {step === 1 ? (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded border border-slate-300 focus:border-mmcoe-maroon focus:ring-1 focus:ring-mmcoe-maroon outline-none transition-all text-slate-900 bg-slate-50"
                      required
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">College Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="student@mmcoe.edu.in"
                      className="w-full px-4 py-3 rounded border border-slate-300 focus:border-mmcoe-maroon focus:ring-1 focus:ring-mmcoe-maroon outline-none transition-all text-slate-900 bg-slate-50"
                      required
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Role</label>
                    <select 
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded border border-slate-300 focus:border-mmcoe-maroon focus:ring-1 focus:ring-mmcoe-maroon outline-none transition-all text-slate-900 bg-slate-50"
                    >
                      <option value="student">Current Student</option>
                      <option value="alumni">Alumni</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Department</label>
                    <input 
                      type="text" 
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      placeholder="e.g. Computer"
                      className="w-full px-4 py-3 rounded border border-slate-300 focus:border-mmcoe-maroon focus:ring-1 focus:ring-mmcoe-maroon outline-none transition-all text-slate-900 bg-slate-50"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Grad Year</label>
                    <input 
                      type="number" 
                      name="graduationYear"
                      value={formData.graduationYear}
                      onChange={handleInputChange}
                      placeholder="e.g. 2024"
                      className="w-full px-4 py-3 rounded border border-slate-300 focus:border-mmcoe-maroon focus:ring-1 focus:ring-mmcoe-maroon outline-none transition-all text-slate-900 bg-slate-50"
                      required
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                <p className="text-sm text-slate-600 mb-6 bg-amber-50 p-4 rounded-md border border-amber-200">
                  Profile created! We've sent a verification code to <span className="font-semibold text-slate-900">{formData.email}</span>.
                </p>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">One-Time Password (OTP)</label>
                <input 
                  type="text" 
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="• • • • • •"
                  className="w-full px-4 py-4 rounded border border-slate-300 focus:border-mmcoe-maroon focus:ring-1 focus:ring-mmcoe-maroon outline-none transition-all text-center tracking-[0.5em] text-2xl font-bold text-slate-900 shadow-sm"
                  required
                  maxLength={6}
                  disabled={isLoading}
                  autoFocus
                />
              </div>
            )}

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full py-4 px-4 bg-mmcoe-maroon hover:bg-mmcoe-maroon-hover disabled:bg-slate-400 text-white font-bold rounded shadow-md transition-all uppercase tracking-widest text-sm flex items-center justify-center gap-2 mt-8"
            >
              {isLoading && (
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              )}
              {step === 1 ? (isLoading ? 'Creating Profile...' : 'Continue to Verification') : (isLoading ? 'Verifying...' : 'Complete Registration')}
            </button>
          </form>
          
          <div className="mt-8 text-center">
             <Link to="/" className="text-sm font-medium text-slate-400 hover:text-slate-600 transition-colors">
               &larr; Back to Home
             </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
