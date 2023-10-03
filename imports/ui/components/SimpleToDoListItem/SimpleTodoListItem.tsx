import { Checkbox, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react'; 
import { SimpleToDoListItemStyle } from './SimpleToDoListItemStyle';
import { IToDos } from '/imports/modules/toDos/api/toDosSch';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { toDosApi } from '/imports/modules/toDos/api/toDosApi';
import { Edit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Delete from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { IModalContainer, ModalContainer } from '../../GeneralComponents/ModalContainer';
import { ToDosDetailContainer } from '/imports/modules/toDos/ui/pages/toDosDetail';
import Home from '../../pages/Home/Home';

export const SimpleToDoListItem = ({task, user, onRemove}) => {

    const navigate = useNavigate(); 
    const [modalOpen, setModalOpen] = React.useState(false); 

    const handleStatusToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
        toDosApi.changeToDoStatus(task._id, event.target.checked); 
    }

    const props = {
        open: modalOpen,
        onOpen: () => setModalOpen(true),
        onClose: () => setModalOpen(false),
        component: <ToDosDetailContainer screenState={'view'} id={task._id} />
    } ; 
    const onView = () => {
        // navigate(navigate(`/toDos/view/${task._id}`); 
        setModalOpen(!modalOpen) ;
    }

    const onEdit = () => {
        
        if(user._id != task.createdby){
            alert('Você não é o usuário que criou a tarefa!'); 
        }else{
            navigate(`/toDos/edit/${task._id}`); 
        }

    }

    return (
        <>
        <ListItem sx={SimpleToDoListItemStyle}>
            <ListItemIcon onClick={onView} sx={{cursor: 'pointer'}}>
                <VisibilityIcon />
            </ListItemIcon>
            <ListItemText
                primary={task.title}
                sx={task.status ? {textDecoration: 'line-through'} : {}}
                primaryTypographyProps={{color: 'black'}}
                secondary={'Criado por: ' + task.nomeUsuario}
                secondaryTypographyProps={{color: 'gray'}}
            />
            <ListItemIcon onClick={onEdit} sx={{cursor: 'pointer'}}>
                <Edit />
            </ListItemIcon>
                {
                    onRemove ? 
                    <ListItemIcon>
                        <Delete sx={{cursor: 'pointer'}} onClick={() => onRemove(task)}/>
                    </ListItemIcon> 
                    : <></>
                }
            <Checkbox 
                sx={{color: 'black'}}
                checked={task.status}
                onChange={handleStatusToggle}
                icon={<CheckCircleOutlineIcon />}
                checkedIcon={<CheckCircleIcon />}
                />
        </ListItem>
        <ModalContainer {...props as IModalContainer} />
        </>
    )
}