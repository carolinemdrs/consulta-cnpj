import React from 'react';
import styles from './button.module.css';

export const Button = ({children, ...props}) => {
  return (
    <div>
      <button {...props} className={styles.button}>{children}</button>
    </div>
  )
}
export default Button