import { useContext, useEffect, useRef } from 'react';
import Channels from '../channels/Channels';
import Footer from '../footer/Footer';
import LogoutButton from '../logoutButton/LogoutButton';
import User from '../user/User';
import Logo from '../logo/Logo';
import styles from './AsideNav.module.css';
import Login from '../login/Login';
import { userContext } from '../context/userContext';

const AsideNav = () => {
  const { isLoggedIn, isMenuOpen, menuOpenHandler, outsideMenuCloser } =
    useContext(userContext);

  const wrapperRef = useRef();

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          outsideMenuCloser(false);
        }
      }

      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  useOutsideAlerter(wrapperRef);

  return (
    <aside
      ref={wrapperRef}
      className={`${styles.asideNavContainer} ${
        isMenuOpen && isLoggedIn && styles.openAsideContainer
      } ${!isLoggedIn && styles.openAsideContainer}`}
    >
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
