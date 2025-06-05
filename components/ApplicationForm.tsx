
import React, { useState } from 'react';
import { ApplicationFormData } from '../types';
import { COURSES_DATA, APPLICATION_TYPES } from '../constants/constants';
import Button from './Button';

const initialFormData: ApplicationFormData = {
  fullName: '',
  email: '',
  phone: '',
  dateOfBirth: '',
  address: '',
  courseId: '',
  applicationType: '',
  previousInstitution: '',
  highestQualification: '',
  statementOfPurpose: '',
  cv: null,
  transcripts: null,
};

interface ApplicationFormProps {
  onCloseModal?: () => void; 
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ onCloseModal }) => {
  const [formData, setFormData] = useState<ApplicationFormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData(prev => ({...prev, [name]: null}));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    setIsSubmitted(false);

    if (!formData.fullName || !formData.email || !formData.courseId || !formData.applicationType || !formData.statementOfPurpose) {
      setFormError('Please fill in all required fields: Full Name, Email, Course, Application Type, and Statement of Purpose.');
      return;
    }

    const recipient = 'edkamcomputerstrainingcollege@gmail.com';
    const selectedCourse = COURSES_DATA.find(c => c.id === formData.courseId);
    const subject = encodeURIComponent(
      `New Application: ${selectedCourse?.title || 'Unknown Course'} - ${formData.fullName}`
    );

    const bodyParts = [
      `Hello Edkam Computers Training College,`,
      `A new application has been submitted through the website:`,
      ``,
      `== Personal Information ==`,
      `Full Name: ${formData.fullName}`,
      `Email: ${formData.email}`,
      formData.phone ? `Phone: ${formData.phone}` : null,
      formData.dateOfBirth ? `Date of Birth: ${formData.dateOfBirth}` : null,
      formData.address ? `Address:\n${formData.address}` : null,
      ``,
      `== Application Details ==`,
      `Selected Course: ${selectedCourse?.title || 'N/A'} (ID: ${formData.courseId})`,
      `Application Type: ${formData.applicationType}`,
      ``,
      `== Educational Background (Optional) ==`,
      formData.previousInstitution ? `Previous Institution: ${formData.previousInstitution}` : null,
      formData.highestQualification ? `Highest Qualification: ${formData.highestQualification}` : null,
      ``,
      `== Statement of Purpose ==`,
      formData.statementOfPurpose,
      ``,
      `== Supporting Documents ==`,
      `CV/Resume: ${formData.cv ? formData.cv.name + ' (User will need to send this manually if requested)' : 'Not provided'}`,
      `Transcripts: ${formData.transcripts ? formData.transcripts.name + ' (User will need to send this manually if requested)' : 'Not provided'}`,
      `Important: Please instruct the applicant to send any attached files separately if this application is considered further, as they cannot be attached directly via this email method.`,
      ``,
      `---`,
      `This email was pre-filled by the application form on your website.`
    ];
    
    const body = encodeURIComponent(bodyParts.filter(part => part !== null).join('\n'));
    const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;

    try {
      window.location.href = mailtoLink;
      setIsSubmitted(true);
      setFormData(initialFormData); 
      const fileInputs = document.querySelectorAll('input[type="file"]');
      fileInputs.forEach(input => (input as HTMLInputElement).value = '');

      if (onCloseModal) {
        setTimeout(() => {
          onCloseModal();
          setIsSubmitted(false); 
        }, 3000); 
      } else {
        setTimeout(() => setIsSubmitted(false), 8000); 
      }
    } catch (error) {
      console.error("Failed to open email client:", error);
      setFormError("Could not open your email client. Please copy the details manually or try again.");
    }
  };

  const inputClass = "mt-1 block w-full bg-slate-100 dark:bg-slate-700 border-brand-border-light dark:border-slate-600 rounded-md shadow-sm py-3 px-4 text-brand-text-light-primary dark:text-brand-light-text focus:ring-brand-accent-blue focus:border-brand-accent-blue sm:text-sm placeholder-slate-400 dark:placeholder-slate-500";
  const labelClass = "block text-sm font-medium text-brand-text-light-secondary dark:text-brand-secondary-text mb-1";

  return (
    <>
      <h2 id="application-modal-title" className="text-3xl sm:text-4xl font-extrabold text-brand-text-light-primary dark:text-white mb-8 text-center">
        Apply to <span className="text-brand-accent-blue">Edkam College</span>
      </h2>

      {isSubmitted && (
        <div className="mb-6 p-4 bg-green-100 dark:bg-green-600/30 text-green-700 dark:text-green-300 border border-green-300 dark:border-green-500 rounded-md" role="alert">
          Your email client should open shortly with a pre-filled application. Please review, attach any necessary documents if prompted by your client, and send it. {onCloseModal && "This window will close automatically."}
        </div>
      )}
      {formError && (
        <div className="mb-6 p-4 bg-red-100 dark:bg-red-600/30 text-red-700 dark:text-red-300 border border-red-300 dark:border-red-500 rounded-md" role="alert">
          {formError}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        <fieldset className="space-y-6 p-4 border border-brand-border-light dark:border-slate-700 rounded-lg">
          <legend className="text-xl font-semibold text-brand-text-light-primary dark:text-white px-2">Personal Information</legend>
          <div>
            <label htmlFor="fullName" className={labelClass}>Full Name <span className="text-red-500 dark:text-red-400">*</span></label>
            <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleChange} required aria-required="true" className={inputClass} placeholder="e.g. Jane Doe"/>
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>Email Address <span className="text-red-500 dark:text-red-400">*</span></label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required aria-required="true" className={inputClass} placeholder="e.g. jane.doe@example.com"/>
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>Phone Number</label>
            <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="e.g. +254 700 123456"/>
          </div>
          <div>
            <label htmlFor="dateOfBirth" className={labelClass}>Date of Birth</label>
            <input type="date" name="dateOfBirth" id="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className={`${inputClass} text-brand-text-light-secondary dark:text-brand-secondary-text`} />
          </div>
          <div>
            <label htmlFor="address" className={labelClass}>Address</label>
            <textarea name="address" id="address" rows={3} value={formData.address} onChange={handleChange} className={inputClass} placeholder="Your P.O. Box or Physical Address"></textarea>
          </div>
        </fieldset>

        <fieldset className="space-y-6 p-4 border border-brand-border-light dark:border-slate-700 rounded-lg">
          <legend className="text-xl font-semibold text-brand-text-light-primary dark:text-white px-2">Application Details</legend>
          <div>
            <label htmlFor="courseId" className={labelClass}>Select Course <span className="text-red-500 dark:text-red-400">*</span></label>
            <select name="courseId" id="courseId" value={formData.courseId} onChange={handleChange} required aria-required="true" className={`${inputClass} text-brand-text-light-secondary dark:text-brand-light-text`}>
              <option value="" disabled className="text-brand-text-light-secondary dark:text-brand-secondary-text">-- Select a Course --</option>
              {COURSES_DATA.map(course => (
                <option key={course.id} value={course.id}>{course.title}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="applicationType" className={labelClass}>Application Type <span className="text-red-500 dark:text-red-400">*</span></label>
            <select name="applicationType" id="applicationType" value={formData.applicationType} onChange={handleChange} required aria-required="true" className={`${inputClass} text-brand-text-light-secondary dark:text-brand-light-text`}>
              <option value="" disabled className="text-brand-text-light-secondary dark:text-brand-secondary-text">-- Select Application Type --</option>
              {APPLICATION_TYPES.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </fieldset>

        <fieldset className="space-y-6 p-4 border border-brand-border-light dark:border-slate-700 rounded-lg">
          <legend className="text-xl font-semibold text-brand-text-light-primary dark:text-white px-2">Educational Background (Optional)</legend>
          <div>
            <label htmlFor="previousInstitution" className={labelClass}>Previous Institution</label>
            <input type="text" name="previousInstitution" id="previousInstitution" value={formData.previousInstitution} onChange={handleChange} className={inputClass} placeholder="e.g. XYZ High School"/>
          </div>
          <div>
            <label htmlFor="highestQualification" className={labelClass}>Highest Qualification</label>
            <input type="text" name="highestQualification" id="highestQualification" value={formData.highestQualification} onChange={handleChange} className={inputClass} placeholder="e.g. KCSE, Diploma in IT"/>
          </div>
        </fieldset>

        <fieldset className="space-y-6 p-4 border border-brand-border-light dark:border-slate-700 rounded-lg">
          <legend className="text-xl font-semibold text-brand-text-light-primary dark:text-white px-2">Statement of Purpose</legend>
          <div>
            <label htmlFor="statementOfPurpose" className={labelClass}>Why are you interested in this course? <span className="text-red-500 dark:text-red-400">*</span></label>
            <textarea name="statementOfPurpose" id="statementOfPurpose" rows={5} value={formData.statementOfPurpose} onChange={handleChange} required aria-required="true" className={inputClass} placeholder="Briefly explain your motivation and goals..."></textarea>
          </div>
        </fieldset>

        <fieldset className="space-y-6 p-4 border border-brand-border-light dark:border-slate-700 rounded-lg">
          <legend className="text-xl font-semibold text-brand-text-light-primary dark:text-white px-2">Supporting Documents (Optional)</legend>
          <p className="text-sm text-brand-text-light-secondary dark:text-brand-secondary-text">Note: If your application proceeds, we may request these documents to be sent separately.</p>
          <div>
            <label htmlFor="cv" className={labelClass}>CV/Resume (PDF, DOC, DOCX)</label>
            <input type="file" name="cv" id="cv" onChange={handleFileChange} accept=".pdf,.doc,.docx" className={`${inputClass} p-0 file:mr-4 file:py-3 file:px-4 file:rounded-l-md file:border-0 file:text-sm file:font-semibold file:bg-brand-accent-purple file:text-white hover:file:bg-purple-600 cursor-pointer`} />
          </div>
          <div>
            <label htmlFor="transcripts" className={labelClass}>Academic Transcripts (PDF, JPG, PNG)</label>
            <input type="file" name="transcripts" id="transcripts" onChange={handleFileChange} accept=".pdf,.jpg,.jpeg,.png" className={`${inputClass} p-0 file:mr-4 file:py-3 file:px-4 file:rounded-l-md file:border-0 file:text-sm file:font-semibold file:bg-brand-accent-purple file:text-white hover:file:bg-purple-600 cursor-pointer`} />
          </div>
        </fieldset>

        <div>
          <Button type="submit" variant="primary" size="lg" className="w-full">Prepare Application Email</Button>
        </div>
      </form>
    </>
  );
};

export default ApplicationForm;