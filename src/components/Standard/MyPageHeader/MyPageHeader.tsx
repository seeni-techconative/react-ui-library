import React from 'react';

import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';

import { MyAppBar, MyDivider, MyStack, MyToolbar, MyTypography } from '../../Basic';

import MyPageHeaderAvatarMenu from './MyPageHeaderAvatarMenu';
import { MenuItem } from './my-page-header';
import MyPageHeaderIconMenu from './MyPageHeaderIconMenu';
import MyPageHeaderSearchBar from './MyPageHeaderSearchBar';

interface MyPageHeaderProps {
    avatarMenuList: MenuItem[],
    onAvatarMenuItemClick: (menu: MenuItem) => void,
    iconMenuList: MenuItem[],
    onIconMenuItemClick: (menu: MenuItem) => void,
    onSearch: (searchQuery: string) => void
}

const MyPageHeader = ({ avatarMenuList, onAvatarMenuItemClick, iconMenuList, onIconMenuItemClick, onSearch }: MyPageHeaderProps) => {
    return (
        <header>
            <MyAppBar position="static" color="default" sx={{ bgcolor: "white" }}>
                <MyToolbar>
                    <MyStack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        width="100%"
                    >
                        <MyStack
                            direction="row"
                            alignItems="center"
                            gap={1}
                        >
                            <PaletteOutlinedIcon />
                            <MyTypography variant="h5">UI LIBRARY</MyTypography>
                        </MyStack>

                        <MyStack
                            direction="row"
                            alignItems="center"
                            justifyContent="flex-end"
                            gap={1}
                        >
                            <MyPageHeaderSearchBar onSearch={onSearch} />

                            <MyPageHeaderIconMenu
                                iconMenuList={iconMenuList} onIconMenuItemClick={onIconMenuItemClick}
                            />

                            <MyDivider
                                orientation="vertical"
                                variant="middle"
                                flexItem
                            />

                            <MyPageHeaderAvatarMenu
                                avatarMenuList={avatarMenuList} onMenuItemClick={onAvatarMenuItemClick}
                            />
                        </MyStack>
                    </MyStack>
                </MyToolbar>
            </MyAppBar>
        </header>
    )
}

export default MyPageHeader