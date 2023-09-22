import { Checkbox, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react'; 
import { SimpleToDoListItemStyle } from './SimpleToDoListItemStyle';
import { IToDos } from '/imports/modules/toDos/api/toDosSch';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { toDosApi } from '/imports/modules/toDos/api/toDosApi';
import { Edit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


export const SimpleToDoListItem = ({task}) => {

    const navigate = useNavigate(); 

    const handleStatusToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
        toDosApi.changeToDoStatus(task._id, event.target.checked); 
    }

    const onEdit = () => {
        navigate(`/toDos/edit/${task._id}`); 
    }

    return (
        <ListItem sx={SimpleToDoListItemStyle}>
            <ListItemIcon onClick={onEdit} sx={{cursor: 'pointer'}}>
                <Edit />
            </ListItemIcon>
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