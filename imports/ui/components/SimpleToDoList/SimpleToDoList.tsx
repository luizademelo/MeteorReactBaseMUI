import React from 'react'; 
import { List, ListItem, ListItemText, ListSubheader } from '@mui/material';
import { IToDos } from '/imports/modules/toDos/api/toDosSch';
import { IToDosList, subscribeConfig } from '/imports/modules/toDos/ui/pages/toDosList';
import { IDefaultListProps } from '/imports/typings/BoilerplateDefaultTypings';
import { toDosApi } from '/imports/modules/toDos/api/toDosApi';
import { useTracker, withTracker } from 'meteor/react-meteor-data';
import { SimpleToDoListItem } from '../SimpleToDoListItem/SimpleTodoListItem';
import { SimpleToDoListStyle } from './SimpleToDoListStyle';



export const SimpleToDoList = ({props}) => {

    const config = subscribeConfig.get(); 
    const filter = {...config.filter};

    const {sort, limit} = props; 

    const skip = (config.pageProperties.currentPage-1) * config.pageProperties.pageSize;

    // Collection Subscribe
    
    const toDoss = useTracker(() => {
        const subHandle = toDosApi.subscribe('toDosList', filter,{sort, limit, skip}); 
        const toDoss =  subHandle?.ready() ? toDosApi.find(filter,{sort, limit}).fetch() : []; 
        return toDoss; 
    }) 

    console.log('todos: ', toDoss);

    return (
        <List>
            {toDoss.map((todo) => <SimpleToDoListItem key={todo._id} task={todo}/>)}
        </List>
    )
}