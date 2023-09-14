import { ListItem, ListItemText } from '@mui/material';
import React from 'react'; 

export const SimpleToDoListItem = ({task}) => {

    return (
        <ListItem >
            <ListItemText
                primary={task.title}
                sx={{color: 'red'}}
            />
        </ListItem>
    )
}