import { ListItem, ListItemText } from '@mui/material';
import React from 'react'; 
import { SimpleToDoListItemStyle } from './SimpleToDoListItemStyle';

export const SimpleToDoListItem = ({task}) => {

    return (
        <ListItem sx={SimpleToDoListItemStyle}>
            <ListItemText
                primary={task.title}
                primaryTypographyProps={{color: 'black'}}
            />
        </ListItem>
    )
}