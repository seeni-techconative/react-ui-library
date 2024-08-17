import React from 'react';
import Avatar, { AvatarProps } from '@mui/material/Avatar';

export interface MyAvatarProps extends AvatarProps {
    // Add any additional props here
}

const MyAvatar: React.FC<MyAvatarProps> = (props) => {
    return (
        <Avatar {...props}>
            {props.children}
        </Avatar>
    );
};

export default MyAvatar;
