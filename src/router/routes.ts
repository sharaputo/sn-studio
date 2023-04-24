import { RouteRecordRaw } from 'vue-router';

export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    children: [
      {
        path: 'taplink',
        name: 'taplink',
        component: () => import('@/components/home/TaplinkTab.vue'),
      },
      {
        path: '',
        name: 'tilda',
        component: () => import('@/components/home/TildaTab.vue'),
      },
      {
        path: 'instagram',
        name: 'instagram',
        component: () => import('@/components/home/InstagramTab.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)',
    redirect: { name: 'home' },
  },
] as RouteRecordRaw[];
