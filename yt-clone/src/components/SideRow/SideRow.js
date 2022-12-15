import React from 'react';
import './SideRow.css';

const SideRow = ({selected, Icon, title}) => {
  return (
    <div className={`siderow ${selected ? 'selected' : ''}`} >
        <Icon className='siderow-icon' />
        <h2 className='siderow-title'>{title}</h2>
    </div>
  )
}


export default SideRow;