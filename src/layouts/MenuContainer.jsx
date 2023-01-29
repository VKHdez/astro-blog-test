
import React from 'react';

export const MenuContainer = ({children}) => {
    return(
        <div className="max-w-4xl flex justify-between m-auto ">
            {children}
        </div>
    );
}
