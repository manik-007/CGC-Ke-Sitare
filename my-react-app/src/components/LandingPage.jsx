import React from 'react'
import ProblemCards from './Problem-Cards'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
                <div className="flex items-center space-x-2">
                <img src="/assets/logo.png" className="h-8 w-8" />
                <span className="text-2xl font-bold text-blue-600">CGC Ke Sitare</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">See all Sitare</a>
              
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                SignIn/SignUp 
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Connect, Collaborate, and
            <span className="text-blue-600"> Shine Together</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join CGC's premier platform where students unite to showcase talents, 
            collaborate on projects, and build lasting connections.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <h1 className='text-6xl font-bold text-blue-600 mt-2'>CGC Ke Sitare</h1>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Problems We Solve
          </h2>
          <p className="text-xl text-gray-600">
            Addressing the key challenges students face in today's academic environment
          </p>
        </div>
        <ProblemCards />
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose CGC Stars Unite?
            </h2>
            <p className="text-xl text-gray-600">
              Empowering students with the tools they need to succeed
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Showcase Talents</h3>
              <p className="text-gray-600">Display your projects, achievements, and skills to the entire CGC community</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Build Connections</h3>
              <p className="text-gray-600">Connect with like-minded peers and form lasting professional relationships</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaborate & Grow</h3>
              <p className="text-gray-600">Join projects, participate in hackathons, and grow your skills together</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Unite with CGC Stars?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of students already making their mark
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            SignUp Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">&copy; 2025 CGC Stars Unite. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage