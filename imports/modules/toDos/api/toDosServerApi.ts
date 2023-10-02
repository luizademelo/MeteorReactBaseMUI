// region Imports
import { Recurso } from '../config/Recursos';
import { toDosSch, IToDos } from './toDosSch';
import { userprofileServerApi } from '/imports/userprofile/api/UserProfileServerApi';
import { ProductServerBase } from '/imports/api/productServerBase';
import { useUserAccount } from '/imports/hooks/useUserAccount';
import { Meteor } from 'meteor/meteor';
// endregion

class ToDosServerApi extends ProductServerBase<IToDos> {
    constructor() {
        super('toDos', toDosSch, {
            resources: Recurso,
        });

        const self = this;
        

        this.addTransformedPublication(
            'toDosList',
            (filter = {}) => {
                const userId = Meteor.userId();

				if (!userId) {
					return;
				}
        
                return this.defaultListCollectionPublication({...filter, $or: [
                    {createdby: userId}, {isPersonal: false}
                ]}, {
                    projection: { image: 1, title: 1, description: 1, createdby: 1, isPersonal: 1, status: 1 },
                    sort: {createdat: -1},
                });
            },
            (doc: IToDos & { nomeUsuario: string }) => {
                const userProfileDoc = userprofileServerApi
                    .getCollectionInstance()
                    .findOne({ _id: doc.createdby });
                return { ...doc, nomeUsuario: userProfileDoc?.username };
            }
        );

        this.addPublication('toDosDetail', (filter = {}) => {
            return this.defaultDetailCollectionPublication(filter, {});
        });

        this.addRestEndpoint(
            'view',
            (params, options) => {
                console.log('Params', params);
                console.log('options.headers', options.headers);
                return { status: 'ok' };
            },
            ['post']
        );

        this.addRestEndpoint(
            'view/:toDosId',
            (params, options) => {
                console.log('Rest', params);
                if (params.toDosId) {
                    return self
                        .defaultCollectionPublication({
                            _id: params.toDosId,
                        },
                        {}
                        )
                        .fetch();
                } else {
                    return { ...params };
                }
            },
            ['get'],
        );

        this.registerMethod('changeToDoStatus', this.serverChangeToDoStatus); 
    }
    serverChangeToDoStatus = (id:String, newStatus:Boolean, context) => {
        // return this.serverUpdate({_id: id, title: String, statusToggle: newStatus}, context); 
        return this.getCollectionInstance().update(id, {
            $set: {
                status: newStatus,
            }
        })
    }



}

export const toDosServerApi = new ToDosServerApi();
