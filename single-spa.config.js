import { registerApplication, start } from 'single-spa'

registerApplication(
  'vue', 
  () => import('./src/todo-app-vue/src/main.js'),
  () => location.pathname === "/react" ? false : true
);

registerApplication(
  'react',
  () => import('./src/react/main.app.js'),
  () => location.pathname === "/vue"  ? false : true
);

start();