import type { UserConfig, ConfigEnv } from 'vite'
import { loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

export default ({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)

  const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY_URL } = env

  console.log('current env:', env)

  return {
    base: VITE_PUBLIC_PATH,
    root,
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve(__dirname, 'src'),
        },
      ],
    },
    server: {
      https: false,
      // Listening on all local IPs
      host: true,
      port: Number(VITE_PORT),
      // Load proxy configuration from .env
      proxy: {
        '/api': {
          target: VITE_PROXY_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    plugins: [
      vue(),
      createSvgIconsPlugin({
        // 指定要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // 执行icon name的格式
        symbolId: 'icon-[dir]-[name]',
      }),
    ],
  }
}
