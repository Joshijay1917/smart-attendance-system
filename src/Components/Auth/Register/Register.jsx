import React, { useState } from 'react';
import { PiStudentFill } from 'react-icons/pi'
import { Eye, EyeOff, ChevronDown, Shield, Lock, CheckCircle, GraduationCap } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';

export default function SmartPresenceLogin() {
  // const { userLoggedIn } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!isSigningIn) {
      setIsSigningIn(true);
      // const user = await doSignInWithEmailAndPassword(email, password)
      // console.log("User ", user);
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
            <h2 className="text-2xl text-center font-semibold text-gray-900 mb-3">Welcome!!</h2>
            <p className="text-gray-600 text-center">
              Register to access attendance tracking and<br />
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
              Register
            </button>

            <div className="text-center">
              <button className="text-blue-600 hover:text-blue-700 text-sm">
                Already have account?
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}