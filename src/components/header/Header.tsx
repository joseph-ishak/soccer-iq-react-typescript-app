import React, { useState } from 'react';

import styles from './Header.module.css';
import logo from '../../assets/pfalogo.webp'
interface HeaderpageProps{
  active: boolean;
}

export function Header() {
  return (
    <div className={styles.header}>
     <img src={logo} className={styles.logo} alt="logo" />
    </div>
  );
}
