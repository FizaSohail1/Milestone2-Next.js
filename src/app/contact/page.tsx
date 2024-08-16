import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function page() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center">
      <div className="border border-orange-600  p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Contact Me</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-200 text-sm  mb-2" htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Your Name" className="w-full px-3 py-2 border rounded-lg   focus:border-orange-600"/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-200 text-sm  mb-2" htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Your Email" className="w-full px-3 py-2 border rounded-lg  focus:border-orange-600"/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-200 text-sm  mb-2" htmlFor="message">Message</label>
            <textarea id="message" placeholder="Your Message" className="w-full px-3 py-2 border rounded-lg  focus:border-orange-600" rows={5}></textarea>
          </div>
          <button className="w-full bg-orange-700 text-white  py-2 px-4 rounded-lg  transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default page
