import React, { useState } from 'react';
import { PiStudentFill } from 'react-icons/pi'
import { Eye, EyeOff, ChevronDown, Shield, Lock, CheckCircle, GraduationCap } from 'lucide-react';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../../Firebase/auth';
import { useAuth } from '../../../Context/AuthContext';
import { FcGoogle } from 'react-icons/fc';

export default function SmartPresenceLogin() {
  const { userLoggedIn } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!isSigningIn) {
      setIsSigningIn(true);
      const user = await doSignInWithEmailAndPassword(email, password)
      console.log("User ", user);
    }
  }

  const onGoogleSignIn = (e) => {
    e.preventDefault();
    if(!isSigningIn) {
      setIsSigningIn(true)
      const user = doSignInWithGoogle().catch(err => {
        setIsSigningIn(false)
      })
      console.log("User ", user);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex p-10">

      {/* Left Side - Login Form */}
      <div className="flex-1 flex items-center justify-center px-8">
        <div className="w-full max-w-md">
          {/* Logo and Title */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <PiStudentFill className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">SmartPresence</h1>
            <p className="text-gray-600">Streamlined Attendance Management</p>
          </div>

          {/* Welcome Back Section */}
          <div className="mb-8">
            <h2 className="text-2xl text-center font-semibold text-gray-900 mb-3">Welcome Back</h2>
            <p className="text-gray-600 text-center">
              Sign in to your account to access attendance tracking and<br />
              class management
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="collegeId" className="block text-sm font-medium text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              onClick={() => console.log('Sign In clicked')}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Sign In
            </button>

            <div className="text-center">
              <button className="text-blue-600 hover:text-blue-700 text-sm">
                Forgot your password?
              </button>
            </div>
          </form>
          <hr className='my-5 text-gray-500'/>
              <button onClick={onGoogleSignIn} className="text-xl w-full cursor-pointer hover:bg-[#6666] shadow-2xl border border-[#6666] flex items-center rounded-2xl justify-center p-3 gap-3">
                <FcGoogle className='text-2xl'/> Sign In with Google
              </button>
        </div>
      </div>

      {/* Right Side - Features */}
      <div className="flex-1 bg-white md:flex items-center justify-center px-8 hidden">
        <div className="max-w-lg text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Modern Attendance Management</h2>
          <p className="text-gray-600 text-lg mb-12 leading-relaxed">
            Experience seamless QR code-based attendance tracking designed for the digital age. 
            Quick, secure, and efficient for both students and faculty.
          </p>

          {/* Features */}
          <div className="space-y-8 mb-12">
            <div className="flex items-start text-left">
              <div className="w-6 h-6 bg-blue-600 rounded mr-4 flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Instant QR Scanning</h3>
                <p className="text-gray-600">Mark attendance in seconds with your mobile device camera</p>
              </div>
            </div>

            <div className="flex items-start text-left">
              <div className="w-6 h-6 bg-green-600 rounded mr-4 flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Real-time Tracking</h3>
                <p className="text-gray-600">Live attendance monitoring and comprehensive analytics</p>
              </div>
            </div>

            <div className="flex items-start text-left">
              <div className="w-6 h-6 bg-cyan-500 rounded mr-4 flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Mobile Optimized</h3>
                <p className="text-gray-600">Designed for smartphones with touch-friendly interfaces</p>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="border-t pt-8">
            <p className="text-gray-700 font-semibold mb-6">Trusted by Educational Institutions</p>
            <div className="flex justify-center space-x-12">
              <div className="text-center">
                <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Secure Authentication</h4>
                <p className="text-gray-600 text-xs">Your credentials are protected with industry-standard encryption</p>
              </div>
              <div className="text-center">
                <Lock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Privacy Protected</h4>
                <p className="text-gray-600 text-xs">Your attendance data is kept confidential and secure</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Verified Access</h4>
                <p className="text-gray-600 text-xs">Only authorized college students and faculty can access the system</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}