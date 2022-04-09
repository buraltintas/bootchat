import { useContext } from 'react';
import Channels from '../channels/Channels';
import Footer from '../footer/Footer';
import LogoutButton from '../logoutButton/LogoutButton';
import User from '../user/User';
import Logo from '../logo/Logo';
import styles from './AsideNav.module.css';
import Login from '../login/Login';
import { userContext } from '../context/userContext';

const AsideNav = () => {
  const { isLoggedIn } = useContext(userContext);

  return (
    <aside className={styles.asideNavContainer}>
      <Logo />
      {!isLoggedIn && <Login />}
      {isLoggedIn && <User />}
      {isLoggedIn && <Channels />}
      {isLoggedIn && <LogoutButton />}
      <Footer />
    </aside>
  );
};

export default AsideNav;
