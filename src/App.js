import { useState } from 'react';
import AsideNav from './components/asideNav/AsideNav';
import { UserProvider } from './components/context/userContext';

function App() {
  return (
    <UserProvider>
      <AsideNav />
    </UserProvider>
  );
}

export default App;
