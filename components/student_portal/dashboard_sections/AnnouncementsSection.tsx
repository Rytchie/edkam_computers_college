import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BellIcon, ExclamationTriangleIcon } from '../../../constants/constants';

type AnnouncementFilter = 'all' | 'unread' | 'urgent' | 'course';

interface Announcement { // Renamed from DummyAnnouncement for clarity
  id: string;
  title: string;
  date: string;
  contentSnippet: string;
  priority: 'low' | 'medium' | 'high';
  isRead: boolean;
  course?: string;
}

const AnnouncementsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<AnnouncementFilter>('all');
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get<Announcement[]>('http://localhost:3001/api/announcements');
        setAnnouncements(response.data);
      } catch (err) {
        console.error("Error fetching announcements:", err);
        setError('Failed to load announcements. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  const filteredAnnouncements = announcements.filter(ann => {
    if (activeFilter === 'unread') return !ann.isRead;
    if (activeFilter === 'urgent') return ann.priority === 'high';
    // 'course' filter would need more logic if we had actual course data and selected course
    return true; 
  });

  // Update unread count based on fetched data
  const unreadCount = announcements.filter(a => !a.isRead).length;

  const FilterButton: React.FC<{filterId: AnnouncementFilter, label: string}> = ({filterId, label}) => (
     <button
        onClick={() => setActiveFilter(filterId)}
        className={`px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-colors duration-150 whitespace-nowrap
        ${activeFilter === filterId 
            ? 'bg-brand-accent-purple text-white shadow' 
            : 'bg-slate-200 dark:bg-slate-600 text-brand-text-light-secondary dark:text-brand-secondary-text hover:bg-slate-300 dark:hover:bg-slate-500'
        }`}
    >
        {label}
    </button>
  );


  return (
    <div>
      <h2 className="text-2xl font-bold text-brand-text-light-primary dark:text-white mb-6">Announcements & Notifications</h2>
      
      <div className="mb-6">
        <p className="text-sm text-brand-text-light-secondary dark:text-brand-secondary-text mb-2">
          Notification center with read/unread status tracking, email/push notifications, and scheduled announcements will be integrated here.
        </p>
        <div className="flex space-x-2 overflow-x-auto pb-2 custom-scrollbar-sm">
          <FilterButton filterId="all" label="All" />
          <FilterButton filterId="unread" label={`Unread (${unreadCount})`} />
          <FilterButton filterId="urgent" label="Urgent" />
          <FilterButton filterId="course" label="Course Specific (WIP)" />
        </div>
      </div>

      {isLoading && <p className="text-center text-brand-text-light-secondary dark:text-brand-secondary-text">Loading announcements...</p>}
      {error && <p className="text-center text-red-500 bg-red-100 dark:bg-red-700/30 p-3 rounded-md">{error}</p>}

      {!isLoading && !error && filteredAnnouncements.length > 0 && (
        <div className="space-y-4">
          {filteredAnnouncements.map(ann => (
            <div key={ann.id} className={`p-4 rounded-lg shadow border-l-4 ${
              ann.priority === 'high' ? 'border-red-500 bg-red-50 dark:bg-red-900/30' : 
              ann.priority === 'medium' ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/30' : 
              'border-slate-300 dark:border-slate-600 bg-brand-bg-light-card dark:bg-slate-700/50'
            } ${!ann.isRead ? 'font-semibold' : ''}`}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className={`text-lg ${!ann.isRead ? 'text-brand-text-light-primary dark:text-white' : 'text-brand-text-light-secondary dark:text-brand-secondary-text'}`}>
                    {ann.priority === 'high' && <ExclamationTriangleIcon className="w-5 h-5 inline mr-2 text-red-500 -mt-1" />}
                    {ann.title}
                  </h3>
                  <p className="text-xs text-brand-text-light-secondary dark:text-brand-secondary-text mt-0.5">
                    {ann.date} {ann.course && `| ${ann.course}`} {!ann.isRead && <span className="ml-2 px-1.5 py-0.5 bg-brand-accent-blue text-white text-[10px] rounded-full">New</span>}
                  </p>
                </div>
                {ann.priority === 'high' && !ann.isRead && (
                   <span className="text-xs font-bold text-red-500 dark:text-red-400 uppercase">Urgent</span>
                )}
              </div>
              <p className={`mt-2 text-sm ${!ann.isRead ? 'text-brand-text-light-primary dark:text-brand-light-text' : 'text-brand-text-light-secondary dark:text-brand-secondary-text'}`}>
                {ann.contentSnippet}
              </p>
              <button onClick={() => alert(`Mark as read/unread (placeholder for ${ann.id})`)} className="mt-2 text-xs text-brand-accent-blue hover:underline">
                {ann.isRead ? 'Mark as Unread' : 'Mark as Read'}
              </button>
            </div>
          ))}
        </div>
      )}

      {!isLoading && !error && filteredAnnouncements.length === 0 && (
         <div className="text-center py-10">
          <BellIcon className="w-16 h-16 text-brand-accent-purple mx-auto mb-4 opacity-50" />
          <p className="text-brand-text-light-secondary dark:text-brand-secondary-text">
            {announcements.length === 0 ? "No announcements available at the moment." : "No announcements matching your filter."}
          </p>
        </div>
      )}
    </div>
  );
};

export default AnnouncementsSection;
