import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 1. 设置相对路径，确保在子目录 /zt/ 下能找到资源
  base: './', 
  // 2. 关键修复：浏览器没有 process 对象，我们需要定义它，防止页面崩溃
  define: {
    'process.env': {}
  }
})