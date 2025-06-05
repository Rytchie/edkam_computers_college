
import React from 'react';
import Button from './Button';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [formError, setFormError] = React.useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null); 
    setIsSubmitted(false); 

    if (!formData.name || !formData.email || !formData.message) {
      setFormError('Please fill in all fields.');
      return;
    }

    const recipient = 'edkamcomputerstrainingcollege@gmail.com';
    const subject = encodeURIComponent(`Contact Form Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
`Hello Edkam Computers Training College,

You have a new inquiry from your website contact form:

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

---
This email was pre-filled by the contact form on your website.
`
    );

    const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;

    try {
      window.location.href = mailtoLink;
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: ''}); 

      setTimeout(() => setIsSubmitted(false), 7000);
    } catch (error) {
      console.error("Failed to open email client:", error);
      setFormError("Could not open your email client. Please copy the details manually or try again.");
    }
  };

  const inputClass = "mt-1 block w-full bg-slate-200 dark:bg-slate-700 border-brand-border-light dark:border-slate-600 rounded-md shadow-sm py-3 px-4 text-brand-text-light-primary dark:text-brand-light-text focus:ring-brand-accent-blue focus:border-brand-accent-blue sm:text-sm";
  const labelClass = "block text-sm font-medium text-brand-text-light-secondary dark:text-brand-secondary-text";


  return (
    <section id="contact" className="py-16 md:py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text-light-primary dark:text-white">
            Get In <span className="text-brand-accent-blue">Touch</span>
          </h2>
          <p className="mt-4 text-lg text-brand-text-light-secondary dark:text-brand-secondary-text max-w-2xl mx-auto">
            Have questions or ready to enroll? Contact us today! We're excited to help you start your tech journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div className="bg-brand-bg-light-card dark:bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl shadow-xl dark:shadow-xl animate-fade-in-up">
            <h3 className="text-2xl font-semibold text-brand-text-light-primary dark:text-white mb-6">Send us a Message</h3>
            {isSubmitted && (
              <div className="mb-4 p-4 bg-green-500/20 dark:bg-green-600/30 text-green-700 dark:text-green-300 border border-green-400 dark:border-green-500 rounded-md" role="alert">
                Your email client should open shortly with a pre-filled message. Please review and send it. If it doesn't open, please check your browser settings or manually email us.
              </div>
            )}
            {formError && (
              <div className="mb-4 p-4 bg-red-500/20 dark:bg-red-600/30 text-red-700 dark:text-red-300 border border-red-400 dark:border-red-500 rounded-md" role="alert">
                {formError}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className={labelClass}>Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  className={inputClass} 
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="message" className={labelClass}>Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  className={inputClass}
                ></textarea>
              </div>
              <div>
                <Button type="submit" variant="primary" className="w-full">Prepare Email</Button>
              </div>
            </form>
          </div>

          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-brand-bg-light-card dark:bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl shadow-xl dark:shadow-xl">
              <h3 className="text-2xl font-semibold text-brand-text-light-primary dark:text-white mb-4">Contact Information</h3>
              <ul className="space-y-3 text-brand-text-light-secondary dark:text-brand-secondary-text">
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-brand-accent-purple mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  Maili Kumi, Nakuru, Kenya
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-brand-accent-purple mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.308 1.154a11.034 11.034 0 005.37 5.37l1.153-2.308a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  <a href="tel:+254799598942" className="hover:text-brand-accent-blue">+254 (799) 598-942</a>
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-brand-accent-purple mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  <a href="mailto:edkamcomputerstrainingcollege@gmail.com" className="hover:text-brand-accent-blue break-all">edkamcomputerstrainingcollege@gmail.com</a>
                </li>
              </ul>
            </div>
             <div className="bg-brand-bg-light-card dark:bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl shadow-xl dark:shadow-xl">
                <h3 className="text-2xl font-semibold text-brand-text-light-primary dark:text-white mb-4">Visit Us</h3>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border border-brand-border-light dark:border-slate-700">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1270.434274705641!2d36.124372448964785!3d-0.1691880136933159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1829ee66f9781eed%3A0xe087c59adb55b524!2sMairu%20Kumi!5e1!3m2!1sen!2ske!4v1748611536029!5m2!1sen!2ske"
                        width="100%" 
                        height="250" 
                        style={{ border:0 }} 
                        allowFullScreen={true}
                        loading="lazy"
                        title="Google Maps Location of Edkam Computers Training College"
                        aria-label="Google Maps Location of Edkam Computers Training College"
                        className="" // Removed filter and dark mode filter classes
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
