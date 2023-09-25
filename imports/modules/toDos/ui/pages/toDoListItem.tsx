import { Checkbox, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react'; 
import { IToDos } from '/imports/modules/toDos/api/toDosSch';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { toDosApi } from '/imports/modules/toDos/api/toDosApi';
import { Edit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


export const toDoListItem = ({task, user}) => {

    const navigate = useNavigate(); 

    const handleStatusToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
        toDosApi.changeToDoStatus(task._id, event.target.checked); 
    }

    const onView = () => {
        navigate(`/toDos/view/${task._id}`); 
    }

    const onEdit = () => {
        
        if(user._id != task.createdby){
            alert('Você não é o usuário que criou a tarefa!'); 
        }else{
            navigate(`/toDos/edit/${task._id}`); 
        }

    }

    console.log('current todo: ', task); 

    return (
        <ListItem onClick={onView}>
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