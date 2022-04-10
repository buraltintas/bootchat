import AsideNav from './components/asideNav/AsideNav';
import ChatScreen from './components/chatScreen/ChatScreen';
import { UserProvider } from './components/context/userContext';
import styles from './App.module.css';

function App() {
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
