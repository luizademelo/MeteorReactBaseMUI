// region Imports
import { ProductBase } from '../../../api/productBase';
import { toDosSch, IToDos } from './toDosSch';

class ToDosApi extends ProductBase<IToDos> {
    constructor() {
        super('toDos', toDosSch, {
            enableCallMethodObserver: true,
            enableSubscribeObserver: true,
        });
    }

    changeToDoStatus = (id:String, newStatus:Boolean, callback=()=>{}) => {
        this.callMethod('changeToDoStatus', id, newStatus, callback); 
    }
}

export const toDosApi = new ToDosApi();
