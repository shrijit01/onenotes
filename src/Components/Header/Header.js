import React from 'react';
import style from './header.module.css';

function Header() {
  return (
    <div className={style.header}>
      <h1 className={style.heading}>dev Notes</h1>
    </div>
  )
}

export default Header