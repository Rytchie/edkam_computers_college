import React, { useState } from 'react';
import Button from '../../Button';
import { UserCircleIcon, PencilIcon, CogIcon, UploadIcon } from '../../../constants/constants';

interface ProfileSectionProps {
  studentId: string;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ studentId }) => {
  const [activeSubTab, setActiveSubTab] = useState<'personal' | 'security' | 'settings'>('personal');
  
  // Dummy data
  const [profileData, setProfileData] = useState({
    fullName: 'Jane Doe', // Would be fetched based on studentId
    email: `${studentId}@example.com`, // Placeholder
    phone: '+254 700 123456',
    address: 'P.O. Box 123, Nakuru',
    avatarUrl: 'https://picsum.photos/seed/student_avatar/200/200' // Placeholder avatar
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const ProfileField: React.FC<{ label: string; value: string; name: keyof typeof profileData; type?: string; isTextarea?: boolean }> = 
  ({ label, value, name, type = "text", isTextarea = false }) => (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-brand-text-light-secondary dark:text-brand-secondary-text mb-1">{label}</label>
      {isEditing ? (
        isTextarea ? (
          <textarea 
            id={name} 
            name={name} 
            value={value} 
            onChange={handleInputChange}
            rows={3}
            className="w-full p-2 border border-brand-border-light dark:border-slate-600 rounded bg-slate-100 dark:bg-slate-700 text-brand-text-light-primary dark:text-brand-light-text focus:ring-brand-accent-blue focus:border-brand-accent-blue" 
          />
        ) : (
          <input 
            type={type} 
            id={name} 
            name={name} 
            value={value} 
            onChange={handleInputChange}
            className="w-full p-2 border border-brand-border-light dark:border-slate-600 rounded bg-slate-100 dark:bg-slate-700 text-brand-text-light-primary dark:text-brand-light-text focus:ring-brand-accent-blue focus:border-brand-accent-blue" 
          />
        )
      ) : (
        <p className="text-brand-text-light-primary dark:text-brand-light-text py-2">{value || '-'}</p>
      )}
    </div>
  );


  const renderSubTabContent = () => {
    switch (activeSubTab) {
      case 'personal':
        return (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="relative">
                <img 
                    src={profileData.avatarUrl || `https://ui-avatars.com/api/?name=${profileData.fullName.replace(' ','+')}&background=random&size=128`} 
                    alt="Student Avatar" 
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover shadow-md border-2 border-brand-accent-purple"
                />
                {isEditing && (
                    <label htmlFor="avatarUpload" className="absolute bottom-0 right-0 bg-brand-accent-blue text-white p-2 rounded-full cursor-pointer hover:bg-blue-500 transition-colors">
                        <UploadIcon className="w-4 h-4" />
                        <input type="file" id="avatarUpload" className="hidden" onChange={() => alert("Avatar upload (placeholder)")} />
                    </label>
                )}
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-brand-text-light-primary dark:text-white">{profileData.fullName}</h3>
                <p className="text-brand-text-light-secondary dark:text-brand-secondary-text">Student ID: {studentId}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 border-t border-brand-border-light dark:border-slate-700 pt-6">
              <ProfileField label="Full Name" name="fullName" value={profileData.fullName} />
              <ProfileField label="Email Address" name="email" value={profileData.email} type="email" />
              <ProfileField label="Phone Number" name="phone" value={profileData.phone} type="tel" />
              <ProfileField label="Address" name="address" value={profileData.address} isTextarea={true} />
            </div>
            <div className="flex justify-end mt-4">
                {isEditing ? (
                    <div className="space-x-2">
                        <Button variant="outline" onClick={() => { setIsEditing(false); /* TODO: Reset changes or refetch data */ }}>Cancel</Button>
                        <Button variant="primary" onClick={() => { setIsEditing(false); alert('Profile Saved (placeholder)'); }}>Save Changes</Button>
                    </div>
                ) : (
                    <Button variant="primary" onClick={() => setIsEditing(true)} >
                        <PencilIcon className="w-4 h-4 mr-2"/> Edit Profile
                    </Button>
                )}
            </div>
          </div>
        );
      case 'security':
        return (
          <div className="max-w-md space-y-4">
            <h3 className="text-xl font-semibold text-brand-text-light-primary dark:text-white mb-3">Change Password</h3>
            <div>
              <label htmlFor="currentPassword" className="block text-sm font-medium text-brand-text-light-secondary dark:text-brand-secondary-text mb-1">Current Password</label>
              <input type="password" id="currentPassword" name="currentPassword" className="w-full p-2 border border-brand-border-light dark:border-slate-600 rounded bg-slate-100 dark:bg-slate-700 text-brand-text-light-primary dark:text-brand-light-text" />
            </div>
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-brand-text-light-secondary dark:text-brand-secondary-text mb-1">New Password</label>
              <input type="password" id="newPassword" name="newPassword" className="w-full p-2 border border-brand-border-light dark:border-slate-600 rounded bg-slate-100 dark:bg-slate-700 text-brand-text-light-primary dark:text-brand-light-text" />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-brand-text-light-secondary dark:text-brand-secondary-text mb-1">Confirm New Password</label>
              <input type="password" id="confirmPassword" name="confirmPassword" className="w-full p-2 border border-brand-border-light dark:border-slate-600 rounded bg-slate-100 dark:bg-slate-700 text-brand-text-light-primary dark:text-brand-light-text" />
            </div>
            <Button variant="primary" onClick={() => alert('Password change (placeholder)')}>Update Password</Button>
          </div>
        );
      case 'settings':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-brand-text-light-primary dark:text-white mb-3">Privacy & Other Settings</h3>
             <div className="flex items-center justify-between p-3 bg-brand-bg-light-card dark:bg-slate-700/50 rounded-lg shadow">
                <span className="text-brand-text-light-primary dark:text-brand-light-text">Make profile public to other students</span>
                <label htmlFor="profilePublicToggle" className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" id="profilePublicToggle" className="sr-only peer" />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-brand-accent-blue dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-slate-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-500 peer-checked:bg-brand-accent-blue"></div>
                </label>
            </div>
            <p className="text-sm text-brand-text-light-secondary dark:text-brand-secondary-text">
              More settings for notifications, data export, etc., will be available here.
              The global Dark/Light mode toggle is available in the main navigation bar.
            </p>
          </div>
        );
      default: return null;
    }
  };

  const SubTabButton: React.FC<{tabId: 'personal' | 'security' | 'settings', label: string, icon: React.ReactNode}> = ({tabId, label, icon}) => (
    <button
        onClick={() => setActiveSubTab(tabId)}
        className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-150
        ${activeSubTab === tabId 
            ? 'bg-brand-accent-blue text-white shadow' 
            : 'text-brand-text-light-secondary dark:text-brand-secondary-text hover:bg-slate-200 dark:hover:bg-slate-700'
        }`}
    >
        {icon}
        <span>{label}</span>
    </button>
  );

  return (
    <div>
      <h2 className="text-2xl font-bold text-brand-text-light-primary dark:text-white mb-6">My Profile</h2>
      <div className="mb-6 flex space-x-2 border-b border-brand-border-light dark:border-slate-700 pb-3 overflow-x-auto custom-scrollbar-sm">
        <SubTabButton tabId="personal" label="Personal Info" icon={<UserCircleIcon className="w-4 h-4"/>} />
        <SubTabButton tabId="security" label="Security" icon={<PencilIcon className="w-4 h-4"/>} />
        <SubTabButton tabId="settings" label="Settings" icon={<CogIcon className="w-4 h-4"/>} />
      </div>
      <div>
        {renderSubTabContent()}
      </div>
    </div>
  );
};

export default ProfileSection;
