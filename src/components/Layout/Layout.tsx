import React from 'react';
// import styles from './Layout.module.scss';
import Sidebar from '../Sidebar/Sidebar';
import MainContent from '../MainContent/MainContent';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Sidebar />
      <MainContent>{children}</MainContent>
    </>
  );
};

export default Layout;
