import React from 'react';
import styles from './header.module.css';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../imgs/logo.svg'

export const Header = () => {
  return (
    <header className= {`${styles.header} container`}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}><Logo /></Link>
        <Link to="/login" className={styles.sign}> Login </Link>
      </nav>

    </header>
  )
}

export default Header
