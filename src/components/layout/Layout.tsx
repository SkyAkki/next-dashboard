import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useRouter } from 'next/router';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter()
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={`flex-grow w-full ${router.pathname === "/" ? "m-0" : "mx-auto container"}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
