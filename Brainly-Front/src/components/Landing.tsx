import React from "react";
import { Brain, Plus, Twitter, Youtube, Instagram, Bookmark, Share2, Tags } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                SecondBrain
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <button
                onClick={() => navigate("/signup")}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                Signup
              </button>
              <button
                onClick={() => navigate("/signin")}
                className="border border-purple-600 text-purple-600 px-6 py-2 rounded-full hover:scale-105 transition-all duration-200"
              >
                Signin
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Digital
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent block">
                Second Brain
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Capture, organize, and revisit your thoughts, ideas, and discoveries from across the web. 
              Save content from Twitter, Instagram, YouTube, and more in one beautiful, searchable dashboard.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigate("/signup")}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <Plus className="h-5 w-5" />
                Start Building Your Brain
              </button>
            </div>
          </div>

          {/* Platform Icons */}
          <div className="flex justify-center items-center gap-8 mb-16 opacity-60">
            <div className="flex items-center gap-2 text-gray-500">
              <Twitter className="h-8 w-8" />
              <span className="font-medium">Twitter</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Youtube className="h-8 w-8" />
              <span className="font-medium">YouTube</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Instagram className="h-8 w-8" />
              <span className="font-medium">Instagram</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Bookmark className="h-8 w-8" />
              <span className="font-medium">More</span>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-6xl mx-auto border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Your Dashboard</h3>
              <div className="flex items-center gap-3">
                <button onClick={() => navigate("/signup")} className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                
                
                  <Plus className="h-4 w-4" />
                  Add content
                </button>
                <button className="text-gray-600 hover:text-gray-800 flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <Share2 className="h-4 w-4" />
                  Share brain
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Content Cards */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <Tags className="h-4 w-4 text-purple-600" />
                  <span className="text-sm font-medium text-purple-600">Tech Insights</span>
                </div>
                <div className="bg-white rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                    <div>
                      <div className="font-medium text-gray-900">@techguru</div>
                      <div className="text-sm text-gray-500">Twitter</div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3">Amazing breakthrough in AI technology that will change everything...</p>
                  <div className="text-xs text-gray-500">2 hours ago</div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <Tags className="h-4 w-4 text-red-600" />
                  <span className="text-sm font-medium text-red-600">YouTube</span>
                </div>
                <div className="bg-white rounded-lg p-4 mb-4">
                  <div className="w-full h-24 bg-red-100 rounded-lg mb-3 flex items-center justify-center">
                    <Youtube className="h-8 w-8 text-red-600" />
                  </div>
                  <div className="font-medium text-gray-900 mb-2">How to Build Better Habits</div>
                  <div className="text-xs text-gray-500">1 day ago</div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <Tags className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-green-600">Productivity</span>
                </div>
                <div className="bg-white rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    <div>
                      <div className="font-medium text-gray-900">@productivity_pro</div>
                      <div className="text-sm text-gray-500">Instagram</div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3">5 morning routines that successful people swear by...</p>
                  <div className="text-xs text-gray-500">3 days ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 sm:px-8 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Your Second Brain?
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Join thousands of knowledge workers who have transformed how they capture and organize information.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate("/signup")}
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-800 py-12 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-gray-500 ">SecondBrain</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>&copy; 2025 SecondBrain. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
