
import React from 'react';
import Button from './Button';

const ContactSection: React.FC = () => {
  // Basic form state, can be expanded
  const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (formData.name && formData.email && formData.message) {
      // Here you would typically send the data to a backend
      console.log('Form data submitted:', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: ''}); // Reset form
      // Hide success message after some time
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      alert('Please fill in all fields.');
    }
  };


  return (
    <section id="contact" className="py-16 md:py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Get In <span className="text-brand-accent-blue">Touch</span>
          </h2>
          <p className="mt-4 text-lg text-brand-secondary-text max-w-2xl mx-auto">
            Have questions or ready to enroll? Contact us today! We're excited to help you start your tech journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl shadow-xl animate-fade-in-up">
            <h3 className="text-2xl font-semibold text-white mb-6">Send us a Message</h3>
            {isSubmitted && (
              <div className="mb-4 p-4 bg-green-600/30 text-green-300 border border-green-500 rounded-md">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-secondary-text">Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full bg-slate-700 border-slate-600 rounded-md shadow-sm py-3 px-4 text-brand-light-text focus:ring-brand-accent-blue focus:border-brand-accent-blue sm:text-sm" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-secondary-text">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full bg-slate-700 border-slate-600 rounded-md shadow-sm py-3 px-4 text-brand-light-text focus:ring-brand-accent-blue focus:border-brand-accent-blue sm:text-sm" 
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-secondary-text">Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full bg-slate-700 border-slate-600 rounded-md shadow-sm py-3 px-4 text-brand-light-text focus:ring-brand-accent-blue focus:border-brand-accent-blue sm:text-sm"
                ></textarea>
              </div>
              <div>
                <Button type="submit" variant="primary" className="w-full">Send Message</Button>
              </div>
            </form>
          </div>

          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl shadow-xl">
              <h3 className="text-2xl font-semibold text-white mb-4">Contact Information</h3>
              <ul className="space-y-3 text-brand-secondary-text">
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-brand-accent-purple mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  Maili Kumi, Nakuru, Kenya
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-brand-accent-purple mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.308 1.154a11.034 11.034 0 005.37 5.37l1.153-2.308a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  +254 (799) 598-942
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-brand-accent-purple mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  edkamcomputerstrainingcollege@gmail.com
                </li>
              </ul>
            </div>
             <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl shadow-xl">
                <h3 className="text-2xl font-semibold text-white mb-4">Visit Us</h3>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1270.434274705641!2d36.124372448964785!3d-0.1691880136933159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1829ee66f9781eed%3A0xe087c59adb55b524!2sMairu%20Kumi!5e1!3m2!1sen!2ske!4v1748611536029!5m2!1sen!2ske"
                        width="100%" 
                        height="250" 
                        style={{ border:0 }} 
                        allowFullScreen={true}
                        loading="lazy"
                        title="Google Maps Location of Edkam Computers (Placeholder)"
                    ></iframe>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
