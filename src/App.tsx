import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { BrowsePage } from './pages/BrowsePage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ClaimPage } from './pages/ClaimPage';
import { SuccessPage } from './pages/SuccessPage';
import { ProfilePage } from './pages/ProfilePage';
import { AboutPage } from './pages/AboutPage';
import { SignUpPage } from './pages/SignUpPage';
import { SignInPage } from './pages/SignInPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { WishlistPage } from './pages/WishlistPage';
import { ClaimedPage } from './pages/ClaimedPage';
import { HelpCenterPage } from './pages/HelpCenterPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { SettingsPage } from './pages/SettingsPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'browse':
        return <BrowsePage onNavigate={handleNavigate} />;
      case 'product':
        return <ProductDetailPage onNavigate={handleNavigate} />;
      case 'claim':
        return <ClaimPage onNavigate={handleNavigate} />;
      case 'success':
        return <SuccessPage onNavigate={handleNavigate} />;
      case 'profile':
        return <ProfilePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'register':
      case 'signup':
        return <SignUpPage onNavigate={handleNavigate} />;
      case 'signin':
      case 'login':
        return <SignInPage onNavigate={handleNavigate} />;
      case 'categories':
        return <CategoriesPage onNavigate={handleNavigate} />;
      case 'wishlist':
        return <WishlistPage onNavigate={handleNavigate} />;
      case 'claimed':
        return <ClaimedPage onNavigate={handleNavigate} />;
      case 'help':
        return <HelpCenterPage onNavigate={handleNavigate} />;
      case 'terms':
        return <TermsPage onNavigate={handleNavigate} />;
      case 'privacy':
        return <PrivacyPage onNavigate={handleNavigate} />;
      case 'settings':
        return <SettingsPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;