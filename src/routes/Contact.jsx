import React from 'react'
import Navbar from '../Components/Navbar';
import { ThemeProvider } from '../Components/ThemeContext';


function Contact() {

  const pageLinks= "Contact";

    return (
      <ThemeProvider>
      <div>
        <Navbar pageLinks="Contact"/>
      <div className="flex flex-col items-center p-8">
        
        {/* Contact Header */}
        <h1 className="text-4xl font-bold text-center my-8">Contact Me</h1>
  
        {/* Contact Information Section */}
        <div  className="w-full max-w-lg bg-slate-600 custom-shadow rounded-lg p-6 space-y-4 svgback">
        <h2 className="text-2xl font-semibold mb-2 text-slate-300 text-center p-4 strong">Digital Business Card</h2> 
        <div className="text-lg space-y-2">
          <div className="flex items-center justify-between">
            <strong className=" text-slate-300">Phone:</strong>
            <a href="tel:+270781295665" className=" text-slate-300">+27 078 129 5665</a>
          </div>
          <div className="flex items-center justify-between">
            <strong className=" text-slate-300">Email:</strong>
            <a href="mailto:Mr.kuya@outlook.com" className="text-slate-300">Mr.kuya@outlook.com</a>
          </div>
          <div className="flex items-center justify-between">
            <strong className=" text-slate-300">LinkedIn:</strong>
            <a href="https://www.linkedin.com/in/kasansa-k-29a438134/" target="_blank" className="text-teal-500 hover:underline" rel="noopener noreferrer">LinkedIn Profile</a>
          </div>
        </div>
  
          {/* Download Digital Business Card Section */}
          <div className="mt-6">
            
            <p className="mb-4 text-gray-600 text-center">Download my contact details as a vCard for your phone.</p>
            <a
              href="KasansaKuya.vcf"
              download="Kasansa_business_card.vcf"
              className="btn btn-primary w-1/2 m-auto bg-teal-950 h-auto p-2 text-white flex justify-center items-center flex-col"
            >
              <p>Download vCard</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4M4 4l16 0M12 12v6M8 18h8" />
              </svg>
            </a>
          </div>
        </div>
        
        
      </div>
    </div>
    </ThemeProvider>
    );
  }

export default Contact