import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: { // 設置路徑別名
            '@': path.resolve(__dirname, './src'),
            '@utils': path.resolve(__dirname, './src/cores/utils'),
            '@components': path.resolve(__dirname, './src/components'),
            '@views': path.resolve(__dirname, './src/views'),
            '@pages': path.resolve(__dirname, './src/views/pages'),
            '@store': path.resolve(__dirname, './src/store'),
            '@router': path.resolve(__dirname, './src/router'),
            '@assets': path.resolve(__dirname, './src/assets')
        }
    },
})
