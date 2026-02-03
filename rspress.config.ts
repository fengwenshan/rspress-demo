
// @ts-ignore
import { defineConfig } from '@rspress/core';
import path from 'node:path';


const __dirname = path.resolve();
export default defineConfig({
  // 文档根目录
  root: 'docs',
  title: '我的网站',
  logo: '/logo-480x480.png',
  // 或支持深色/浅色模式：
  // logo: {
  //   light: '/logo-light.png',
  //   dark: '/logo-dark.png',
  // },
  logoText: '我的网站',
  /** 全局样式 */
   globalStyles: path.join(__dirname, 'theme/styles/index.css'),
   /** 全局组件 */
   globalUIComponents: [
    
    // path.join(__dirname, 'components', 'MyComponent.tsx')
    /*
      [
        path.join(__dirname, 'components', 'MyComponent.tsx'),
        { // props 对象
          name: 'MyComponent',
        },
      ]
     */
  ],
  // 这些文件将不会被注册为路由（支持 glob 模式）
  route: {
    // 这些文件会被注册为路由（支持 glob 模式）
    // include: ['other-dir/**/*'],
    // 这些文件将不会被注册为路由（支持 glob 模式）
    exclude: ['components/**/*', 'fragments/**/*'],
  },
});