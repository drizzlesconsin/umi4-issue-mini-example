import { defineConfig } from '@umijs/max';

export default defineConfig({
  publicPath: '/xxxx/',
  outputPath: 'dist/xxxx/',
  copy: [{ from: 'dist/xxxx/index.html', to: 'dist' }],
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
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'yarn',
});
