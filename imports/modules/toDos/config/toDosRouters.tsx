import React from 'react';
import ToDosContainer from '../ui/pages/toDosContainer';
import { IRoute } from '../../modulesTypings';

export const toDosRouterList: IRoute[] = [
  {
    path: '/toDos/:screenState/:toDosId',
    component: ToDosContainer,
    isProtected: true,
  },
  {
    path: '/toDos/:screenState',
    component: ToDosContainer,
    isProtected: true,
  },
  {
    path: '/toDos',
    component: ToDosContainer,
    isProtected: true,
  },
];
