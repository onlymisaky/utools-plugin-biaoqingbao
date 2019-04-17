import React from 'react';
import { RouteProps } from "react-router-dom";
import { Index } from './views/Index';

interface IRoute extends RouteProps {
  label?: string;
  icon?: string;
}

const routes: IRoute[] = [
  {
    path: '/index',
    component: Index,
    label: '首页',
    icon: 'icon-shouye'
  },
  {
    path: '/discover',
    label: '发现',
    icon: 'icon-faxian',
    render: () => <h2>发现</h2>
  },
  {
    path: '/favorites',
    label: '收藏',
    icon: 'icon-shoucang',
    render: () => <h2>收藏</h2>
  },
  {
    path: '/settings',
    label: '设置',
    icon: 'icon-shezhi',
    render: () => <h2>设置</h2>
  }
];

export default routes
