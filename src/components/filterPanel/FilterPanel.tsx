import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import styles from './FilterPanel.module.css';

export function FilterPanel() {



  return (
    <div className={styles.filterpanel}>
        I am the filter panel
    </div>
  );
}
