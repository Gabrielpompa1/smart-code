import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';

// Views
import Home from './components/routes/Home.vue';
import Code from './components/routes/Code.vue';
import QuickFunc from './components/code/QuickFunc.vue'

import './index.css';

const routes = [
	{ path: '/', component: Home },
	{
		path: '/code',
		component: Code,
		children: [
			{
				name: 'Quick Func',
				path: '/code/quick-func',
				component: QuickFunc
			},
		],
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

const app = createApp(App);

app.use(router);

app.mount('#app');
