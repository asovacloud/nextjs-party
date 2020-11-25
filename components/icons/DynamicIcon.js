import React from 'react';
import Twitter from './Twitter';
import Mail from './Mail';
import Phone from './Phone';

const Components = {
    'twitter': Twitter,
    'mail': Mail,
    'phone': Phone,
}

const DynamicIcon = ({ type }) => {
    if (typeof Components[type] !== 'undefined') {
        const Component = Components[type]
        return <Component />
    }
    return null
};

export default DynamicIcon;