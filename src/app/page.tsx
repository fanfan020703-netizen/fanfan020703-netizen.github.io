'use client';

import { useState, useCallback } from 'react';
import BookCover from '@/components/book-cover';
import BookNavigation from '@/components/book-navigation';
import ProfilePage from '@/components/pages/profile-page';
import ResumePage from '@/components/pages/resume-page';
import PortfolioPage from '@/components/pages/portfolio-page';
import SocialPage from '@/components/pages/social-page';
import ContactPage from '@/components/pages/contact-page';

export type PageId = 'profile' | 'resume' | 'portfolio' | 'social' | 'contact';

export default function Home() {
  const [bookOpen, setBookOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageId>('profile');

  const handleOpenBook = useCallback(() => {
    setBookOpen(true);
  }, []);

  const handlePageChange = useCallback((page: PageId) => {
    setCurrentPage(page);
  }, []);

  // Book cover view
  if (!bookOpen) {
    return <BookCover onOpen={handleOpenBook} />;
  }

  // Book opened — full-screen page view with tab navigation
  const renderPage = () => {
    switch (currentPage) {
      case 'profile':
        return <ProfilePage />;
      case 'resume':
        return <ResumePage />;
      case 'portfolio':
        return <PortfolioPage />;
      case 'social':
        return <SocialPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <ProfilePage />;
    }
  };

  return (
    <div className="min-h-screen bg-desk">
      <BookNavigation
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      <main className="pt-16 sm:pt-20">
        {renderPage()}
      </main>
    </div>
  );
}
