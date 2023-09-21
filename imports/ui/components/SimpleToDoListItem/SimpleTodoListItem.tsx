import { Checkbox, ListItem, ListItemText } from '@mui/material';
import React from 'react'; 
import { SimpleToDoListItemStyle } from './SimpleToDoListItemStyle';
import { IToDos } from '/imports/modules/toDos/api/toDosSch';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { toDosApi } from '/imports/modules/toDos/api/toDosApi';


export const SimpleToDoListItem = ({task}) => {

    const handleStatusToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
        toDosApi.changeToDoStatus(task._id, event.target.checked); 
    }

    return (
        <ListItem sx={SimpleToDoListItemStyle}>
            <ListItemText
                primary={task.title}
                sx={task.status ? {textDecoration: 'line-through'} : {}}
                primaryTypographyProps={{color: 'black'}}
                secondary={'Criado por: ' + task.nomeUsuario}
                secondaryTypographyProps={{color: 'gray'}}
            />
            <Checkbox 
                sx={{color: 'black'}}
                checked={task.status}
                onChange={handleStatusToggle}
                icon={<CheckCircleOutlineIcon />}
                checkedIcon={<CheckCircleIcon />}
                />
        </ListItem>
    )
}