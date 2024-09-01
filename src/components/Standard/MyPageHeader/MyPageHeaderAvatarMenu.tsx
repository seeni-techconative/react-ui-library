import React, { useCallback } from "react";

import { red } from "@mui/material/colors";

import {
    MyAvatar,
    MyBox,
    MyDivider,
    MyIconButton,
    MyListItemIcon,
    MyListItemText,
    MyMenu,
    MyMenuItem,
} from "../../Basic";
import { MenuItem } from "./my-page-header";
import { HEADER_MENU_CONFIG } from "./my-page-header-config";

interface MyPageHeaderAvatarMenuProps {
    avatarMenuList: MenuItem[];
    onMenuItemClick: (menu: MenuItem) => void;
}

const MyPageHeaderAvatarMenu = ({
    avatarMenuList,
    onMenuItemClick,
}: MyPageHeaderAvatarMenuProps) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = useCallback(
        (event: React.MouseEvent<HTMLElement>) => {
            setAnchorEl(event.currentTarget);
        },
        [setAnchorEl]
    );

    const handleClose = useCallback(() => {
        setAnchorEl(null);
    }, [setAnchorEl]);

    const handleMenuItemClick = useCallback(
        (menuItem: MenuItem) => {
            onMenuItemClick(menuItem);
        },
        [onMenuItemClick]
    );

    return (
        <>
            <MyIconButton color="inherit" onClick={handleClick}>
                <MyAvatar sx={{ bgcolor: red[500] }}>S</MyAvatar>
            </MyIconButton>

            <MyMenu
                {...HEADER_MENU_CONFIG}
                anchorEl={anchorEl}
                open={!!anchorEl}
                onClose={handleClose}
                onClick={handleClose}
            >
                {avatarMenuList?.map((item, index) => (
                    <MyBox key={index}>
                        {item.hasDivider && <MyDivider sx={{ my: 0.5 }} />}
                        <MyMenuItem onClick={() => handleMenuItemClick(item)}>
                            <MyListItemIcon>
                                <item.icon />
                            </MyListItemIcon>
                            <MyListItemText>{item.name}</MyListItemText>
                        </MyMenuItem>
                    </MyBox>
                ))}
            </MyMenu>
        </>
    );
};

export default MyPageHeaderAvatarMenu;
