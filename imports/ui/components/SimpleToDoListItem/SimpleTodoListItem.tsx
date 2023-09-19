import { ListItem, ListItemText } from '@mui/material';
import React from 'react'; 
import { SimpleToDoListItemStyle } from './SimpleToDoListItemStyle';
import { IToDos } from '/imports/modules/toDos/api/toDosSch';

export const SimpleToDoListItem = ({task}) => {


    return (
        <ListItem sx={SimpleToDoListItemStyle}>
            <ListItemText
                primary={task.title}
                primaryTypographyProps={{color: 'black'}}
                secondary={'Criado por: ' + task.nomeUsuario}
                secondaryTypographyProps={{color: 'gray'}}
            />
        </ListItem>
    )
}