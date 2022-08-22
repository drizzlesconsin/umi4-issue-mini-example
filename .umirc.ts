import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '登录',
      path: '/login',
      layout: false,
      component: './Login',
      wrappers: ['@/wrappers/auth'],
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: 'CRUD 示例',
      path: '/table',
      access: 'table',
      component: './Table',
      // routes: [
      //   { name: 'Table1', path: '/table/1' },
      //   { name: 'Table2', path: '/table/2' },
      // ],
    },
  ],
  npmClient: 'yarn',
});
