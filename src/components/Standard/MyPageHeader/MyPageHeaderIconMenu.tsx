import React from "react";

import { MyIconButton } from "../../Basic";
import { MenuItem } from "./my-page-header";

interface MyPageHeaderIconMenuProps {
    iconMenuList: MenuItem[];
    onIconMenuItemClick: (menu: MenuItem) => void;
}

const MyPageHeaderIconMenu = ({
    iconMenuList,
    onIconMenuItemClick,
}: MyPageHeaderIconMenuProps) => {
    return (
        <>
            {iconMenuList?.map((item, index) => (
                <MyIconButton
                    key={index}
                    color="inherit"
                    onClick={() => onIconMenuItemClick(item)}
                >
                    <item.icon />
                </MyIconButton>
            ))}
        </>
    );
};

export default MyPageHeaderIconMenu;
