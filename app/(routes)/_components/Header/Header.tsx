'use client';

import { headerData } from '@/constans';
import React, { useState } from 'react';
import HeaderItem from './HeaderItem';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ModeToggle';
import MobileMenu from './MobileMenu';
import LoginModal from './LoginModal';

// Kullanıcı adı gösterimi için ayrı bir bileşen
const UserGreeting = ({ username }: { username: string }) => (
  <div className="text-xl font-semibold">Welcome, {username}</div>
);

const Header = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [username, setUsername] = useState<string | null>(null);

  // Login butonuna tıklandığında modalı açar
  const handleLoginButtonClick = () => {
    setIsLoginModalOpen(true);
  };

  // Modalı kapatır
  const handleCloseModal = () => {
    setIsLoginModalOpen(false);
  };

  // Kullanıcı giriş yaptığında çalışır
  const handleLogin = (username: string) => {
    setUsername(username);
    setIsLoginModalOpen(false);
  };
  const handleLogout = () => {
    setUsername(null); // Kullanıcı adını sıfırla
    console.log('User logged out'); // Çıkış işlemi için ekstra logic eklenebilir
  };

  // Header menü öğelerini render eder
  const renderHeaderItems = () => {
    return headerData.map((item, index) => (
      <HeaderItem key={index} href={item.href} label={item.label} />
    ));
  };

  // Login butonu
  const loginButton = (
    <Button variant="mybutton" size="xl" onClick={handleLoginButtonClick} aria-label="Login">
      Login
    </Button>
  );

  const logoutButton = (
    <Button variant="mybutton" size="xl" onClick={handleLogout} aria-label="Logout">
      Logout
    </Button>
  );


  // Book A Rental butonu
  const bookRentalButton = (
    <Button variant="mybutton" size="xl" aria-label="Book A Rental">
      Book A Rental
    </Button>
  );

  return (
    <div className="py-2 bgone">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-semibold text-myprimary">LOGO</h1>

        {/* Masaüstü menü */}
        <div className="hidden lg:flex lg:flex-row items-center justify-between mx-auto space-x-12">
          {renderHeaderItems()}
        </div>

        
        {/* Kullanıcı giriş yapmışsa hoş geldin mesajı ve çıkış butonu, yoksa login butonu */}
        {username ? (
          <div className="flex items-center space-x-4">
            <UserGreeting username={username} />
            {logoutButton}
          </div>
        ) : (
          loginButton
        )}

        {/* Sağ taraftaki butonlar ve mod değiştirici */}
        <div className="flex flex-row items-center justify-center space-x-4">       
          <MobileMenu />
          {bookRentalButton}
          <ModeToggle />
        </div>
      </div>

      {/* Login Modal */}
      <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseModal} onLogin={handleLogin} />
    </div>
  );
};

export default Header;