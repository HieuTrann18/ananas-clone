import React from 'react';
import './Button.css'
const Button = ({content}) => {
    return (
        <div>
            <button className='btn-primary'>{content}</button>
        </div>
    );
};

export default Button;