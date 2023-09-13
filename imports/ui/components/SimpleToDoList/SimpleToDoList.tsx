import React from 'react'; 
import { List, ListItem, ListItemText } from '@mui/material';
import { IToDos } from '/imports/modules/toDos/api/toDosSch';

interface ISimpleToDoList {
    skip: number,
    limit: number,
}

export const SimpleToDoList = (props: ISimpleToDoList) => {


    return (
        <>
            <List>
                {/* {data?.map(task => {
                    <ListItem>
                        <ListItemText primary={task.title}/>
                    </ListItem>
                })} */}
            </List>
        </>
    )
}