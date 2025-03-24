import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavigationBar, Footer } from './Layout';
import Sidebar from './Sidebar';
import './Layout.css';

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  const location = useLocation();
  
  // Only show sidebar for HESI and TEAS learning center pages
  const shouldShowSidebar = 
    location.pathname === '/hesi-learning' || 
    location.pathname === '/teas-learning' ||
    location.pathname ===  '/hesi/mathematics' ||
    location.pathname === '/hesi/reading' ||
    location.pathname === '/hesi/grammar' ||
    location.pathname === '/hesi/vocabulary' ||
    location.pathname === '/hesi/biology' ||
    location.pathname === '/hesi/chemistry' ||
    location.pathname === '/hesi/anatomy' ||
    location.pathname === '/hesi/mathematics/basic-operations' ||
    location.pathname === '/hesi/mathematics/fractions-decimals' ||
    location.pathname === '/hesi/mathematics/ratios-proportions' ||
    location.pathname === '/hesi/mathematics/percentages' ||
    location.pathname === '/hesi/mathematics/measurements' ||
    location.pathname === '/hesi/mathematics/time-numerals' ||
    location.pathname === '/hesi/mathematics/dosage' ||
    location.pathname === '/hesi/mathematics/word-problems' ||
    location.pathname == '/hesi/mathematics/learning/basicoperations/basic-of-math' ||
    location.pathname === '/hesi/mathematics/learning/basicoperations/addition-subtraction' ||
    location.pathname ===  '/hesi/mathematics/learning/basicoperations/multiplication-division' ||
    location.pathname ===  '/hesi/mathematics/learning/basicoperations/order-operations'  ||
    location.pathname ===  '/hesi/mathematics/learning/basicoperations/number-properties' ||
    location.pathname === '/teas/reading' ||
    location.pathname === '/teas/math' ||
    location.pathname === '/teas/science' ||
    location.pathname === '/teas/english' ;

  return (
    <div className="page-container">
      <NavigationBar />
      <div className="flex flex-1">
        {shouldShowSidebar && <Sidebar />}
        <div className={`flex-1 overflow-y-auto bg-gray-50 ${!shouldShowSidebar ? 'px-4 sm:px-6 lg:px-8' : ''}`}>
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}