import React from 'react'
import { red } from '@mui/material/colors';

import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { MyAppBar, MyAvatar, MyDivider, MyIconButton, MyInputAdornment, MyStack, MyTextField, MyToolbar, MyTypography } from '../../Basic'
const MyPageHeader = () => {
    return (
        <header>
            <MyAppBar position="static" color="default" sx={{ bgcolor: "white" }}>
                <MyToolbar>
                    <MyStack direction="row" alignItems="center" justifyContent="space-between" width="100%">
                        <MyTypography variant="h5">UI Library</MyTypography>

                        <MyStack px={5} maxWidth="500px" flexGrow={1}>
                            <MyTextField
                                variant="outlined"
                                id="outlined-start-adornment"
                                placeholder='Search...'
                                InputProps={{
                                    startAdornment: <MyInputAdornment position='start'>
                                        <SearchOutlinedIcon color='inherit' />
                                    </MyInputAdornment>,
                                }}
                                sx={{
                                    input: {
                                        height: "30",
                                        py: 1
                                    },
                                }}
                            />
                        </MyStack>

                        <MyStack direction="row" alignItems="center" justifyContent="flex-end" gap={1}>
                            <MyIconButton color="inherit">
                                <AutoAwesomeOutlinedIcon />
                            </MyIconButton>

                            <MyIconButton color="inherit">
                                <WidgetsOutlinedIcon />
                            </MyIconButton>

                            <MyIconButton color="inherit">
                                <NotificationsOutlinedIcon />
                            </MyIconButton>

                            <MyDivider orientation="vertical" variant="middle" flexItem color="white" />

                            <MyIconButton color="inherit">
                                <MyAvatar sx={{ bgcolor: red[500] }}>S</MyAvatar>
                            </MyIconButton>

                        </MyStack>
                    </MyStack>
                </MyToolbar>
            </MyAppBar>
        </header>
    )
}

export default MyPageHeader