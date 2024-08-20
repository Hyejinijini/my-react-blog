import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import terser from '@rollup/plugin-terser'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@api': path.resolve(__dirname, './src/api'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@common': path.resolve(__dirname, './src/common'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
      '@pages': path.resolve(__dirname, './src/pages')
    }
  },
  // scss 전역 사용
  css: {
    postcss: './postcss.config.cjs',
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/styles/scss/main.scss";`
      }
    }
  },
  // build 옵션 추가
  build: {
    target: 'esnext', // esnext로 설정하면 최신 ecma 를 지원하는 브라우저를 대상으로 빌드
    rollupOptions: {
      // vite 자체가 Rollup 을 쓰고 있어요.
      plugins: [
        terser({
          // 자바스크립트 난독화, 압축하는 도구
          compress: {
            drop_console: true, // console 관련 다 지움
            drop_debugger: true // debugger 다 지움
          }
        })
      ]
    }
  }
})
