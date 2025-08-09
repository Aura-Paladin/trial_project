import React, { useState } from 'react';
import { Search, User, Menu, X, Heart, ShoppingBag } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onNavigate('search');
    }
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="w-8 h-8 bg-[#65E856] rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Freely</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onNavigate('home')}
              className={`text-sm font-medium transition-colors hover:text-[#65E856] ${
                currentPage === 'home' ? 'text-[#65E856]' : 'text-gray-700'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('browse')}
              className={`text-sm font-medium transition-colors hover:text-[#65E856] ${
                currentPage === 'browse' ? 'text-[#65E856]' : 'text-gray-700'
              }`}
            >
              Browse
            </button>
            <button
              onClick={() => onNavigate('categories')}
              className={`text-sm font-medium transition-colors hover:text-[#65E856] ${
                currentPage === 'categories' ? 'text-[#65E856]' : 'text-gray-700'
              }`}
            >
              Categories
            </button>
            <button
              onClick={() => onNavigate('about')}
              className={`text-sm font-medium transition-colors hover:text-[#65E856] ${
                currentPage === 'about' ? 'text-[#65E856]' : 'text-gray-700'
              }`}
            >
              About
            </button>
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search free products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4"
              />
            </div>
          </form>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onNavigate('wishlist')}
              className="text-gray-600 hover:text-[#65E856]"
            >
              <Heart className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onNavigate('claimed')}
              className="text-gray-600 hover:text-[#65E856]"
            >
              <ShoppingBag className="w-5 h-5" />
            </Button>
            <Button
              onClick={() => onNavigate('profile')}
              variant="ghost"
              className="p-0"
            >
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search free products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4"
                />
              </div>
            </form>
            <nav className="space-y-2">
              <button
                onClick={() => {
                  onNavigate('home');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#65E856] hover:bg-gray-50 rounded-md"
              >
                Home
              </button>
              <button
                onClick={() => {
                  onNavigate('browse');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#65E856] hover:bg-gray-50 rounded-md"
              >
                Browse
              </button>
              <button
                onClick={() => {
                  onNavigate('categories');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#65E856] hover:bg-gray-50 rounded-md"
              >
                Categories
              </button>
              <button
                onClick={() => {
                  onNavigate('wishlist');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#65E856] hover:bg-gray-50 rounded-md"
              >
                Wishlist
              </button>
              <button
                onClick={() => {
                  onNavigate('claimed');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#65E856] hover:bg-gray-50 rounded-md"
              >
                My Claims
              </button>
              <button
                onClick={() => {
                  onNavigate('profile');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#65E856] hover:bg-gray-50 rounded-md"
              >
                Profile
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};