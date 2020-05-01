import React from 'react';

import './custom-button.styles.scss';


const CustomButton = ({ children,
     inverted, 
     isAcceptBtn,
     isRejectBtn,
     ...otherProps}) => (
  <button 
  className ={`${inverted ? 'inverted' : ''} 
  ${isAcceptBtn ? 'isAcceptBtn' : ''} 
  ${isRejectBtn ? 'isRejectBtn' : ''} custom-button`} 
  {...otherProps}>
    {children}
  </button>
);

export default CustomButton;