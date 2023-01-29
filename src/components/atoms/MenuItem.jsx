import React from 'react';

export const MenuItem = ({to, text}) => {
    return (
        <a className="text-white inline-block px-2 py-1 box-border rounded-md hover:underline" href={to}>{text}</a>
    );
}
