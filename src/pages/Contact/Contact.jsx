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
    <section id="contact" className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl hover:text-cyan-500 font-bold text-center text-gray-900 mb-2">
          Get In Touch
        </h2>
        <p className="text-center text-gray-600 mb-10 text-sm sm:text-base max-w-2xl mx-auto">
          Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
        </p>

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
              <div key={idx} className="flex items-start space-x-3">
                <div className="bg-cyan-100 text-cyan-700 p-2 rounded-lg">{item.icon}</div>
                <div>
                  <h4 className="font-semibold text-gray-800">{item.label}</h4>
                  <p className="text-gray-700 text-xs sm:text-sm">{item.value}</p>
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

            <div className="mt-6 bg-white rounded-xl shadow-md p-4">
              <div className="flex items-center mb-2 text-cyan-600">
                <FaEnvelope className="mr-2" />
                <span className="font-semibold text-base">Let's connect</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 mb-3 leading-relaxed">
                I'm available for freelance work or full-time positions. Feel free to reach out for any inquiries or project discussions.
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://www.linkedin.com/in/alfredo-santos-jr-511921242"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1.5 text-xs rounded-md font-medium flex items-center"
                >
                  <FaLinkedin className="mr-1" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/AlfredoSantos20?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white px-3 py-1.5 text-xs rounded-md font-medium flex items-center"
                >
                  <FaGithub className="mr-1" />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Message Form */}
          <div data-aos="slide-left" className="bg-white rounded-xl shadow-md p-4 sm:p-6 text-sm">
            <h3 className="text-base font-semibold mb-4 text-gray-800">Send a Message</h3>
            <form className="space-y-3">
              {[
                { label: 'Name', type: 'text', placeholder: 'Your name' },
                { label: 'Email', type: 'email', placeholder: 'Your email address' },
                { label: 'Subject', type: 'text', placeholder: 'Subject' },
              ].map((field, idx) => (
                <div key={idx}>
                  <label className="block text-xs font-medium text-gray-700">{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-100 text-xs sm:text-sm"
                  />
                </div>
              ))}

              <div>
                <label className="block text-xs font-medium text-gray-700">Message</label>
                <textarea
                  rows="4"
                  placeholder="Your message"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-100 resize-none text-xs sm:text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full mt-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-2 rounded-md font-medium flex justify-center items-center gap-2 text-sm"
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
