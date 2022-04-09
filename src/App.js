import AsideNav from './components/asideNav/AsideNav';
import ChatScreen from './components/chatScreen/ChatScreen';
import { UserProvider } from './components/context/userContext';
import styles from './App.module.css';
import { useEffect, useState } from 'react';
import { fetchChannels } from './components/helpers/socket';

function App() {
  const [channels, setChannels] = useState();

  useEffect(() => {
    fetchChannels().then((res) => setChannels(res));
  }, []);

  return (
    <UserProvider>
      <div className={styles.container}>
        <AsideNav />
        <ChatScreen />
      </div>
    </UserProvider>
  );
}

export default App;
