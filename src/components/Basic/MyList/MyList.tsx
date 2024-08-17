import React from 'react';
import List, { ListProps } from '@mui/material/List';

export interface MyListProps extends ListProps {
    // Add any additional props here
}

const MyList: React.FC<MyListProps> = (props) => {
    return (
        <List {...props}>
            {props.children}
        </List>
    );
};

export default MyList;
