import { IDoc } from '/imports/typings/IDoc';

export const toDosSch = {
    image: {
        type: String,
        label: 'Imagem',
        defaultValue: '',
        optional: true,
        isImage: true,
        defaultSize: {
            width: 300,
            height: 300,
        },
    },
    title: {
        type: String,
        label: 'Título',
        defaultValue: '',
        optional: false,
    },
    description: {
        type: String,
        label: 'Descrição',
        defaultValue: '',
        optional: true,
    },
    check: {
        type: Object,
        label: 'check box',
        defaultValue: {},
        optional: true,
        options: ['Todo', 'Doing', 'Done'],
    },
    isPersonal: {
        type: Boolean,
        label: 'É uma tarefa pessoal',
        defaultValue: false,
        optional: false,
    },
    status: {
        type: Boolean,
        label: 'Status',
        defaultValue: false,
        optional: true,
    },
    type: {
        type: String,
        label: 'Tipo',
        defaultValue: '',
        optional: false,
        options: [
            { value: 'normal', label: 'Normal' },
            { value: 'hard', label: 'Dificil' },
            { value: 'internal', label: 'Interna' },
            { value: 'extra', label: 'Extra' },
        ],
    },
    typeMulti: {
        type: [String],
        label: 'Tipo com vários valores',
        defaultValue: '',
        optional: false,
        multiple: true,
        visibilityFunction: (doc: any) => !!doc.type && doc.type === 'extra',
        options: [
            { value: 'normal', label: 'Normal' },
            { value: 'extra', label: 'Extra' },
            { value: 'minimo', label: 'Minimo' },
        ],
    },
    date: {
        type: Date,
        label: 'Data',
        defaultValue: '',
        optional: true,
    },
    files: {
        type: [Object],
        label: 'Arquivos',
        defaultValue: '',
        optional: true,
        isUpload: true,
    },
    tasks: {
        type: [Object],
        label: 'Tarefas',
        defaultValue: '',
        optional: true,
        subSchema: {
            name: {
                type: String,
                label: 'Nome da Tarefa',
                defaultValue: '',
                optional: true,
            },
            description: {
                type: String,
                label: 'Descrição da Tarefa',
                defaultValue: '',
                optional: true,
            },
        },
    },

    statusRadio: {
        type: String,
        label: 'Status RadioButton',
        defaultValue: '',
        optional: true,
        radiosList: ['Todo', 'Doing', 'Done'],
    },

};

export interface IToDos extends IDoc {
    image: string;
    title: string;
    description: string;
    audio: string;
    statusCheck: object;
    status: boolean;
    isPersonal: boolean;
}
