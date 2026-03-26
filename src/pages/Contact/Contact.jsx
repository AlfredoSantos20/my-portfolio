import React from 'react';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
} from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-gradient-to-b from-blue-50 via-white to-blue-50 bg-grid-light py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent hover:from-cyan-400 hover:via-blue-400 hover:to-cyan-400 transition-all duration-500 animate-gradient font-['Poppins']">
              Get In Touch
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-3 rounded-full"></div>
          </div>
          <p className="text-center text-gray-600 mt-4 text-lg font-medium max-w-2xl mx-auto font-['Poppins']">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div data-aos="slide-right" className="space-y-5 text-sm">
            {[
              {
                icon: <FaEnvelope size={16} />,
                label: 'Email',
                value: 'alfredosantos0022@gmail.com',
              },
              {
                icon: <FaPhoneAlt size={16} />,
                label: 'Mobile Number',
                value: '+639958847884',
              },
              {
                icon: <FaMapMarkerAlt size={16} />,
                label: 'Location',
                value: 'Philippines, Nueva Ecija, Licab',
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-cyan-200">
                <div className="bg-gradient-to-br from-cyan-400 to-blue-500 text-white p-3 rounded-lg shadow-md shadow-cyan-500/30">{item.icon}</div>
                <div>
                  <h4 className="font-semibold text-gray-800 font-['Poppins']">{item.label}</h4>
                  <p className="text-gray-700 text-xs sm:text-sm font-['Poppins']">{item.value}</p>
                  {/* Insert map after Location */}
                  {item.label === 'Location' && (
                    <div className="mt-4">
                      <iframe
                        title="My Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7721.011165276148!2d120.7660914!3d15.6602389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33972fef9a83952d%3A0x86b3b1a8c72c1cb1!2sLicab%2C%20Nueva%20Ecija!5e0!3m2!1sen!2sph!4v1718778788772!5m2!1sen!2sph"
                        width="100%"
                        height="220"
                        className="rounded-lg border border-gray-200"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  )}
                </div>
              </div>
            ))}

            <div className="mt-6 bg-gradient-to-br from-white to-cyan-50 rounded-xl shadow-lg p-5 border border-cyan-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-3 text-cyan-600">
                <FaEnvelope className="mr-2" />
                <span className="font-semibold text-base font-['Poppins']">Let's connect</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 mb-4 leading-relaxed font-['Poppins']">
                I'm available for freelance work or full-time positions. Feel free to reach out for any inquiries or project discussions.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/alfredo-santos-jr-511921242"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 text-sm rounded-lg font-medium flex items-center shadow-md shadow-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300 font-['Poppins']"
                >
                  <FaLinkedin className="mr-2" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/AlfredoSantos20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-cyan-500 text-cyan-600 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white hover:border-transparent px-4 py-2 text-sm rounded-lg font-medium flex items-center shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 font-['Poppins']"
                >
                  <FaGithub className="mr-2" />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Message Form */}
          <div data-aos="slide-left" className="bg-gradient-to-br from-white to-cyan-50 rounded-xl shadow-lg p-5 sm:p-6 text-sm border border-cyan-100 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-5 text-gray-800 font-['Poppins']">Send a Message</h3>
            <form className="space-y-4">
              {[
                { label: 'Name', type: 'text', placeholder: 'Your name' },
                { label: 'Email', type: 'email', placeholder: 'Your email address' },
                { label: 'Subject', type: 'text', placeholder: 'Subject' },
              ].map((field, idx) => (
                <div key={idx}>
                  <label className="block text-xs font-medium text-gray-700 mb-1 font-['Poppins']">{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full p-3 border-2 border-gray-200 rounded-lg bg-white text-sm focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 font-['Poppins']"
                  />
                </div>
              ))}

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1 font-['Poppins']">Message</label>
                <textarea
                  rows="4"
                  placeholder="Your message"
                  className="w-full p-3 border-2 border-gray-200 rounded-lg bg-white resize-none text-sm focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 font-['Poppins']"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full mt-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-3 rounded-lg font-semibold flex justify-center items-center gap-2 text-sm shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300 font-['Poppins']"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
