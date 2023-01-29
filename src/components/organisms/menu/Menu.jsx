import React from 'react';

import {MenuTitleLogo} from '../../atoms/MenuTitleLogo';
import {MenuItem} from '../../atoms/MenuItem';
import {MenuContainer} from '../../../layouts/MenuContainer';
import {MenuLinkWrapper} from '../../../layouts/MenuLinkWrapper';


export const Menu = () => {
    return(
        <div className="bg-orange-800 lg:px-0 px-6 py-2 box-border w-full ">
            <MenuContainer>
                <MenuTitleLogo content="Test Blog"/>
                <MenuLinkWrapper>
                    <MenuItem to={"/"} text={"Blog"}/>
                    <MenuItem to={"/about"} text={"About"}/>
                </MenuLinkWrapper>
            </MenuContainer>
        </div>
    );
}
